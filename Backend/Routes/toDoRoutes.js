const express = require('express');
const {addToDo, getToDo, deleteToDo} = require('../Controller/toDoController');
const route = express.Router();

route.use(express.json());
route.post('/add-toDo', addToDo);
route.get('/get-toDo', getToDo);
route.post('/delete-toDo', deleteToDo);
module.exports = route;
