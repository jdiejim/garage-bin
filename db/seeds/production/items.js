/* eslint no-console: "off" */
const items = require('../../../test/fixtures');

exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(() => Promise.all(items.map(item => knex('items').insert(item))))
    .then(() => 'done')
    .catch(err => console.log(err));
};
