const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const connectDb = require('./database/db');
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectDb();

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

//serve Static files if in production

if (process.env.NODE_ENV == 'production') {
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

app.listen(port, () => {
   console.log(`listining to the port ${port}`);
});
