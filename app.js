require('dotenv').config();
require('express-async-errors');

const express = require('express');
const connectDB = require('./db/connect');
const productRouter = require('./routes/products');

const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('kobasj');
});

app.use('/api/v1/products', productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listen on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
