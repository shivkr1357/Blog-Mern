import axios from 'axios';

export const getPosts = async () => {
   const response = axios.get('/api/posts/');

   return response;
};
