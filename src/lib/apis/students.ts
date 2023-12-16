import { fetchJson } from '../helpers/http';

const baseUrl = import.meta.env.VITE_API_URL || '';

export const fetchStudents = async () => {
  const url = `${baseUrl}/students`;
  return fetchJson(url);
};
