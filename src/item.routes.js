let items = require("./items");

function itemRoutes(fastify, options, done) {
   fastify.get("/items", (req, reply) => {
      reply.send(items);
   });

   done();
}

module.exports = itemRoutes;
