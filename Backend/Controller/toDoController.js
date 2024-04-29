const toDo = require('../Model/toDo');

exports.addToDo = async (req, res, next) => {
  const {data} = req.body;
  const newToDo = await toDo.create({
    title: data,
  });
  console.log(newToDo);
  res.status(200).send({message: 'Success', toDo: newToDo});
};

exports.getToDo = async (req, res, next) => {
  const allToDo = await toDo.find();
  res.status(200).send({message: 'Success', toDo: allToDo});
};

exports.deleteToDo = async (req, res, next) => {
  const {_id} = req.body;
  const deletedToDo = await toDo.findByIdAndDelete(_id);
  res.status(200).send({message: 'Success', toDo: deletedToDo});
};
