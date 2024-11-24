import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountrySelect = (e) => {
    const selected = countries.find(
      (country) => country.cca2 === e.target.value
    );
    if (selected) {
      setSelectedCountry(selected);
      navigate(`/countries/${selected.cca2}`, { state: { data: selected } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <select onChange={handleCountrySelect} value={selectedCountry.cca2 || ""}>
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
}




