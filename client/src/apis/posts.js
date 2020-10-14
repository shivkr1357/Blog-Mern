import axios from 'axios';

export const getPosts = async () => {
   const response = await axios.get('/api/posts/');

   return response;
};

export const getOnePost = async (req, res) => {
   const response = await axios.get('/api/posts/' + req);
   return response;
};

export const createPost = async (data) => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   const response = await axios.post('/api/posts/create', data, config);
   return response;
};
