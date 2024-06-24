import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() =>{
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  function handleVisitedCountries(country){
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  }

  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      {/* Show the visited Countries List */}
      <div>
        <h3>Visited Countries: {visitedCountries.length} </h3>
        {
          visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
        }
      </div>

      {/* Show all contries */}
      <div className="country-container">
        {countries.map((country) => {
          return <Country 
          key={country.ccn3} 
          country={country}
          handleVisitedCountries={handleVisitedCountries}>
          </Country>;
        })}
      </div>
    </div>
  );
}
