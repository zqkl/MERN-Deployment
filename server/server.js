const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors(), express.json());

const connectDB = require('./config/mongoose.config');
connectDB();

const petRouter= require('./routes/pet.routes');
app.use('/api',petRouter);

const port = 8000;
app.listen(port, () => console.log(`listening on port: ${port}`));