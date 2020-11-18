const Comments = require('../Models/comments');

exports.create = async (req, res) => {
   const { id, comment, name, email, website } = req.body;
   console.log('id : ', id);
   try {
      let newComment = new Comments();
      newComment.comment = comment;
      newComment.name = name;
      newComment.email = email;
      newComment.website = website;
      // newComment.post_id = id;
      // newComment = await newComment.save();
      res.status(200).json({
         successMessage: newComment.comment + '  Added',
      });
   } catch (err) {
      console.log('Post Create Error', err);
      return res.status(500).json({
         errorMessage: 'Please try again later',
      });
   }
};

exports.readAll = async (req, res) => {
   try {
      const comments = await Comments.find({});

      res.status(200).json({
         comments,
      });
   } catch (err) {
      console.log('Comments Read all  error', err);
      return res.status(500).json({
         errorMessage: 'Please try again later',
      });
   }
};
