import axios from './axios';

export const fetchStudents = async () => {
  const response = await axios.get('/students');
  return response.data;
};
