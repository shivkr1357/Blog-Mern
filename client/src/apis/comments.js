import axios from 'axios';

export const createComment = async (data, post_id) => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   const response = await axios.post('/api/comments/create', data, config);
   return response;
};
