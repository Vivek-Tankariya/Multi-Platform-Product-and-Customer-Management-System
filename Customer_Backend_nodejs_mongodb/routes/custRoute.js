const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cust = require("../models/customerModel")

const router = express.Router();

router.get("/",async (req,res) => {
    const showAll = await cust.find()

    res.status(200).json(showAll);
})

router.get("/:id",async (req,res) => {
    const {id} = req.params;
    const singleCust = await cust.findById(id)

    res.status(200).json(singleCust);
})

router.delete("/:id",async (req,res) => {
    const {id} = req.params;
    const singleCust = await cust.findByIdAndDelete(id)

    res.status(200).json(singleCust);
})

router.patch("/:id",async (req,res) => {
    const {id} = req.params;
    const {name,email,age} = req.body;
    const updateCust = await cust.findByIdAndUpdate(id,req.body,{new : true})

    res.status(200).json(updateCust);
})

router.post("/add",async(req,res) => {
    const {name,email,age} = req.body;

    const custData = await cust.create({
        name:name,
        email:email,
        age:age
    })

    res.status(200).json(custData);

})

module.exports = router;
