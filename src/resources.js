export const fetchCountries = (id) => {
  let url = 'https://restcountries.com/v3.1/';
  if (!id) {
    url += 'all';
  } else {
    url += `name/${id}`;
  }
  return fetch(url).then((response) => response.json());
};
