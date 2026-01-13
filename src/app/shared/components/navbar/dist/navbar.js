"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Navbar = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var Navbar = /** @class */ (function () {
    function Navbar() {
        this.menuItems = [
            { label: 'home.html', route: '/home', icon: 'devicon-html5-plain colored' },
            { label: 'about.ts', route: '/about', icon: 'devicon-typescript-plain colored' },
            { label: 'contact.json', route: '/contact', icon: 'devicon-nodejs-plain colored' },
            { label: 'projects.css', route: '/projects', icon: 'devicon-css3-plain colored' }
            //{ label: 'experience.yaml', route: '/experience', icon: 'devicon-git-plain colored' }
        ];
    }
    Navbar = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, router_1.RouterLinkActive],
            templateUrl: './navbar.html',
            styleUrl: './navbar.scss'
        })
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;
