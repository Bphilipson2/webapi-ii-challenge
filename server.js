const express = require('express');
const postsRouter = require('./post-router.js');

const server = express();

//middleware
server.use(express.json());

//uses url to determine postsRouter should be used for routing
server.use('/api/posts', postsRouter);

//absolute path
server.get('/', (req, res) => {
  res.send(`
    <h2>Web API II Challenge</h>
    <p>We have TEXT !! </p>
  `);
});

module.exports = server;