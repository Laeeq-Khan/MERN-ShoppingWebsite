import express from 'express';
import data from './data.js';
import env from 'dotenv';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.port || 5000; // 5000 is default port in case you did define port in .env
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
