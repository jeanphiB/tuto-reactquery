import { useCountriesQuery } from './hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CountriesTable from './CountriesTable';
import CountriesCount from './CountriesCount';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const Countries = () => {
  const { isLoading, error, data } = useCountriesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <CountriesCount />
      <CountriesTable data={data} />
    </div>
  );
};

export default App;
