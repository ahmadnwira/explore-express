const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const server = require('../server/server');

describe('Items', () => {
    it('GET /items - responds with status 200', done => {
        chai.request(server)
            .get('/items')
            .end((err, res) => {
                expect(res).to.have.status(200);
            });
            done();
    });

    it('GET /items - should respond with items array', done => {
        chai.request(server)
            .get('/items')
            .end((err, res) => {
                res.body.should.be.a('array');
            });
            done();
    });

    // it('Delete /items/:id - should respond with items array', done => {
    //     chai.request(server)
    //         .get('/items')
    //         .end((err, res) => {
    //             res.body.should.be.a('array');
    //         });
    //         done();
    // });
})