const express = require('express')
const mongooes = require('mongoose')
const jwt = require('jsonwebtoken')
const { Product, User } = require('./schema')
const routes = express.Router();

// ---------------------- database ------------------------
mongooes.connect("mongodb+srv://Dilip:GCzpGwDL4mn5uFJX@cluster0.xeawokf.mongodb.net/E-commerce");

routes.post("/", async (req, res) => {
    const products = await Product.find({});
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const product = new Product({
        id : id,
        name : req.body.name,
        image : req.body.image,
        category : req.body.category,
        old_price : req.body.old_price,
        new_price : req.body.new_price,

    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        status : 200,
        name : req.body.name,
    });
});

// Deleting product

routes.post("/removeProduct", async (req, res) => {
    console.log(req.body.id)
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed");
    res.json({
        status : 200,
        name : req.body.name
    });
});

//display products
routes.get("/", async (req, res) => {
    let products = await Product.find({});
    console.log("All Product")
    res.send(products)
});

// --------------------- end -----------------------------
routes.post("/signup", async (req, res) => {
    let check = await User.findOne({email:req.body.email});
    console.log(check)
    if(check){
        return res.status(400).json({
            success : "fales",
            error : "email already used"
        })
    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0 
    }

    let user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        cartdata : cart, 
    })
    await user.save();

    const data = {
        user : {
            id : user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({
        "success" : true,
        "token" : token,
    })
});

routes.post("/login", async (req, res) => {
    let user = await User.findOne({email : req.body.email});
    if(user){
        const password = req.body.password === user.password;
        if(password){
            const data = {
                user : {
                    id : user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.status(200).json({
                "status" : 200,
                token
            });
        }
        else{
            res.status(401).json({
                "status" : 401,
                "error" : "Wrong Password"
            })
        }

    }
    else {
        res.status(404).json({
            "status" : 404,
            "error" : "No User found with this email id"
        })
    }
})


module.exports = routes
