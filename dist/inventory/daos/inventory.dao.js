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
const typeorm_1 = require("typeorm");
const inventory_entity_1 = __importDefault(require("../entity/inventory.entity"));
const utils_1 = __importDefault(require("../../common/utils/utils"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class InventoryDao {
    constructor() {
        log('Created new instance of InventoryDao');
    }
    addItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const addRepository = (0, typeorm_1.getRepository)(inventory_entity_1.default);
            const newItem = addRepository.create(item);
            yield addRepository.save(newItem);
            return newItem;
        });
    }
    itemQuantity(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const addRepository = (0, typeorm_1.getRepository)(inventory_entity_1.default);
            const items = addRepository.createQueryBuilder("inventoryEntity")
                .where("inventoryEntity.name = :name", { name: name })
                .andWhere("inventoryEntity.expiry > :expiry", { expiry: new Date() })
                .select("SUM(inventoryEntity.quantity)::int as quantity")
                .addSelect("MIN(inventoryEntity.expiry)", "validTill")
                .getRawOne();
            return items;
        });
    }
    shouldRetryTransaction(err) {
        const code = typeof err === 'object' ? String(err.code) : null;
        return code === '40001' || code === '40P01';
    }
    sellItem(name, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            let selling_quantity = quantity;
            try {
                return yield (0, typeorm_1.getManager)().transaction("SERIALIZABLE", (transactionalEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    const repository = (0, typeorm_1.getRepository)(inventory_entity_1.default);
                    const itemQuantity = yield transactionalEntityManager.createQueryBuilder()
                        .from(inventory_entity_1.default, "inventoryEntity")
                        .where("inventoryEntity.name = :name", { name: name })
                        .andWhere("inventoryEntity.expiry > :expiry", { expiry: new Date() })
                        .select("SUM(inventoryEntity.quantity)::int as quantity")
                        .addSelect("MIN(inventoryEntity.expiry)", "validTill")
                        .getRawOne();
                    if (itemQuantity.quantity < selling_quantity) {
                        throw new Error('Quantity exceed available quantity');
                    }
                    const items = yield transactionalEntityManager.find(inventory_entity_1.default, {
                        where: {
                            "name": name,
                            "expiry": (0, typeorm_1.MoreThan)(new Date()),
                            "quantity": (0, typeorm_1.MoreThan)(0)
                        },
                        order: {
                            expiry: "ASC",
                        }
                    });
                    yield utils_1.default.asyncForEach(items, (item, index) => __awaiter(this, void 0, void 0, function* () {
                        let remainder;
                        let sell = selling_quantity;
                        if (selling_quantity = 0) {
                            return;
                        }
                        if (item.quantity >= sell) {
                            remainder = item.quantity - sell;
                            selling_quantity = 0;
                        }
                        else {
                            remainder = 0;
                            selling_quantity = sell - item.quantity;
                        }
                        let currentItem = yield repository.findOne({ id: item.id });
                        if (currentItem) {
                            currentItem.quantity = remainder;
                            yield transactionalEntityManager.save(currentItem);
                        }
                    }));
                }));
            }
            catch (err) {
                if (this.shouldRetryTransaction(err)) {
                    // retry logic   
                    yield this.sellItem(name, quantity);
                }
                else {
                    throw err;
                }
            }
        });
    }
}
exports.default = new InventoryDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludmVudG9yeS9kYW9zL2ludmVudG9yeS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBd0U7QUFDeEUsa0ZBQXlEO0FBQ3pELHFFQUE2QztBQUM3QyxrREFBMEI7QUFHMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxZQUFZO0lBRWQ7UUFDSSxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQWtCOztZQUM1QixNQUFNLGFBQWEsR0FBRyxJQUFBLHVCQUFhLEVBQUMsMEJBQWUsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxJQUFZOztZQUMzQixNQUFNLGFBQWEsR0FBRyxJQUFBLHVCQUFhLEVBQUMsMEJBQWUsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDaEUsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNyRCxRQUFRLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO2lCQUNwRSxNQUFNLENBQUMsZ0RBQWdELENBQUM7aUJBQ3hELFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxXQUFXLENBQUM7aUJBQ3JELFNBQVMsRUFBRSxDQUFDO1lBQ2IsT0FBTyxLQUFLLENBQUM7UUFD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