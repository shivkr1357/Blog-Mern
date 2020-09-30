const Posts = require('../Models/posts');

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

exports.create = async (req, res) => {
   const { title, tag, html, author } = req.body;

   try {
      let newPost = new Posts();
      newPost.title = title;
      newPost.tags = tag;
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
