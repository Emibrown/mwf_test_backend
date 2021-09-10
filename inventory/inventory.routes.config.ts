import { CommonRoutesConfig } from '../common/common.routes.config';
import InventoryController from './controllers/inventory.controller';
import InventoryMiddleware from './middleware/inventory.middleware';
import express from 'express';

export class InventoryRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'InventoryRoutes');
    }

    configureRoutes(): express.Application {
   
        this.app.param(`item`, InventoryMiddleware.extractItem);

        this.app.post(`/:item/add`, [
            InventoryMiddleware.validateRequiredAddItemBodyFields,
            InventoryMiddleware.checkForExpiriedItem,
            InventoryController.addItem
        ]);

        this.app.post(`/:item/sell`, [
           InventoryMiddleware.checkForQuantity,
           InventoryController.sellItem
        ]);

        this.app.get(`/:item/quantity`, [
           InventoryController.itemQuantity
        ]);

        return this.app;
    }
}