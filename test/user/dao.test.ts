import app from '../../app';
import supertest from 'supertest';
import { expect } from 'chai';
import UserEntity from '../../user/entity/user.entity';
import UserDao from '../../user/daos/user.dao';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';
import config from '../../common/utils/config';
import db from '../../db';
import { getRepository } from 'typeorm';


const sinon = require("sinon");
const faker = require("faker");

describe("UserDao", function() {
    let request: supertest.SuperAgentTest;
    before(async function () {
        request = supertest.agent(app);
    });
    after(function (done) {
        app.close(async() => {
            done()
        });
    });
   
    const stubValue = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    describe("register", function() {
        it("should add a new user to the db", async function() {
            const addRepository = getRepository(UserEntity)
            const user = await UserDao.register({
                name:stubValue.name,
                email:stubValue.email,
                password:stubValue.password
            });
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
        })
    })
   

})

