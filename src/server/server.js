import express from 'express';
import config from '../../config';
import apiRouter from '../../api';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();

server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use(express.static('dist'));

server.get('/', (req, res) => {
/* 
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
 */ 
  res.render('index', {
    content: '<strong>And this...</strong>'
  });
});

server.listen(4242, () => 
  console.log('Server is running on port: ' + config.port));
