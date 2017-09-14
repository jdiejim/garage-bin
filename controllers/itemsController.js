const db = require('../database');

exports.index = (req, res) => {
  db('items').select()
    .then(items => res.status(200).json(items))
    .catch(error => res.status(500).json({ error }));
};
