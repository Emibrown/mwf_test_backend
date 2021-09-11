import express from 'express';

import InventoryService from '../services/inventory.service';

import { InventoryDto } from '../dto/inventory.dto';

// debug with a custom context as described in Part 1
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class InventoryController {
    
    async addItem(req: express.Request, res: express.Response) {
        req.body.expiry = new Date(req.body.expiry);
        const addLotOfItem: InventoryDto = req.body;
        const item = await InventoryService.addItem(addLotOfItem);
        res.status(200).send({});
    }

    async itemQuantity(req: express.Request, res: express.Response) {
        const name = req.body.name
        const result = await InventoryService.itemQuantity(name);
        if(result.quantity == 0 || result.quantity == null ){
            res.status(200).send({
                quantity:0,
                validTill:null
            });
        }
        else{
            var date = new Date(result.validTill)
            result.validTill = date.getTime()
            res.status(200).send(result);
        }
    }

    async sellItem(req: express.Request, res: express.Response) {
        const {name,quantity} = req.body
        try{
            await InventoryService.sellItem(name,quantity)
            res.status(200).send({});
        }catch(e){
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
              errorMessage = e.message;
            }
            log(errorMessage);
            res.status(400).send({
                error: errorMessage,
            });
        }
    }

    
}

export default new InventoryController();