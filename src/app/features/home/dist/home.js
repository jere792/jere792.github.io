"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Home = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("primeng/button");
var Home = /** @class */ (function () {
    function Home(router) {
        this.router = router;
        this.typedText = '';
        this.fullText = 'Hi, I\'m Jeremy Anton';
        this.typingSpeed = 100;
        this.userInfo = {
            name: 'Jeremy Anton',
            email: 'jeremy@portfolio.com',
            role: 'Systems Engineer'
        };
        this.image = 'assets/images/JereMaki.jpg';
        this.Description = 'Frontend Developer apasionado por Angular, TypeScript y diseño UI/UX. Creando aplicaciones web modernas con PrimeNG, SCSS y arquitecturas escalables. De la interfaz hasta la base de datos, construyendo soluciones completas.';
        this.technologies = [
            { name: 'Angular', icon: 'devicon-angular-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Express', icon: 'devicon-express-original' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored' },
            { name: 'SCSS', icon: 'devicon-sass-original colored' },
            { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
            { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' },
            { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
            { name: 'C#', icon: 'devicon-csharp-plain colored' },
            { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain colored' },
            { name: 'Figma', icon: 'devicon-figma-plain colored' },
            { name: 'Arduino', icon: 'devicon-arduino-plain colored' },
            { name: 'GitHub', icon: 'devicon-github-original' }
        ];
    }
    Home.prototype.ngOnInit = function () {
        this.typeWriter();
    };
    Home.prototype.typeWriter = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (index < this.fullText.length) {
            this.typedText += this.fullText.charAt(index);
            setTimeout(function () { return _this.typeWriter(index + 1); }, this.typingSpeed);
        }
    };
    Home.prototype.navigateToProjects = function () {
        this.router.navigate(['/projects']);
    };
    Home.prototype.navigateToContact = function () {
        this.router.navigate(['/contact']);
    };
    Home = __decorate([
        core_1.Component({
            selector: 'app-home',
            standalone: true,
            imports: [common_1.CommonModule, button_1.ButtonModule],
            templateUrl: './home.html',
            styleUrl: './home.scss'
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
