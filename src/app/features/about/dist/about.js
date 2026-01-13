"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.About = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var About = /** @class */ (function () {
    function About() {
        this.personalInfo = {
            name: 'Jeremy Anton',
            role: 'Systems Engineer',
            location: 'Lima, Peru',
            currentCompany: 'Freelance/Open to work',
            monthsOfExperience: 6,
            university: 'Universidad Privada del Norte',
            degree: 'Ingeniería de Sistemas Computacionales',
            semester: '8vo ciclo',
            focus: 'Frontend Development'
        };
        this.image_git = 'assets/images/foto-git.jpg';
        this.contact = {
            email: 'jeremyar792@gmail.com',
            phone: '+51 907 851 879'
        };
        this.githubStats = {
            projects: '+5'
        };
        this.skills = {
            backend: [
                'Node.js',
                'Express',
                'TypeScript',
                'GraphQL',
                'REST APIs',
                'ASP.NET Core',
                'Spring Boot',
                'C#',
                'Java',
            ],
            frontend: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'PrimeNG', 'HTML5', 'CSS3'],
            database: ['SQL Server', 'MySQL', 'MongoDB', 'Stored Procedures'],
            tools: ['Git/GitHub', 'VS Code', 'Cloudinary', 'JWT Auth'],
            other: ['DDD', 'Clean Architecture', 'Responsive Design', 'Microservices']
        };
        this.aboutMe = {
            intro: 'Soy <strong class="name">Jeremy Yazid Anton Rojas</strong>, estudiante de octavo ciclo de Ingeniería de Sistemas Computacionales en la <strong class="university">Universidad Privada del Norte</strong>, enfocado en el desarrollo de aplicaciones web modernas y administración de sistemas.',
            description: 'Me especializo en desarrollo <strong class="tech">frontend con Angular y TypeScript</strong>, creando interfaces modernas y responsivas con <strong class="tech">PrimeNG y SCSS</strong>. Complemento mi perfil con conocimientos de <strong class="tech">backend (Node.js, Express)</strong>, bases de datos <strong class="tech">(SQL Server, MySQL, MongoDB)</strong>, administración de <strong class="tech">Windows Server y Cliente</strong>, así como fundamentos de redes de computadoras, lo que me permite desarrollar soluciones completas y entender la infraestructura tecnológica de extremo a extremo.'
        };
    }
    About = __decorate([
        core_1.Component({
            selector: 'app-about',
            imports: [common_1.CommonModule],
            templateUrl: './about.html',
            styleUrl: './about.scss'
        })
    ], About);
    return About;
}());
exports.About = About;
