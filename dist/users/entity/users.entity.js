"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let UsersEntity = class UsersEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
UsersEntity = __decorate([
    (0, typeorm_1.Entity)()
], UsersEntity);
exports.default = UsersEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZW50aXR5L3VzZXJzLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUFpRTtBQUdqRSxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0NBZ0JoQixDQUFBO0FBZEM7SUFEQyxJQUFBLGdDQUFzQixHQUFFOzt1Q0FDUDtBQUdsQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ1k7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzZDQUNlO0FBR3hCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs4Q0FDZ0I7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzZDQUNlO0FBZHBCLFdBQVc7SUFEaEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0gsV0FBVyxDQWdCaEI7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==