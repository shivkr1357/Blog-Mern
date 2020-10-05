import axios from 'axios';

export const getPosts = async () => {
   const response = await axios.get('/api/posts/');

   return response;
};

export const getOnePost = async (req, res) => {
   const response = await axios.get('/api/posts/' + req);
   console.log(req);
   return response;
};
