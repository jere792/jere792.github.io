import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  client: string;
  company?: string;
  ruc?: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  currentImageIndex?: number;
  githubFrontend?: string;
  githubBackend?: string;
  githubSocial?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  lightboxProject: Project | null = null;
  showControls = true;
  controlsTimeout: any;

  projects: Project[] = [
    {
      id: 'mkapu',
      title: 'Mkapu-Import.exe',
      client: 'Mkapu-Import S.A.C.',
      ruc: '20613016946',
      date: 'Diciembre 2025 - Actual',
      description:
        'Web corporativa para empresa importadora especializada en administración, logística y ventas. Desarrollada con arquitectura de Microservicios Hexagonal, implementando comunicación en tiempo real mediante API REST y gestión dinámica de servicios en MySQL.',
      technologies: [
        'Angular',
        'HTML',
        'CSS',
        'API Rest',
        'Express.js',
        'Primeng',
        'NodeJs',
        'MySQL',
        'Azure',
      ],
      images: [
        'assets/projects/mkapu/mkapu-login.png',
        'assets/projects/mkapu/reporte-ventas-figma.png',
        'assets/projects/mkapu/gestion-productos.png',
        'assets/projects/mkapu/gestion-productos-detalles-1.png',
        'assets/projects/mkapu/gestion-productos-detalles-2.png',
        'assets/projects/mkapu/mkapu-foto.png',
      ],
      currentImageIndex: 0,
      githubFrontend: 'https://github.com/DominidM/MKapu_Import_Frontend',
      githubBackend: 'https://github.com/DominidM/MKapu_Import_Backend  ',
      githubSocial: 'https://www.tiktok.com/@mkapu.import',
    },
    {
      id: 'El Sabor Limeño',
      title: 'El-Sabor-Limeño.exe',
      client: 'Proyecto Personal',
      date: 'Diciembre 2025 - Actual',
      description:
        'Sistema web para restaurante con 3 vistas: administración completa, caja de ventas y portal de clientes. Incluye gestión de mesas, pedidos en tiempo real, menú dinámico, control de usuarios por roles y reportes. Desarrollada con arquitectura en capas modular (Controller-Service-DAO), autenticación JWT y Cloudinary.',

      technologies: [
        'Angular',
        'HTML',
        'SCSS',
        'API Rest',
        'Express.js',
        'SQL Server',
        'Cloudinary',
      ],
      images: [
        'assets/projects/elSaborLimeno/ElsaborLimeno-login.png',
        'assets/projects/elSaborLimeno/Gestion-Cajeros.png',
        'assets/projects/elSaborLimeno/Gestion-Cajeros-detalles.png',
        'assets/projects/elSaborLimeno/ElsaborLimeno-perfil.png',
        'assets/projects/elSaborLimeno/ElsaborLimeno-perfilSecurity.png',
      ],
      currentImageIndex: 0,
      githubFrontend: 'https://github.com/jere792/ElSaborLimeno-Frontend',
      githubBackend: 'https://github.com/jere792/ElSaborLimeno-Backend',
    },
    {
      id: 'Comunired',
      title: 'Comunired.exe',
      client: 'Proyecto Universitario',
      date: 'Julio - Noviembre 2025',
      description:
        'Red social interactiva de reportes ciudadanos destinada al uso de municipalidades. Desarrollada con arquitectura moderna, implementa comunicación en tiempo real mediante GraphQL y Apollo Client, con gestión dinámica de servicios en MongoDB.',
      technologies: [
        'Angular',
        'GraphQl',
        'HTML',
        'CSS',
        'Spring Boot',
        'MongoDB',
        'Apollo Client',
        'Cloudinary',
      ],
      images: [
        'assets/projects/comunired/comunired-login.png',
        'assets/projects/comunired/comunired-registro-cliente.png',
        'assets/projects/comunired/comunired-olvide-clave.png',
        'assets/projects/comunired/comunired-correo.png',
        'assets/projects/comunired/comunired-recuperar-clave.png',
        'assets/projects/comunired/comunired-admin-mapa.png',
        'assets/projects/comunired/comunired-gestion-quejas.png',
        'assets/projects/comunired/comunired-gestion-usuarios.png',
        'assets/projects/comunired/comunired-vista-publica.png',
        'assets/projects/comunired/comunired-vista-publica-perfil.png',
        'assets/projects/comunired/comunired-vista-publica-sugerencias.png',
        'assets/projects/comunired/comunired-vista-publica-mensajes.png',
        'assets/projects/comunired/comunired-soporte-perfil.png',
      ],
      currentImageIndex: 0,
      githubFrontend: 'https://github.com/DominidM/ComuniRed_Frontend',
      githubBackend: 'https://github.com/DominidM/ComuniRed_Backend',
    },
    {
      id: 'Romis Salon & Spa',
      title: 'Romis-Salon-$-Spa.exe',
      client: 'Proyecto Universitario',
      date: 'Julio - Noviembre 2025',
      description:
        'Sistema de gestión administrativa para salón spa desarrollado en ASP.NET Core MVC con SQL Server, utilizando stored procedures para la capa de datos y arquitectura fullstack (frontend y backend) en un único repositorio.',
      technologies: ['C#', 'CSHTML', 'CSS', 'SQL Server', 'ASP.NET Core MVC', 'Stored Procedures'],
      images: [
        'assets/projects/romisSpa/romis-spa-dashboard.png',
        'assets/projects/romisSpa/romis-spa-proveedores.png',
        'assets/projects/romisSpa/romis-spa-empleados.png',
        'assets/projects/romisSpa/romis-spa-empleados-hora.png',
        'assets/projects/romisSpa/romis-spa-productos.png',
        'assets/projects/romisSpa/romis-spa-inventario.png',
        'assets/projects/romisSpa/romis-spa-citas.png',
      ],
      currentImageIndex: 0,
      githubFrontend: 'https://github.com/DyerMandujano/PryArquitecturaSofware_SalonSPA',
      githubBackend: 'https://github.com/DyerMandujano/PryArquitecturaSofware_SalonSPA',
    },
  ];

  nextImage(project: Project) {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
    }
  }

  prevImage(project: Project) {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex =
        project.currentImageIndex === 0 ? project.images.length - 1 : project.currentImageIndex - 1;
    }
  }

  getCurrentImage(project: Project): string {
    return project.images[project.currentImageIndex || 0];
  }

  openLightbox(project: Project) {
    this.lightboxProject = { ...project };
    this.showControls = true;
    this.startControlsTimer();
  }

  closeLightbox() {
    this.lightboxProject = null;
    this.showControls = true;
    this.clearControlsTimer();
  }

  nextImageLightbox() {
    if (this.lightboxProject) {
      this.nextImage(this.lightboxProject);
      this.resetControlsTimer();
    }
  }

  prevImageLightbox() {
    if (this.lightboxProject) {
      this.prevImage(this.lightboxProject);
      this.resetControlsTimer();
    }
  }

  toggleControls() {
    this.showControls = !this.showControls;
    if (this.showControls) {
      this.startControlsTimer();
    } else {
      this.clearControlsTimer();
    }
  }

  showControlsTemporarily() {
    this.showControls = true;
    this.resetControlsTimer();
  }

  resetControlsTimer() {
    if (this.showControls) {
      this.startControlsTimer();
    }
  }

  private startControlsTimer() {
    this.clearControlsTimer();
    this.controlsTimeout = setTimeout(() => {
      this.showControls = false;
    }, 1500);
  }

  private clearControlsTimer() {
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
      this.controlsTimeout = null;
    }
  }
}
