const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const configuration = require('../knexfile')[process.env.NODE_ENV];
const db = require('knex')(configuration);

const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

describe('API Items Routes', () => {
  // before((done) => {
  //   db.migrate.latest()
  //     .then(() => done());
  // });

  // beforeEach((done) => {
  //   db.seed.run()
  //     .then(() => done());
  // });

  describe('GET /api/v1/items/', () => {
    it('should be able to get all the items', (done) => {
      expect(true).to.equal(true);
    });
  });

  describe('POST /api/v1/items/', () => {
    it('should be able to post a new item', (done) => {
      expect(true).to.equal(true);
    });

    it('should not be able to post a new item if missing params in body', (done) => {
      expect(true).to.equal(true);
    });
  });
});
