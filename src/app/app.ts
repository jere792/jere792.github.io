import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  title = 'Portafolio - Jeremy Anton';

}
