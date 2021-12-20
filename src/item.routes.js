let items = require("./items");
const {
   getAllItems,
   getItem,
   addItem,
   deleteItem,
   updateItem,
} = require("./item.controller");

function itemRoutes(fastify, options, done) {
   fastify.get("/items", getAllItems);
   fastify.get("/items/:id", getItem);
   fastify.post("/items", addItem);
   fastify.delete("/items/:id", deleteItem);
   fastify.put("/items/:id", updateItem);

   done();
}

module.exports = itemRoutes;
