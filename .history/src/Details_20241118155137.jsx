import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country data available. Please select a country.</p>;
  }

  const { data } = state;

  return (
    <div>
      <h2>{data.name.common}</h2>
      <p><strong>Capital:</strong> {data.capital?.[0] || "N/A"}</p>
      <p><strong>Region:</strong> {data.region}</p>
      <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
      <img
        src={data.flags.svg}
        alt={`${data.name.common} flag`}
        style={{ width: "200px" }}
      />
    </div>
  );
}




