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
const user_entity_1 = __importDefault(require("../../user/entity/user.entity"));
const user_dao_1 = __importDefault(require("../../user/daos/user.dao"));
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../../common/utils/config"));
const sinon = require("sinon");
const faker = require("faker");
describe("UserDao", function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            (0, typeorm_1.createConnection)({
                type: 'postgres',
                host: config_1.default.db_host,
                port: 5432,
                username: config_1.default.db_username,
                password: config_1.default.db_password,
                database: config_1.default.db,
                synchronize: true,
                entities: [user_entity_1.default],
            });
        });
    });
    const stubValue = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    describe("register", function () {
        it("should add a new user to the db", function () {
            return __awaiter(this, void 0, void 0, function* () {
                // const newUser = new UserEntity()
                // const stub = sinon.stub(newUser, "save").returns(stubValue);
                const user = yield user_dao_1.default.register({
                    name: stubValue.name,
                    email: stubValue.email,
                    password: stubValue.password
                });
                // expect(stub.calledOnce).to.be.true;
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFvLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3VzZXIvZGFvLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxnRkFBdUQ7QUFDdkQsd0VBQStDO0FBQy9DLHFDQUE2RTtBQUM3RSx1RUFBK0M7QUFHL0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsU0FBUyxFQUFFO0lBQ2hCLE1BQU0sQ0FBQzs7WUFDSCxJQUFBLDBCQUFnQixFQUFDO2dCQUNiLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPO2dCQUNwQixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxXQUFXO2dCQUM1QixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxXQUFXO2dCQUM1QixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxFQUFFO2dCQUNuQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsUUFBUSxFQUFFLENBQUMscUJBQVUsQ0FBQzthQUN6QixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsTUFBTSxTQUFTLEdBQUc7UUFDZCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDM0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQzdCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtLQUN0QyxDQUFDO0lBQ0YsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUNqQixFQUFFLENBQUMsaUNBQWlDLEVBQUU7O2dCQUNsQyxtQ0FBbUM7Z0JBQ25DLCtEQUErRDtnQkFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxrQkFBTyxDQUFDLFFBQVEsQ0FBQztvQkFDaEMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUNuQixLQUFLLEVBQUMsU0FBUyxDQUFDLEtBQUs7b0JBQ3JCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILHNDQUFzQztZQUMxQyxDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9