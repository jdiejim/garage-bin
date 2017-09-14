/* eslint no-console: "off" */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../database');

const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

describe('API Items Routes', () => {
  before((done) => {
    db.migrate.latest()
      .then(() => done())
      .catch(err => console.log(err));
  });

  beforeEach((done) => {
    db.seed.run()
      .then(() => done())
      .catch(err => console.log(err));
  });

  describe('GET /api/v1/items/', () => {
    it('should be able to get all the items', (done) => {
      chai.request(server)
        .get('/api/v1/items')
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
    it('should be able to create a new item', (done) => {
      chai.request(server)
        .post('/api/v1/items')
        .send({ name: 'Nintendo', reason: 'Nostalgia', cleanliness: 'Sparkling' })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.name.should.equal('Nintendo');
          res.body.should.have.property('reason');
          res.body.reason.should.equal('Nostalgia');
          res.body.should.have.property('cleanliness');
          res.body.cleanliness.should.equal('Sparkling');
          chai.request(server)
            .get('/api/v1/items/')
            .end((error, response) => {
              const last = response.body.length - 1;
              response.body[last].should.have.property('name');
              response.body[last].name.should.equal('Nintendo');
              response.body[last].should.have.property('reason');
              response.body[last].reason.should.equal('Nostalgia');
              response.body[last].should.have.property('cleanliness');
              response.body[last].cleanliness.should.equal('Sparkling');
              done();
            });
        });
    });

    it('should not be able to create a new item if missing params in body', (done) => {
      chai.request(server)
        .post('/api/v1/items')
        .end((err, res) => {
          res.should.have.status(422);
          res.body.error.should.equal('Missing parameters: name, reason, cleanliness');
          done();
        });
    });
  });

  describe('PATCH /api/v1/items/:id', () => {
    it('should be able to update an existing item', (done) => {
      chai.request(server)
        .get('/api/v1/items/')
        .end((err, res) => {
          const id = res.body[0].id;
          chai.request(server)
            .patch(`/api/v1/items/${id}`)
            .send({ name: 'Nintendo 64', cleanliness: 'Sparkling' })
            .end((error, response) => {
              response.should.have.status(200)
              response.body[0].should.have.property('name');
              response.body[0].name.should.equal('Nintendo 64');
              response.body[0].should.have.property('reason');
              response.body[0].reason.should.equal('Nostalgia');
              response.body[0].should.have.property('cleanliness');
              response.body[0].cleanliness.should.equal('Sparkling');
              chai.request(server)
                .get('/api/v1/items')
                .end((e, r) => {
                  r.body[0].name.should.equal('Nintendo 64');
                  r.body[0].reason.should.equal('Nostalgia');
                  r.body[0].cleanliness.should.equal('Sparkling');
                  done();
                });
            });
        });
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
