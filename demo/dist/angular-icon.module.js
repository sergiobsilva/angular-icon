"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_icon_component_1 = require("./angular-icon.component");
var IconModule = (function () {
    function IconModule() {
    }
    return IconModule;
}());
IconModule = __decorate([
    core_1.NgModule({
        declarations: [
            angular_icon_component_1.IconComponent
        ],
        exports: [
            angular_icon_component_1.IconComponent
        ]
    })
], IconModule);
exports.IconModule = IconModule;
//# sourceMappingURL=angular-icon.module.js.map