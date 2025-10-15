const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');


connectDB();

dotenv.config();

const app = express();
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Le backend GreenStyle fonctionne !');
});
app.listen(process.env.PORT, () => {
      console.log(` Serveur lancé sur le port ${process.env.PORT}`);
    });


  
   
  