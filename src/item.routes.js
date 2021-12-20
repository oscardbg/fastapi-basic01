let items = require("./items");
const {
   getAllItems,
   getItem,
   addItem,
   deleteItem,
   updateItem,
} = require("./item.controller");

const props = {
   userId: { type: "integer" },
   id: { type: "integer" },
   name: { type: "string" },
   title: { type: "string" },
   body: { type: "string" },
};

const Item = {
   type: "object",
   properties: props,
};

const getAllItemOpts = {
   schema: { response: { 200: { type: "array", items: Item } } },
   handler: getAllItems,
};

const getItemOpts = {
   schema: { response: { 200: Item } },
   handler: getItem,
};

const addItemOpts = {
   schema: {
      body: { type: "object", required: ["title", "body"], properties: props },
      response: { 201: Item },
   },
   handler: addItem,
};

const deleteItemOpts = {
   schema: {
      response: {
         200: { type: "object", properties: { message: { type: "string" } } },
      },
   },
   handler: deleteItem,
};

const updateItemOpts = {
   schema: { response: { 200: Item } },
   handler: updateItem,
};

function itemRoutes(fastify, options, done) {
   fastify.get("/items", getAllItemOpts);
   fastify.get("/items/:id", getItemOpts);
   fastify.post("/items", addItemOpts);
   fastify.delete("/items/:id", deleteItemOpts);
   fastify.put("/items/:id", updateItemOpts);

   done();
}

module.exports = itemRoutes;
