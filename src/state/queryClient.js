import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,        // Retry failed requests up to 3 times
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
    },
  },
});

export default queryClient;
