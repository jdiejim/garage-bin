/* eslint no-console: "off" */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.locals.title = 'Final';
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);
app.use(express.static(path.resolve(__dirname, './build')));
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
});

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(app.get('port'), () => console.log(`${app.locals.title} is running on ${app.get('port')}`));

module.exports = app;
