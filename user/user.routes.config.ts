import { CommonRoutesConfig } from '../common/common.routes.config';
import UserController from './controllers/user.controller';
import UserMiddleware from './middleware/user.middleware';
import express from 'express';

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
   

        this.app.post(`/register`, [
            UserMiddleware.validateRegister,
            UserController.register
        ]);

        this.app.get(`/registered/:uid`, [
            UserMiddleware.extractUid,
            UserController.getUser
        ]);

      

        return this.app;
    }
}