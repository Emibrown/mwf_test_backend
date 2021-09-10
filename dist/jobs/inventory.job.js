"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schedule = __importStar(require("node-schedule"));
const typeorm_1 = require("typeorm");
const inventory_entity_1 = __importDefault(require("../inventory/entity/inventory.entity"));
class InventoryJob {
    constructor() {
    }
    CleanDb() {
        schedule.scheduleJob('* * * * *', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const addRepository = (0, typeorm_1.getRepository)(inventory_entity_1.default);
                const newItem = yield addRepository.delete({ expiry: (0, typeorm_1.LessThan)(new Date()) });
                console.log(newItem);
            });
        });
    }
}
exports.default = new InventoryJob();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2pvYnMvaW52ZW50b3J5LmpvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBMEM7QUFDMUMscUNBQXdFO0FBQ3hFLDRGQUFtRTtBQUduRSxNQUFNLFlBQVk7SUFFZDtJQUVBLENBQUM7SUFFTSxPQUFPO1FBQ1YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7O2dCQUM5QixNQUFNLGFBQWEsR0FBRyxJQUFBLHVCQUFhLEVBQUMsMEJBQWUsQ0FBQyxDQUFBO2dCQUNwRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBQSxrQkFBUSxFQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUE7Z0JBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==