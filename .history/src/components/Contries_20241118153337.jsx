import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch kingdom data
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/name/kingdom");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const handleCountrySelect = (event) => {
    const selectedCountry = countries.find(
      (country) => country.cca2 === event.target.value
    );
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <label htmlFor="country-select">Select a country:</label>
      <select id="country-select" onChange={handleCountrySelect}>
        <option value="">-- Select a Country --</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      {/* Render child routes */}
      <Outlet />
    </div>
  );
}





