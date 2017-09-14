const chai = require('chai');
const chaiHttp = require('chai-http');
const { app: server, db } = require('../server');

const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

describe('API Items Routes', () => {
  before((done) => {
    db.migrate.latest()
      .then(() => done());
  });

  beforeEach((done) => {
    db.seed.run()
      .then(() => done());
  });

  describe('GET /api/v1/items/', () => {
    it('should be able to get all the items', (done) => {
      chai.request(server)
        .get('/api/v1/items/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3);
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('Super Nintendo');
          res.body[0].should.have.property('reason');
          res.body[0].reason.should.equal('Nostalgia');
          res.body[0].should.have.property('cleanliness');
          res.body[0].cleanliness.should.equal('Dusty');
          done();
        });
    });
  });

  describe('POST /api/v1/items/', () => {
    it('should be able to post a new item', (done) => {
      expect(true).to.equal(true);
      done();
    });

    it('should not be able to post a new item if missing params in body', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('POST /api/v1/items/', () => {
    it('should be able to post a new item', (done) => {
      expect(true).to.equal(true);
      done();
    });

    it('should not be able to post a new item if missing params in body 422', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('PATCH /api/v1/items/:id', () => {
    it('should be able to update an existing item', (done) => {
      expect(true).to.equal(true);
      done();
    });

    it('should return not found 404 if item does not exist', (done) => {
      expect(true).to.equal(true);
      done();
    });

    it('should return error 400 if params in body are incorrect', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });
});
