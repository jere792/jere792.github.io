import {
  Component, OnInit, OnDestroy,
  HostListener, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Track {
  song:     string;
  artist:   string;
  genre:    string;
  comment:  string;
  audioUrl: string;
}

export interface LrcLine {
  timeMs: number;
  text:   string;
}

@Component({
  selector: 'app-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './now.html',
  styleUrl: './now.scss',
})
export class Now implements OnInit, OnDestroy {

  @ViewChild('audioEl') audioElRef!: ElementRef<HTMLAudioElement>;

  lastUpdated = 'Marzo 2026';
  mood        = 'En modo construcción: proyectos reales, 8vo ciclo y aprendiendo algo nuevo cada semana.';

  // ── Modal ──────────────────────────────────────────────
  showModal = false;

  // ── Player ─────────────────────────────────────────────
  currentTrack: Track | null = null;
  isPlaying     = false;
  currentMs     = 0;
  durationMs    = 0;
  progressPct   = 0;
  volume        = 80; // 0-100
  showVolume    = false;
  private tickSub?: Subscription;

  // ── Letra ──────────────────────────────────────────────
  lyrics:          LrcLine[] = [];
  currentLyricIdx  = -1;
  lyricsLoading    = false;
  lyricsNotFound   = false;
  private lrcSub?: Subscription;

  // ── Tracks ─────────────────────────────────────────────
  tracks: Track[] = [
    {
      song:     'Maldito Duende',
      artist:   'Héroes del Silencio',
      genre:    'Rock',
      comment:  'un clásico que nunca falla',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606707/maldito_duende-heroes_silencio-mp3_qisfwy.mp3',
    },
    {
      song:     'Bailando Solo',
      artist:   'Los Bunkers',
      genre:    'Rock Latino',
      comment:  'para los días donde todo pesa',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606714/bailando_solo-bunkers-mp3_wga0fb.mp3',
    },
    {
      song:     'Entre Dos Tierras',
      artist:   'Héroes del Silencio',
      genre:    'Rock',
      comment:  'energía pura de principio a fin',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606703/entre_dos_tierras-heroes_silencio-mp3_dywghq.mp3',
    },
    {
      song:     'Bye Bye',
      artist:   'Vicky Palma',
      genre:    'Pop',
      comment:  'buena vibra para trabajar',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606515/bye_bye-vicky_palma-mp3_jeo7k0.mp3',
    },
    {
      song:     'Mala Vida',
      artist:   'Mano Negra',
      genre:    'Rock/Ska',
      comment:  'cuando necesito cambiar el ritmo',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606489/mala_vida-rancheros-mp3_y14peq.mp3',
    },
    {
      song:     'Suna',
      artist:   'Mar Copas',
      genre:    'Rock Chileno',
      comment:  'introspectiva, para pensar',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606489/suna-mar_copas-mp3_busjj9.mp3',
    },
    {
      song:     'Sobre la Ciudad',
      artist:   'Los Bunkers',
      genre:    'Rock Latino',
      comment:  'Lima de fondo, siempre',
      audioUrl: 'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606487/sobre_la_ciudad-bunkers-mp3_ywaytz.mp3',
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // ── Audio helpers ──────────────────────────────────────
  private get audio(): HTMLAudioElement {
    return this.audioElRef.nativeElement;
  }

  playTrack(track: Track): void {
    if (this.currentTrack?.song === track.song) {
      this.togglePlay();
      return;
    }
    this.stopTick();
    this.currentTrack    = track;
    this.currentMs       = 0;
    this.durationMs      = 0;
    this.progressPct     = 0;
    this.lyrics          = [];
    this.currentLyricIdx = -1;
    this.audio.src       = track.audioUrl;
    this.audio.load();
    this.audio.play()
      .then(() => { this.audio.volume = this.volume / 100; this.isPlaying = true; this.startTick(); this.fetchLyrics(track); })
      .catch(() => {});
  }

  togglePlay(): void {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      this.stopTick();
    } else {
      this.audio.play()
        .then(() => { this.isPlaying = true; this.startTick(); })
        .catch(() => {});
    }
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying         = false;
    this.currentTrack      = null;
    this.currentMs         = 0;
    this.durationMs        = 0;
    this.progressPct       = 0;
    this.lyrics            = [];
    this.currentLyricIdx   = -1;
    this.stopTick();
  }

  onEnded(): void {
    this.isPlaying       = false;
    this.currentLyricIdx = -1;
    this.stopTick();
  }

  seek(seconds: number): void {
    this.audio.currentTime = Math.max(0, Math.min(this.audio.currentTime + seconds, this.audio.duration));
  }

  seekFromBar(e: MouseEvent): void {
    const bar  = e.currentTarget as HTMLElement;
    const pct  = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
    this.audio.currentTime = pct * this.audio.duration;
  }

  setVolume(e: Event): void {
    const val = +(e.target as HTMLInputElement).value;
    this.volume = val;
    this.audio.volume = val / 100;
  }

  toggleVolume(): void {
    this.showVolume = !this.showVolume;
  }

  get volumeIcon(): string {
    if (this.volume === 0) return 'pi pi-volume-off';
    if (this.volume < 50)  return 'pi pi-volume-down';
    return 'pi pi-volume-up';
  }

  // ── Tick (progreso + letra) ────────────────────────────
  private startTick(): void {
    this.tickSub = interval(300).subscribe(() => {
      if (!this.audio) return;
      this.currentMs   = this.audio.currentTime * 1000;
      this.durationMs  = (this.audio.duration || 0) * 1000;
      this.progressPct = this.durationMs ? (this.currentMs / this.durationMs) * 100 : 0;
      this.syncLyric();
    });
  }

  private stopTick(): void {
    this.tickSub?.unsubscribe();
    this.tickSub = undefined;
  }

  private syncLyric(): void {
    if (!this.lyrics.length) return;
    const idx = this.lyrics.reduce((best, line, i) =>
      line.timeMs <= this.currentMs ? i : best, -1);
    if (idx !== this.currentLyricIdx) {
      this.currentLyricIdx = idx;
      setTimeout(() => {
        document.querySelector('.lyric-line.active')
          ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 50);
    }
  }

  // ── Letra via LRCLIB ──────────────────────────────────
  private fetchLyrics(track: Track): void {
    this.lyricsLoading  = true;
    this.lyricsNotFound = false;
    this.lyrics         = [];
    this.lrcSub?.unsubscribe();

    const url = `https://lrclib.net/api/get?artist_name=${encodeURIComponent(track.artist)}&track_name=${encodeURIComponent(track.song)}`;

    this.lrcSub = new Subscription();
    this.http.get<any>(url).subscribe({
      next: res => {
        this.lyricsLoading = false;
        const raw: string  = res?.syncedLyrics ?? null;
        if (!raw) { this.lyricsNotFound = true; return; }
        this.lyrics = this.parseLrc(raw);
      },
      error: () => { this.lyricsLoading = false; this.lyricsNotFound = true; }
    });
  }

  private parseLrc(lrc: string): LrcLine[] {
    const lines: LrcLine[] = [];
    const re = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;
    for (const line of lrc.split('\n')) {
      const m = line.match(re);
      if (!m) continue;
      const ms   = +m[1] * 60_000 + +m[2] * 1_000 + +m[3].padEnd(3,'0');
      const text = m[4].trim();
      if (text) lines.push({ timeMs: ms, text });
    }
    return lines.sort((a, b) => a.timeMs - b.timeMs);
  }

  // ── Teclado ────────────────────────────────────────────
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (!this.showModal || !this.currentTrack) return;
    if (['INPUT','TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
    switch (e.key) {
      case ' ':          e.preventDefault(); this.togglePlay();                         break;
      case 'ArrowRight': e.preventDefault(); this.audio.currentTime += e.shiftKey ? 60 : 5; break;
      case 'ArrowLeft':  e.preventDefault(); this.audio.currentTime -= e.shiftKey ? 60 : 5; break;
      case 'Escape':     this.closeModal();                                             break;
    }
  }

  // ── Formato tiempo ─────────────────────────────────────
  fmt(ms: number): string {
    if (!ms || isNaN(ms)) return '0:00';
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  }

  openModal():  void { this.showModal = true;  document.body.style.overflow = 'hidden'; }
  closeModal(): void { this.stop(); this.showModal = false; document.body.style.overflow = ''; }

  // ── Learning ───────────────────────────────────────────
  learning = [
    { title: 'Docker & Contenedores',  source: 'docs oficiales + proyectos reales', percent: 29 },
    { title: 'Angular Signals',         source: 'angular.dev blog oficial',          percent: 75 },
    { title: 'Design Systems (Figma)',  source: 'referencias de Vercel + Linear',    percent: 58 },
  ];

  // ── Workspace ──────────────────────────────────────────
  setup = [
    {
      category: 'editor',
      items: [
        { icon: 'devicon-vscode-plain colored',    name: 'VS Code',    detail: 'One Dark Pro'         },
        { icon: 'devicon-github-original',          name: 'GitHub',     detail: 'control de versiones' },
        { icon: 'pi pi-terminal',                   name: 'PowerShell', detail: 'terminal principal'   },
      ],
    },
    {
      category: 'stack_diario',
      items: [
        { icon: 'devicon-angular-plain colored',    name: 'Angular 19+', detail: 'frontend'      },
        { icon: 'devicon-typescript-plain colored', name: 'TypeScript',  detail: 'siempre tipado' },
        { icon: 'devicon-nodejs-plain colored',     name: 'NestJS',      detail: 'backend'        },
        { icon: 'devicon-mysql-plain colored',      name: 'MySQL',       detail: 'DB principal'   },
      ],
    },
  ];

  // ── Nota personal ──────────────────────────────────────
  personalNote =
    'No todo está bien, pero el código sí. ' +
    'Hay días donde todo pesa un poco más de lo normal, ' +
    'pero abrir el editor, ver el proyecto avanzar y aprender algo nuevo ' +
    'es lo que me recuerda para qué estoy haciendo todo esto. ' +
    'Estoy en 8vo ciclo, a un paso de terminar la carrera, ' +
    'con proyectos reales corriendo en paralelo. ' +
    'No es fácil equilibrar todo, pero cada semana encuentro la forma. ' +
    'Construyendo, aprendiendo, avanzando — aunque sea de a poco.';

  ngOnDestroy(): void {
    this.stopTick();
    this.lrcSub?.unsubscribe();
  }
}