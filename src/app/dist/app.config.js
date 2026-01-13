"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var config_1 = require("primeng/config");
var aura_1 = require("@primeng/themes/aura");
var app_routes_1 = require("./app.routes");
exports.appConfig = {
    providers: [
        core_1.provideZoneChangeDetection({ eventCoalescing: true }),
        router_1.provideRouter(app_routes_1.routes),
        config_1.providePrimeNG({
            theme: {
                preset: aura_1["default"]
            }
        })
    ]
};
