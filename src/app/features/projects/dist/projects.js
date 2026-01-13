"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Projects = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Projects = /** @class */ (function () {
    function Projects() {
        this.lightboxProject = null;
        this.showControls = true;
        this.projects = [
            {
                id: 'mkapu',
                title: 'Mkapu-Import.exe',
                client: 'Mkapu-Import S.A.C.',
                ruc: '20613016946',
                date: 'Diciembre 2025 - Actual',
                description: 'Web corporativa para empresa importadora especializada en administración, logística y ventas. Desarrollada con arquitectura de Microservicios Hexagonal, implementando comunicación en tiempo real mediante API REST y gestión dinámica de servicios en MySQL.',
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
                githubSocial: 'https://www.tiktok.com/@mkapu.import'
            },
            {
                id: 'El Sabor Limeño',
                title: 'El-Sabor-Limeño.exe',
                client: 'Proyecto Personal',
                date: 'Diciembre 2025 - Actual',
                description: 'Sistema web para restaurante con 3 vistas: administración completa, caja de ventas y portal de clientes. Incluye gestión de mesas, pedidos en tiempo real, menú dinámico, control de usuarios por roles y reportes. Desarrollada con arquitectura en capas modular (Controller-Service-DAO), autenticación JWT y Cloudinary.',
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
                githubBackend: 'https://github.com/jere792/ElSaborLimeno-Backend'
            },
            {
                id: 'Comunired',
                title: 'Comunired.exe',
                client: 'Proyecto Universitario',
                date: 'Julio - Noviembre 2025',
                description: 'Red social interactiva de reportes ciudadanos destinada al uso de municipalidades. Desarrollada con arquitectura moderna, implementa comunicación en tiempo real mediante GraphQL y Apollo Client, con gestión dinámica de servicios en MongoDB.',
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
                githubBackend: 'https://github.com/DominidM/ComuniRed_Backend'
            },
            {
                id: 'Romis Salon & Spa',
                title: 'Romis-Salon-$-Spa.exe',
                client: 'Proyecto Universitario',
                date: 'Julio - Noviembre 2025',
                description: 'Sistema de gestión administrativa para salón spa desarrollado en ASP.NET Core MVC con SQL Server, utilizando stored procedures para la capa de datos y arquitectura fullstack (frontend y backend) en un único repositorio.',
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
                githubBackend: 'https://github.com/DyerMandujano/PryArquitecturaSofware_SalonSPA'
            },
        ];
    }
    Projects.prototype.nextImage = function (project) {
        if (project.currentImageIndex !== undefined && project.images.length > 1) {
            project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
        }
    };
    Projects.prototype.prevImage = function (project) {
        if (project.currentImageIndex !== undefined && project.images.length > 1) {
            project.currentImageIndex =
                project.currentImageIndex === 0 ? project.images.length - 1 : project.currentImageIndex - 1;
        }
    };
    Projects.prototype.getCurrentImage = function (project) {
        return project.images[project.currentImageIndex || 0];
    };
    Projects.prototype.openLightbox = function (project) {
        this.lightboxProject = __assign({}, project);
        this.showControls = true;
        this.startControlsTimer();
    };
    Projects.prototype.closeLightbox = function () {
        this.lightboxProject = null;
        this.showControls = true;
        this.clearControlsTimer();
    };
    Projects.prototype.nextImageLightbox = function () {
        if (this.lightboxProject) {
            this.nextImage(this.lightboxProject);
            this.resetControlsTimer();
        }
    };
    Projects.prototype.prevImageLightbox = function () {
        if (this.lightboxProject) {
            this.prevImage(this.lightboxProject);
            this.resetControlsTimer();
        }
    };
    Projects.prototype.toggleControls = function () {
        this.showControls = !this.showControls;
        if (this.showControls) {
            this.startControlsTimer();
        }
        else {
            this.clearControlsTimer();
        }
    };
    Projects.prototype.showControlsTemporarily = function () {
        this.showControls = true;
        this.resetControlsTimer();
    };
    Projects.prototype.resetControlsTimer = function () {
        if (this.showControls) {
            this.startControlsTimer();
        }
    };
    Projects.prototype.startControlsTimer = function () {
        var _this = this;
        this.clearControlsTimer();
        this.controlsTimeout = setTimeout(function () {
            _this.showControls = false;
        }, 1500);
    };
    Projects.prototype.clearControlsTimer = function () {
        if (this.controlsTimeout) {
            clearTimeout(this.controlsTimeout);
            this.controlsTimeout = null;
        }
    };
    Projects = __decorate([
        core_1.Component({
            selector: 'app-projects',
            imports: [common_1.CommonModule],
            templateUrl: './projects.html',
            styleUrl: './projects.scss'
        })
    ], Projects);
    return Projects;
}());
exports.Projects = Projects;
