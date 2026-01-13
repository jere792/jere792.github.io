"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { path: 'about', loadComponent: function () { return Promise.resolve().then(function () { return require('./features/about/about'); }).then(function (m) { return m.About; }); } },
    { path: 'contact', loadComponent: function () { return Promise.resolve().then(function () { return require('./features/contact/contact'); }).then(function (m) { return m.Contact; }); } },
    { path: 'home', loadComponent: function () { return Promise.resolve().then(function () { return require('./features/home/home'); }).then(function (m) { return m.Home; }); } },
    { path: 'projects', loadComponent: function () { return Promise.resolve().then(function () { return require('./features/projects/projects'); }).then(function (m) { return m.Projects; }); } },
    //{ path: 'experience', loadComponent: () => import('./features/experience/experience').then(m => m.Experience) }
    { path: '**', redirectTo: '/home' }
];
