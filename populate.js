require('dotenv').config();

const connectDB = require('./db/connect');

const Product = require('./models/product');

const jsonProducts = require('./products.json');
const connectionString = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(connectionString);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
