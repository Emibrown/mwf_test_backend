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
let UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", String)
], UserEntity.prototype, "createdAt", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserEntity);
exports.default = UserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2VudGl0eS91c2VyLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUEyRTtBQUczRSxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0NBbUJmLENBQUE7QUFqQkM7SUFEQyxJQUFBLGdDQUFzQixHQUFFOztzQ0FDZDtBQUdYO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt1Q0FDRztBQUdaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWDtBQUdkO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt3Q0FDSTtBQUdiO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDUTtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7NkNBQzNDO0FBakJiLFVBQVU7SUFEZixJQUFBLGdCQUFNLEdBQUU7R0FDSCxVQUFVLENBbUJmO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=