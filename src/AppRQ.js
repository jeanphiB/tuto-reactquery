import { fetchCountries } from './resources';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CountriesTable from './CountriesTable';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Countries = () => {
  const { isLoading, error, data } = useQuery(['countries'], () => fetchCountries());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <CountriesTable data={data} />
    </div>
  );
}

export default App;
