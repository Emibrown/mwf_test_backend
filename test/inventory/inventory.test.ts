import app from '../../app';
import supertest from 'supertest';
import { expect } from 'chai';
import moment from 'moment';


const addItem = {
    "quantity":20,
    "expiry":moment().add(30, 'm').valueOf()
};
const itemName = 'iphone';

describe('Inventory endpoints', function () {
    let request: supertest.SuperAgentTest;
    before(async function () {
        request = supertest.agent(app);
    });
    after(function (done) {
        app.close(async() => {
            done()
        });
    });

    it('should allow a POST to /:item/add', async function () {
        const res = await request.post(`/${itemName}/add`).send(addItem);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
    });

    it('should allow a POST to /:item/sell', async function () {
        const res = await request.post(`/${itemName}/sell`).send({"quantity":5});
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
    });

    it('should allow a GET to /:item/quantity', async function () {
        const res = await request.get(`/${itemName}/quantity`).send();
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
        expect(res.body.quantity).to.be.a('number');
        expect(res.body.validTill).to.be.a('number');
    });

});
