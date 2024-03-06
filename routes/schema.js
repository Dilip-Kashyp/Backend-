const mongooes = require('mongoose')
const Product = mongooes.model("Product", {
    id:{
        type:Number,
        required:true,
    },
    name:{
        type : String,
        required : true,
    },
    image:{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    new_price:{
        type : Number,
        required : true
    },
    old_price:{
        type : Number,
        required : true
    },
    date:{
        type :Date,
        default : Date.now,
    },
    avilable : {
        type : Boolean,
        default : true,
    },
});

const User = mongooes.model('Users', {
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
    },
    password: {
        type : String,
    },
    cartdata : {
        type : Object,
    },
    date : {
        type : Date,
        default : Date.now,
    }
})

module.exports = {
    Product,
    User,
}