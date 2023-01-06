const CountriesTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name.common}</td>
              <td>{item.capital && item.capital[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CountriesTable;
