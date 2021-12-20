let items = require("./items");
const { v4: idv4 } = require("uuid");

const getAllItems = (req, reply) => {
   reply.send(items);
};

const getItem = (req, reply) => {
   const { id } = req.params;
   const item = items.find((item) => item.id == id);

   reply.send(item);
};

const addItem = (req, reply) => {
   const { title, body } = req.body;
   const next_id = items[items.length - 1].id + 1;
   const item = { userId: 1, id: next_id, title, body };
   items = [...items, item];

   reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
   const { id } = req.params;
   items = items.filter((item) => item.id != id);

   reply.send({ message: `Item with id ${id} was deleted` });
};

const updateItem = (req, res) => {
   const { id } = req.params;
   const { userId, title, body } = req.body;
   items = items.map((item) =>
      item.id == id ? { userId, id, title, body } : item
   );
   const item = items.find((item) => item.id == id);

   reply.send(item);
};

module.exports = { getAllItems, getItem, addItem, deleteItem, updateItem };
