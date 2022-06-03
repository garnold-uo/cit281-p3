/*
    CIT 281 Project 3
    Name: Garrett Arnold
*/

const fs = require('fs');
const coinCount = require('./p3-module'); 
const fastify = require("fastify")();

fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) {
            reply.code = 500;
            console.log(err);
            reply.header("Content-Type", "text/html; charset=utf-8");
        } 
        else {
            reply.code = 200;
            reply.header("Content-Type", "text/html; charset=utf-8");
            }
        });
});

fastify.get("/coin", (request, reply) => {
    const { denom = 0, count = 0 } = request.query;
        if (err) {
            reply.code = 500;
            console.log(err);
            reply.header("Content-Type", "text/html; charset=utf-8");
        } 
        else {
            reply.code = 200;
            reply.header("Content-Type", "text/html; charset=utf-8");
            reply.send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
            }
});

fastify.get("/coins", (request, reply) => {
    const { option } = request.query;
        if (err) {
            reply.code = 500;
            console.log(err);
            reply.header("Content-Type", "text/html; charset=utf-8");
        } 
        else {
            reply.code = 200;
            reply.header("Content-Type", "text/html; charset=utf-8");
            reply.send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
            coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            coinCount(...coins);
            coinCount(coins); 
            }
});

const listenIP = "localhost";
const listenPort = 8080;

fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
