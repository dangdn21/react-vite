import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const MAX_RETRIES = 2;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      retry: MAX_RETRIES,
    },
  },
});

export default function ReactQuery(properties) {
  return (
    <QueryClientProvider client={queryClient}>
      {properties.children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
