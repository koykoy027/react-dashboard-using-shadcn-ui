import axios from '../../helpers/http';

export const fetchLogin = async () => {
  const response = await axios.get('/login');
  return response.data;
};
