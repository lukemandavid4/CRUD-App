const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoutes = require(`./routes/authRoutes`)
const app = express();
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`api/products`, authRoutes)

const port = process.env.PORT || 3000;
mongoose.connect(process.env.DB_URI)
  .then(() =>{
    console.log('Connected to DB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) =>{
    console.log(err);
  })

