const Posts = require('../Models/posts');
const mongoose = require('mongoose');

exports.readAll = async (req, res) => {
   try {
      const posts = await Posts.find({});

      res.status(200).json({
         posts,
      });
   } catch (err) {
      console.log('Post Read all  error', err);
      return res.status(500).json({
         errorMessage: 'Please try again later',
      });
   }
};

exports.readOne = async (req, res) => {
   try {
      const post = await Posts.findById(req.params.id);
      res.status(200).json({
         post,
      });
   } catch (err) {
      console.log('Post Read all  error', err);
      return res.status(500).json({
         errorMessage: 'Please try again later',
      });
   }
};

exports.create = async (req, res) => {
   const { title, tags, html, author } = req.body;
   try {
      let newPost = new Posts();
      newPost.title = title;
      newPost.tags = tags;
      newPost.html = html;
      newPost.author = author;

      newPost = await newPost.save();

      res.status(200).json({
         successMessage: newPost.title + '  was created',
      });
   } catch (err) {
      console.log('Post Create Error', err);
      return res.status(500).json({
         errorMessage: 'Please try again later',
      });
   }
};
