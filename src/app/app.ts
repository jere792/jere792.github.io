import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { routeAnimations } from './animations/route-animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations]
})
export class App {
  title = 'Portafolio - Jeremy Anton';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
