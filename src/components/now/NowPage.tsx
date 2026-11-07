import { useState, useEffect, useCallback, useRef } from 'react';
import type * as React from 'react';

interface Track {
  song: string;
  artist: string;
  genre: string;
  audioUrl: string;
}

interface LrcLine {
  timeMs: number;
  text: string;
}

const tracks: Track[] = [
  {
    song: 'Maldito Duende',
    artist: 'Héroes del Silencio',
    genre: 'Rock',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606707/maldito_duende-heroes_silencio-mp3_qisfwy.mp3',
  },
  {
    song: 'Bailando Solo',
    artist: 'Los Bunkers',
    genre: 'Rock Latino',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606714/bailando_solo-bunkers-mp3_wga0fb.mp3',
  },
  {
    song: 'Entre Dos Tierras',
    artist: 'Héroes del Silencio',
    genre: 'Rock',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606703/entre_dos_tierras-heroes_silencio-mp3_dywghq.mp3',
  },
  {
    song: 'Bye Bye',
    artist: 'Vicky Palma',
    genre: 'Rock Latino',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606515/bye_bye-vicky_palma-mp3_jeo7k0.mp3',
  },
  {
    song: 'Mala Vida',
    artist: 'Mano Negra',
    genre: 'Rock/Ska',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606489/mala_vida-rancheros-mp3_y14peq.mp3',
  },
  {
    song: 'Suna',
    artist: 'Mar Copas',
    genre: 'Rock Chileno',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606489/suna-mar_copas-mp3_busjj9.mp3',
  },
  {
    song: 'Sobre la Ciudad',
    artist: 'Los Bunkers',
    genre: 'Rock Latino',
    audioUrl:
      'https://res.cloudinary.com/dpnxbnqxu/video/upload/v1773606487/sobre_la_ciudad-bunkers-mp3_ywaytz.mp3',
  },
];

const learning = [
  { title: 'Docker & Contenedores', source: 'docs oficiales + proyectos reales', percent: 29 },
  { title: 'Astro Islands', source: 'docs.astro.build', percent: 75 },
  { title: 'Design Systems (Figma)', source: 'referencias de Vercel + Linear', percent: 58 },
];

const setup = [
  {
    category: 'editor',
    items: [
      { icon: 'devicon-vscode-plain colored', name: 'VS Code', detail: 'One Dark Pro' },
      { icon: 'devicon-github-original', name: 'GitHub', detail: 'control de versiones' },
      { icon: 'devicon-powershell-plain colored', name: 'PowerShell', detail: 'terminal principal' },
    ],
  },
  {
    category: 'stack_diario',
    items: [
      { icon: 'devicon-react-original colored', name: 'React 19+', detail: 'frontend' },
      { icon: 'devicon-angular-plain colored', name: 'Angular', detail: 'frontend' },
      { icon: 'devicon-typescript-plain colored', name: 'TypeScript', detail: 'siempre tipado' },
      { icon: 'devicon-java-plain colored', name: 'Java', detail: 'backend' },
      { icon: 'devicon-spring-plain colored', name: 'Spring Boot', detail: 'APIs' },
      { icon: 'devicon-astro-plain colored', name: 'Astro', detail: 'framework' },
      { icon: 'devicon-mysql-plain colored', name: 'MySQL', detail: 'DB principal' },
    ],
  },
];

const personalNote =
  'No todo está bien, pero el código sí. ' +
  'Hay días donde todo pesa un poco más de lo normal, ' +
  'pero abrir el editor, ver el proyecto avanzar y aprender algo nuevo ' +
  'es lo que me recuerda para qué estoy haciendo todo esto. ' +
  'Estoy en 8vo ciclo, a un paso de terminar la carrera, ' +
  'con proyectos reales corriendo en paralelo. ' +
  'No es fácil equilibrar todo, pero cada semana encuentro la forma. ' +
  'Construyendo, aprendiendo, avanzando - aunque sea de a poco.';

