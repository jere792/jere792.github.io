"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Contact = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Contact = /** @class */ (function () {
    function Contact() {
        this.profile = {
            name: 'Jeremy Yazid Anton Rojas',
            role: 'Full Stack Developer',
            status: 'open_for_projects',
            preferred_contact: 'email',
            response_time: '24-48h',
            languages: ['Spanish'],
            timezone: 'UTC-5 (Lima)',
            availability: 'Freelance • Remote'
        };
        this.socialLinks = [
            {
                name: 'GitHub',
                icon: 'devicon-github-original',
                url: 'https://github.com/jere792',
                username: '@jere792',
                color: '#ffffff'
            },
            {
                name: 'LinkedIn',
                icon: 'devicon-linkedin-plain',
                url: 'https://www.linkedin.com/in/jeremy-ant%C3%B3n-61980235b/',
                username: 'Jeremy Anton',
                color: '#0077b5'
            },
            {
                name: 'Email',
                icon: 'pi pi-envelope',
                url: 'mailto:jeremyar792@gmail.com',
                username: 'jeremyar792@gmail.com',
                color: '#ea4335'
            },
            {
                name: 'WhatsApp',
                icon: 'pi pi-whatsapp',
                url: 'https://wa.me/51907851879',
                username: '+51 907 851 879',
                color: '#25d366'
            }
        ];
        this.services = [
            'Desarrollo de aplicaciones web full-stack',
            'Arquitectura de sistemas escalables',
            'Integración de APIs REST y GraphQL',
            'Consultoría técnica en Angular/Node.js',
            'Optimización de bases de datos'
        ];
    }
    Contact = __decorate([
        core_1.Component({
            selector: 'app-contact',
            imports: [common_1.CommonModule],
            templateUrl: './contact.html',
            styleUrl: './contact.scss'
        })
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
