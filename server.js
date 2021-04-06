const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require("./routes");

require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
 .connect(process.env.MONGODB_URI || "mongodb://localhost/statesideDB",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));



 if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }



//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes middleware
app.use(routes);

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`)
});




