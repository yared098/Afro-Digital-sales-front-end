import { useQuery } from 'react-query';
import getService from '../services/serviceManager';

// Fetch user data dynamically from the configured data source
export const useFetchUser = () => {
  const service = getService();

  return useQuery('user', () => service.read('users'), {
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

// Fetch menu data dynamically
export const useFetchMenu = () => {
  const service = getService();

  return useQuery('menu', () => service.read('menu'), {
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
  });
};
