const { Post } = require('../models/post');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/create", (req, res)=>{
    Post.create({
        title:req.body.title,
        description:req.body.description
    }).then(doc => console.log(doc))
    .catch(err=>console.log(err));
})

module.exports = router;