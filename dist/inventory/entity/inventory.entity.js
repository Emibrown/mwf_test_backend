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
let InventoryEntity = class InventoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], InventoryEntity.prototype, "expiry", void 0);
InventoryEntity = __decorate([
    (0, typeorm_1.Entity)()
], InventoryEntity);
exports.default = InventoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludmVudG9yeS9lbnRpdHkvaW52ZW50b3J5LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUE0RTtBQUc1RSxJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFlO0NBYXBCLENBQUE7QUFYQztJQURDLElBQUEsZ0NBQXNCLEdBQUU7OzJDQUNQO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs2Q0FDVztBQUdwQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7aURBQ2U7QUFHeEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OEJBQ2IsSUFBSTsrQ0FBQztBQVhoQixlQUFlO0lBRHBCLElBQUEsZ0JBQU0sR0FBRTtHQUNILGVBQWUsQ0FhcEI7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==