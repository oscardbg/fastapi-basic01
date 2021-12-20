const fastify = require("fastify")();
PORT = 4510;

fastify.register(require("fastify-swagger"), {
   exposeRoute: true,
   routePrefix: "/docs",
   swagger: {
      info: {
         title: "Fastify API no 2",
         description: "Basic API using fastify with static data",
      },
   },
});
fastify.register(require("./src/item.routes"));

const start = async () => {
   try {
      await fastify.listen(PORT);
   } catch (error) {
      fastify.log.error(error);
      process.exit(1);
   }
};

start();
