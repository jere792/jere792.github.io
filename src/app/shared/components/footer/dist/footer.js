"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Footer = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Footer = /** @class */ (function () {
    function Footer() {
        this.currentYear = new Date().getFullYear();
        this.userInfo = {
            name: 'Jeremy Anton',
            email: 'jeremyar792@gmail.com',
            role: 'Systems Engineer'
        };
        this.navigationCommands = [
            { command: 'git checkout', page: 'about' },
            { command: 'git checkout', page: 'projects' },
            { command: 'git checkout', page: 'experience' },
            { command: 'git checkout', page: 'contact' }
        ];
        this.modifiedFiles = [
            '/components/Header.tsx',
            '/pages/About.tsx',
            '/pages/Projects.tsx',
            '/styles/global.css'
        ];
        this.siteInfo = {
            version: '1.0.0',
            lastUpdated: 'January 2026',
            framework: 'Angular',
            language: 'TypeScript'
        };
    }
    Footer = __decorate([
        core_1.Component({
            selector: 'app-footer',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './footer.html',
            styleUrl: './footer.scss'
        })
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;
