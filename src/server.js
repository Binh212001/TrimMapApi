const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const initRouter = require('./routes/index');

const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

initRouter(app);

console.log(__dirname);
app.use(express.json());

app.use('/img', express.static(path.join(__dirname, './public/img')));

mongoose.set('strictPopulate', false);
mongoose
  .connect('mongodb+srv://binh:Binh1111@trimmapapi.snowojn.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected ');
  })
  .then(() => {
    app.listen(5000, () => {
      console.log(`Running port 5000`);
    });
  })
  .catch((err) => {
    console.log('🚀 ~ file: server.js:41 ~ err:', err);
    process.exit(1);
  });
