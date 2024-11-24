import React from "react";
import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) {
    return <p>No country data available.</p>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} style={{ width: "200px" }} />
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
      <p><strong>Currency:</strong> {country.currencies
        ? Object.values(country.currencies)
            .map((currency) => `${currency.name} (${currency.symbol || ""})`)
            .join(", ")
        : "N/A"}
      </p>
    </div>
  );
}






