import React, { useContext, useEffect, useState } from "react";
import "./countryDetails.css";
import Skeleton from "./CardListShimmer";
import { Link, useLocation, useParams } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

export default function CountryDetails() {
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  console.log(navigate);
  const params = useParams();
  const countryName = params.country;

  const { state } = useLocation();

  const [isDark] = useContext(ThemeContext);

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital.join(", "),
      topLevelDomain: data.tld.join(", "),
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name + "(" + currency.symbol + ")")
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });
    data.borders?.map((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          setCountryData((prevState) => ({
            ...prevState,
            borders: [...prevState.borders, borderCountry.name.common],
          }));
        });
    });
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
        console.log(err);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }
  return (
    <main className={` ${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            navigate.go(1);
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <CountryDetailsShimmer/>
        {/* {  countryData === null? (<CountryDetailsShimmer/>) : 
          <div className="country-details">
            <img src={countryData.flag} alt={params.country + " flag"} />
            <div className="details-text-container">
              <h1>{countryName}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">
                    {countryData.population.toLocaleString("en-IN")}
                  </span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subRegion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">
                    {countryData.topLevelDomain}
                  </span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countryData.languages}</span>
                </p>
              </div>
              {countryData.borders.length === 0 ? (
                ""
              ) : (
                <div className="border-countries">
                  <b>Border Countries:</b>
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                  &nbsp;
                </div>
              )}
            </div>
          </div>
        } */}
      </div>
    </main>
  );
}
