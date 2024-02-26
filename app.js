const cors = require('cors')
const express =  require('express')
const app = express();
const dataBase = require('./routes/data_base')
const imageUpload = require('./routes/image_Upload');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("this is for testing"));

app.use("/",imageUpload);
app.use("/", dataBase);
app.use("/addPrduct", dataBase);
app.use("/allProduct", dataBase);

module.exports =  app
