import { fetchCountries } from './resources';
import { useEffect, useState } from 'react';
import CountriesTable from './CountriesTable';

const App = () => {
  return <Countries />;
}

const Countries = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetchCountries().then((response) => {
          setData(response);
        });
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
