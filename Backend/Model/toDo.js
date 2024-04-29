const mongoose = require('mongoose');
const schema = mongoose.Schema;

const toDoSchema = schema(
  {
    title: {
      type: 'String',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('toDo', toDoSchema);
