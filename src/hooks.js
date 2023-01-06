import { useQuery } from 'react-query';
import { fetchCountries } from './resources';

export const useCountriesQuery = (select) =>
  useQuery({ queryKey: ['countries'], queryFn: () => fetchCountries(), select, staleTime: 5_000 });
