//importing express
import TodoItem from './models/TodoItem';
import router from './router';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

let express = require('express')

let app = express();

app.use('/', router);

mongoose.connect('mongodb://localhost:27017/db')

mongoose.connect('mongodb://localhost:27017/db')
  .then(() => {
    console.log('mongodb started.');
    app.listen(8000, () => {
      console.log('Server started on 8000');
    });
  }).catch(() => {
    console.log('Mongodb connection failed.');
  })
