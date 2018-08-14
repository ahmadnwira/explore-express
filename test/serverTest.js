const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const server = require('../server/server');

describe('server.js', () => {
    it('GET / - responds with status 200', done => {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
        done();
    });
})