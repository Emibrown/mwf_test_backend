"use strict";
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
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const moment_1 = __importDefault(require("moment"));
const addItem = {
    "quantity": 20,
    "expiry": (0, moment_1.default)().add(30, 'm').valueOf()
};
const itemName = 'iphone';
describe('Inventory endpoints', function () {
    let request;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            request = supertest_1.default.agent(app_1.default);
        });
    });
    after(function (done) {
        app_1.default.close(() => __awaiter(this, void 0, void 0, function* () {
            done();
        }));
    });
    it('should allow a POST to /:item/add', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.post(`/${itemName}/add`).send(addItem);
            (0, chai_1.expect)(res.status).to.equal(200);
            (0, chai_1.expect)(res.body).to.be.an('object');
        });
    });
    it('should allow a POST to /:item/sell', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.post(`/${itemName}/sell`).send({ "quantity": 5 });
            (0, chai_1.expect)(res.status).to.equal(200);
            (0, chai_1.expect)(res.body).to.be.an('object');
        });
    });
    it('should allow a GET to /:item/quantity', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get(`/${itemName}/quantity`).send();
            (0, chai_1.expect)(res.status).to.equal(200);
            (0, chai_1.expect)(res.body).not.to.be.empty;
            (0, chai_1.expect)(res.body).to.be.an('object');
            (0, chai_1.expect)(res.body.quantity).to.be.a('number');
            (0, chai_1.expect)(res.body.validTill).to.be.a('number');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2ludmVudG9yeS9pbnZlbnRvcnkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QiwwREFBa0M7QUFDbEMsK0JBQThCO0FBQzlCLG9EQUE0QjtBQUc1QixNQUFNLE9BQU8sR0FBRztJQUNaLFVBQVUsRUFBQyxFQUFFO0lBQ2IsUUFBUSxFQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFO0NBQzNDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFFMUIsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBQzVCLElBQUksT0FBaUMsQ0FBQztJQUN0QyxNQUFNLENBQUM7O1lBQ0gsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLGFBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQSxDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsVUFBVSxJQUFJO1FBQ2hCLGFBQUcsQ0FBQyxLQUFLLENBQUMsR0FBUSxFQUFFO1lBQ2hCLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFOztZQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTs7WUFDckMsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7WUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5RCxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=