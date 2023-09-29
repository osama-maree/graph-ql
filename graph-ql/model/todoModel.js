const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    content: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: false }
);
const todoModel = mongoose.model("todo", userSchema);
module.exports = { todoModel };
