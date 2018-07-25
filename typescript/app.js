"use strict";
/**
 *
 * Typescript
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 * Types
 *
 */
var nameData = "Ahmed";
// nameData = 22;
var data = 12;
var age;
age = "Ahmed";
age = 22;
var user = {
    name: 'Ahmed',
    age: 12
};
// user = {} ==> Error!
var arr = [1, 12];
arr = [];
arr = [1];
var username = "Ahmed";
username = 22;
var arr2 = [{
        name: 'Ahmed',
        age: 2
    }];
function logged(constructorFn) {
    console.log(constructorFn);
}
var User = /** @class */ (function () {
    function User() {
        this.name = "mohamed";
        this.age = 22;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User = __decorate([
        logged,
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
function sum(a, b) {
    console.log(a + b);
}
var newUser = new User();
console.log(newUser);
sum(2, 3);
