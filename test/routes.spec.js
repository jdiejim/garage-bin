const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
// const configuration = require('../knexfile')[process.env.NODE_ENV];
// const db = require('knex')(configuration);

const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

describe('API Routes', () => {
  it('should', () => {
    expect(true).to.equal(true);
  });
});
