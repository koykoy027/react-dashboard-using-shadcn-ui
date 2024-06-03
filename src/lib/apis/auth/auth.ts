import { fetchWithCSRFToken } from '../axios';

export const getUserProfile = async () => {
  try {
    const response = await fetchWithCSRFToken({
      method: 'get',
      url: 'api/user',
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};