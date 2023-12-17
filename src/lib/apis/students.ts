import axios from '../helpers/http';

export const fetchStudents = async () => {
  const response = await axios.get('/students');
  return response.data;
};
