const http = require('http');
const express = require('express');
const logger = require('morgan');

const apiMiddleware = require('./middleware/api');

const PORT = process.env.PORT || '8086';

// Init express app
const app = express();

// Set port
app.set('port', PORT);

// Setup logger
app.use(logger('dev'));

// API proxy
app.use(`/api/`, apiMiddleware);


// Listen http requests
http.createServer(app).listen(app.get('port'), () => {
  console.info(
    `Express listening on port ${app.get('port')} in ${app.get('env')} mode`
  );
});
