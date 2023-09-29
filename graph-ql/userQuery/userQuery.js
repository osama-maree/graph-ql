const { todoModel } = require("../model/todoModel.js");
const userQuery = {
  getTodo: async () => await todoModel.find({}),
};
module.exports = userQuery;
