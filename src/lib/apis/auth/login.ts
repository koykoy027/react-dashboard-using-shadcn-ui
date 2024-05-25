import axios from '../../helpers/http';

export const fetchLogin = async (formData) => {
  const response = await axios.post('/login', formData);
  return response.data;
};