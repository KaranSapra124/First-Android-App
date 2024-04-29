const express = require('express');
const app = express();
const toDoRoute = require('./Routes/toDoRoutes');
const dbConfig = require('./utils/mongodbConfig');
const cors = require('cors');
dbConfig();

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use('/toDo', toDoRoute);

app.listen(3000, () => {
  console.log('Backend is running!');
});
