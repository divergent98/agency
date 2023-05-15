const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    description: String
  })
  exports.Post = mongoose.model("Post", postSchema);

