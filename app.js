const express =  require('express')
const cors = require('cors')

const dataBase = require('./routes/dataBase')
const imageUpload = require('./routes/imageUpload')

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.json({
        "ping" : "pong"
    })
})

app.use("/", imageUpload);
app.use("/", dataBase);
app.use("/addProduct", dataBase);
app.use("/allProduct", dataBase);






module.exports =  app
