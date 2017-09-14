const db = require('../database');

const handleMissingParams = (body, params) => {
  return params.reduce((error, param) => {
    if (!body[param]) {
      const concatError = error === '' ? `Missing parameters: ${param}` : `${error}, ${param}`;
      return concatError;
    }

    return error;
  }, '');
};

exports.index = (req, res) => {
  db('items').select().orderBy('id', 'asc')
    .then(items => res.status(200).json(items))
    .catch(error => res.status(500).json({ error }));
};

exports.create = (req, res) => {
  const error = handleMissingParams(req.body, ['name', 'reason', 'cleanliness']);
  if (error !== '') {
    return res.status(422).json({ error });
  }

  return db('items').insert(req.body, '*')
    .then((data) => {
      const item = data[0];
      res.status(201).json(item);
    })
    .catch(err => res.status(500).json({ error: err }));
};
