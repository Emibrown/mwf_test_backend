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

    it('Allow POST test to add lot of item quantity 20  /iphone/add', async function () {
        const res = await request.post(`/${itemName}/add`).send(addItem);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
    });
    it('Allow GET test to get non-expired quantity of item /iphone/quantity', async function () {
        const res = await request.get(`/${itemName}/quantity`).send();
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
        expect(res.body.quantity).to.be.a('number');
        expect(res.body.validTill).to.be.a('number');
    });
    it('Allow POST test to sell non-expired quantity of item /iphone/sell', async function () {
        const res = await request.post(`/${itemName}/sell`).send({"quantity":5});
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
    });
    it('Disallow POST test to sell a quantity of the item more than the non-expired quantitym /iphone/sell', async function () {
        const res = await request.post(`/${itemName}/sell`).send({"quantity":30});
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
    });


});
