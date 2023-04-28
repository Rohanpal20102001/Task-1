const express =  require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventRouter = require('./Router/event');
const PORT = 8000 || process.env.PORT;
require('dotenv/config');

const app = express();

app.use(cors());
app.use(logger('tiny'));
app.use(express.json());


const db = process.env.MONGO_URI;
mongoose
.set("strictQuery", true)
.connect(db, {useUnifiedTopology : true, useNewUrlParser : true})
.then(() => console.log("MongoDb has connected successfully"))
.catch((err) => console.log(err));

app.use('/api/v3/app', eventRouter);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})

