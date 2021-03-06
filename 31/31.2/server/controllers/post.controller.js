
const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts
exports.getPosts = async (req, res) => {

  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  };

};

// get single post
exports.getSinglePost = async (req, res) => {

  const { id } = req.params;

  try {
    res.status(200).json(await Post.findOne({ id }));
  } catch (err) {
    res.status(500).json(err);
  };

};

// add new post
exports.addPost = async function (req, res) {

  try {

    let newPost = new Post(req.body);
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch (err) {
    res.status(500).json(err);
  };

};

// update post
exports.updatePost = async function (req, res) {

  try {
    const { id, title, author, content } = req.body;
    
    let postToUpdate = await Post.findOneAndUpdate(
      { id: id }, 
      { title: title, author: author, content: content }
    );

    res.status(200).json(postToUpdate);

  } catch (err) {
    res.status(500).json(err);
  };

};