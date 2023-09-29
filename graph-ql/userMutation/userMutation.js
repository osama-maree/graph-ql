const { todoModel } = require("../model/todoModel.js");
const userMutations = {
  createTodo: async ({ content }) => {
    const todo = await todoModel.create({ content });
    return todo;
  },
  toggleTodo: async ({ id, completed }) => {
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );
    return todo;
  },
  deleteTodo: async ({ id }) => {
    const todo = await todoModel.findByIdAndDelete(id);
    return todo;
  },
};
module.exports = userMutations;
