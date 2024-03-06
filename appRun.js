const app = require('./app')

const port = 8000;
app.listen(port, (error)=>{
    if(!error){
        console.log(`Server running on:  http://localhost:${port}/\nHave Fun :)`)
    }
    else {
        console.log("Error: ", error )
    }
});

