const express = require('express')
const mongooes = require('mongoose')
const Product = require('./schema')
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

module.exports = routes
