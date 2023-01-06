import { useCountriesQuery } from './hooks';

const CountriesCount = () => {
  const { data } = useCountriesQuery((data) => data.length);

  return <p>{`Number of countries: ${data}`}</p>;
};

export default CountriesCount;