function parseLrc(lrc: string): LrcLine[] {
  const lines: LrcLine[] = [];
  const re = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;
  for (const line of lrc.split('\n')) {
    const m = line.match(re);
    if (!m) continue;
    const ms = +m[1] * 60_000 + +m[2] * 1_000 + +m[3].padEnd(3, '0');
    const text = m[4].trim();
    if (text) lines.push({ timeMs: ms, text });
  }
  return lines.sort((a, b) => a.timeMs - b.timeMs);
}

function fmt(ms: number): string {
  if (!ms || isNaN(ms)) return '0:00';
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}

export function NowPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lastUpdated = 'Marzo 2026';
  const mood =
    'En modo construcción: proyectos reales, 8vo ciclo y aprendiendo algo nuevo cada semana.';

  const [showModal, setShowModal] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMs, setCurrentMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showVolume, setShowVolume] = useState(false);
  const [lyrics, setLyrics] = useState<LrcLine[]>([]);
  const [currentLyricIdx, setCurrentLyricIdx] = useState(-1);
  const [lyricsLoading, setLyricsLoading] = useState(false);
  const [lyricsNotFound, setLyricsNotFound] = useState(false);

  const audio = audioRef.current;

  const stopTick = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  const startTick = useCallback(() => {
    stopTick();
    tickRef.current = setInterval(() => {
      const a = audioRef.current;
      if (!a) return;
      setCurrentMs(a.currentTime * 1000);
      setDurationMs((a.duration || 0) * 1000);
      setProgressPct(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    }, 300);
  }, [stopTick]);

  const syncLyric = useCallback(() => {
    if (!lyrics.length) return;
    const idx = lyrics.reduce(
      (best, line, i) => (line.timeMs <= (audio?.currentTime ?? 0) * 1000 ? i : best),
      -1,
    );
    if (idx !== currentLyricIdx) {
      setCurrentLyricIdx(idx);
      setTimeout(() => {
        document
          .querySelector('.lyric-line.active')
          ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 50);
    }
  }, [lyrics, currentLyricIdx, audio]);

  const fetchLyrics = useCallback(async (track: Track) => {
    setLyricsLoading(true);
    setLyricsNotFound(false);
    setLyrics([]);
    try {
      const res = await fetch(
        `https://lrclib.net/api/get?artist_name=${encodeURIComponent(track.artist)}&track_name=${encodeURIComponent(track.song)}`,
      );
      const data = await res.json();
      const raw: string = data?.syncedLyrics ?? null;
      if (!raw) {
        setLyricsNotFound(true);
        setLyricsLoading(false);
        return;
      }
      setLyrics(parseLrc(raw));
      setLyricsLoading(false);
    } catch {
      setLyricsNotFound(true);
      setLyricsLoading(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
      stopTick();
    } else {
      a.play()
        .then(() => {
          setIsPlaying(true);
          startTick();
        })
        .catch(() => {});
    }
  }, [isPlaying, startTick, stopTick]);

  const playTrack = useCallback(
    (track: Track) => {
      if (currentTrack?.song === track.song) {
        togglePlay();
        return;
      }
      stopTick();
      const a = audioRef.current;
      if (!a) return;
      setCurrentTrack(track);
      setCurrentMs(0);
      setDurationMs(0);
      setProgressPct(0);
      setLyrics([]);
      setCurrentLyricIdx(-1);
      a.src = track.audioUrl;
      a.load();
      a.play()
        .then(() => {
          a.volume = volume / 100;
          setIsPlaying(true);
          startTick();
          fetchLyrics(track);
        })
        .catch(() => {});
    },
    [currentTrack, volume, startTick, stopTick, fetchLyrics, togglePlay],
  );

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
    setCurrentTrack(null);
    setCurrentMs(0);
    setDurationMs(0);
    setProgressPct(0);
    setLyrics([]);
    setCurrentLyricIdx(-1);
    stopTick();
  }, [stopTick]);

  const onEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentLyricIdx(-1);
    stopTick();
  }, [stopTick]);

  const seek = useCallback((seconds: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Math.max(0, Math.min(a.currentTime + seconds, a.duration));
  }, []);

  const seekFromBar = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const bar = e.currentTarget;
    const pct = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
    a.currentTime = pct * a.duration;
  }, []);

  const handleSetVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value;
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val / 100;
  }, []);

  const openModal = useCallback(() => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    stop();
    setShowModal(false);
    document.body.style.overflow = '';
  }, [stop]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!showModal || !currentTrack) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          e.preventDefault();
          seek(e.shiftKey ? 60 : 5);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seek(e.shiftKey ? -60 : -5);
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [showModal, currentTrack, togglePlay, seek, closeModal]);

  useEffect(() => {
    syncLyric();
  }, [syncLyric]);

  useEffect(() => {
    return () => {
      stopTick();
      document.body.style.overflow = '';
    };
  }, [stopTick]);

  const volumeIcon =
    volume === 0 ? 'pi pi-volume-off' : volume < 50 ? 'pi pi-volume-down' : 'pi pi-volume-up';

  return (
    <div className="now-container">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 39 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="code-content">
          <header className="now-header">
            <div className="header-top">
              <div>
                <h1 className="page-title"># /now</h1>
                <p className="page-subtitle">// Lo que está pasando en mi vida ahora mismo.</p>
              </div>
              <button className="music-btn" onClick={openModal} title="Ver mis canciones">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.793c3.563-1.08 9.484-.872 13.22 1.37a.937.937 0 01-.06 1.58z" />
                </svg>
                {isPlaying && (
                  <span className="music-badge">
                    <span className="badge-dot"></span>
                  </span>
                )}
              </button>
            </div>
            <p className="last-updated">
              <i className="pi pi-refresh"></i>
              Última actualización: <span className="update-date">{lastUpdated}</span>
            </p>
          </header>

          <section className="now-card note-card full-row">
            <div className="section-label">
              <span className="label-dot dot-pink"></span>
              <span className="label-comment">// nota_personal.txt</span>
            </div>
            <p className="note-text">{personalNote}</p>
            <span className="note-sign">— Jeremy, {lastUpdated}</span>
          </section>

          <div className="two-col-row">
            <section className="now-card workspace-card">
              <div className="section-label">
                <span className="label-dot dot-yellow"></span>
                <span className="label-comment">// workspace.config</span>
              </div>
              <div className="workspace-block">
                {setup.map((cat) => (
                  <div key={cat.category} className="ws-group">
                    <span className="ws-cat">{cat.category}:</span>
                    <div className="ws-items">
                      {cat.items.map((item) => (
                        <div key={item.name} className="ws-item">
                          <i className={item.icon}></i>
                          <span className="ws-name">{item.name}</span>
                          <span className="ws-detail">// {item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="now-card learning-card">
              <div className="section-label">
                <span className="label-dot dot-green"></span>
                <span className="label-comment">// learning_log</span>
              </div>
              <div className="learning-list">
                {learning.map((item) => (
                  <div key={item.title} className="learning-row">
                    <div className="lr-top">
                      <span className="lr-name">{item.title}</span>
                      <span className="lr-pct">{item.percent}%</span>
                    </div>
                    <div className="lr-bar">
                      <div className="lr-fill" style={{ width: item.percent + '%' }}></div>
                    </div>
                    <span className="lr-source">$ {item.source}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mood-row">
            <div className="mood-line">
              <span className="mood-prompt">&gt;</span>
              <span className="mood-text">{mood}</span>
              <span className="mood-cursor">&#9608;</span>
            </div>
          </section>
        </div>
      </div>

      <div className="status-bar">
        <div className="status-left">
          <span>
            <i className="pi pi-check-circle"></i> now.md
          </span>
          <span>
            <i className="pi pi-map-marker"></i> Lima, Perú
          </span>
        </div>
        <div className="status-right">
          <span>{lastUpdated}</span>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-player" onClick={(e) => e.stopPropagation()}>
            <div className="modal-tab-bar">
              <div className="modal-dots">
                <span className="dot red" onClick={closeModal}></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="modal-tab-title">music.json</span>
              <button className="modal-close-btn" onClick={closeModal}>
                <i className="pi pi-times"></i>
              </button>
            </div>

            <div className="modal-body">
              {currentTrack ? (
                <div className="now-playing-block">
                  <div className="np-info">
                    <div className={`np-vinyl ${isPlaying ? 'spinning' : ''}`}>
                      <div className="np-vinyl-center"></div>
                    </div>
                    <div className="np-meta">
                      <span className="np-status">
                        <span className={`np-dot ${isPlaying ? 'active' : ''}`}></span>
                        {isPlaying ? 'reproduciendo' : 'pausado'}
                      </span>
                      <span className="np-song">{currentTrack.song}</span>
                      <span className="np-artist">{currentTrack.artist}</span>
                    </div>
                  </div>

                  <div className="ctrl-row">
                    <button className="ctrl-btn" onClick={() => seek(-5)} title="-5s">
                      <i className="pi pi-replay"></i>
                    </button>
                    <button className="ctrl-btn play-btn" onClick={togglePlay}>
                      <i className={isPlaying ? 'pi pi-pause' : 'pi pi-play'}></i>
                    </button>
                    <button className="ctrl-btn" onClick={() => seek(5)} title="+5s">
                      <i className="pi pi-refresh"></i>
                    </button>
                    <button className="ctrl-btn stop-btn" onClick={stop}>
                      <i className="pi pi-stop"></i>
                    </button>
                    <div className="volume-wrap">
                      <button
                        className="ctrl-btn"
                        onClick={() => setShowVolume(!showVolume)}
                        title="Volumen"
                      >
                        <i className={volumeIcon}></i>
                      </button>
                      <div className={`volume-slider-wrap ${showVolume ? 'visible' : ''}`}>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={handleSetVolume}
                          className="volume-slider"
                        />
                        <span className="volume-pct">{volume}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="progress-bar-wrap" onClick={seekFromBar}>
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ width: progressPct + '%' }}></div>
                      <div className="progress-bar-thumb" style={{ left: progressPct + '%' }}></div>
                    </div>
                  </div>

                  <div className="time-row">
                    <span className="time-cur">{fmt(currentMs)}</span>
                    <span className="time-hint">← → 5s · Shift ±1min · Space</span>
                    <span className="time-tot">{fmt(durationMs)}</span>
                  </div>

                  <div className="lyrics-block">
                    {lyricsLoading && (
                      <div className="lyrics-loading">
                        <span className="lyr-prompt">$ fetching lyrics</span>
                        <span className="lyr-cursor">_</span>
                      </div>
                    )}
                    {lyricsNotFound && !lyricsLoading && (
                      <div className="lyrics-nf">
                        <i className="pi pi-search"></i>
                        <span>// letra no encontrada</span>
                      </div>
                    )}
                    {!lyricsLoading && lyrics.length > 0 && (
                      <div className="lyrics-scroll">
                        {lyrics.map((line, i) => (
                          <p
                            key={i}
                            className={`lyric-line ${i === currentLyricIdx ? 'active' : ''} ${i < currentLyricIdx ? 'past' : ''}`}
                          >
                            {line.text}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="no-track">
                  <i className="pi pi-headphones"></i>
                  <span>// selecciona una canción</span>
                </div>
              )}

              <div className="modal-divider">// canciones</div>

              <div className="track-list">
                {tracks.map((track, i) => (
                  <div
                    key={track.song}
                    className={`track-row ${currentTrack?.song === track.song ? 'active' : ''}`}
                    onClick={() => playTrack(track)}
                  >
                    <span className="track-num">
                      {currentTrack?.song === track.song && isPlaying ? (
                        <i className="pi pi-volume-up"></i>
                      ) : (
                        (i + 1).toString().padStart(2, '0')
                      )}
                    </span>
                    <div className="track-info">
                      <span className="track-song">{track.song}</span>
                      <span className="track-artist">{track.artist}</span>
                    </div>
                    <span className="track-genre">{track.genre}</span>
                  </div>
                ))}
              </div>
            </div>

            <audio ref={audioRef} onEnded={onEnded}></audio>

            <div className="modal-status">
              <span>{tracks.length} canciones · cloudinary</span>
              {currentTrack && (
                <span>
                  {fmt(currentMs)} / {fmt(durationMs)}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
