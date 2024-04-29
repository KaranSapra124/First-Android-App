const mongoose = require('mongoose');
require('dotenv').config();

const dbConfig = () => {
  mongoose
    .connect(
      `mongodb+srv://AndroidToDo:${process.env.DBpass}@cluster0.ntyp9hf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => {
      console.log('Successfully Connected ✔');
    })
    .catch(err => {
      console.log('Error Connecting: ', err);
    });
};

module.exports = dbConfig;
