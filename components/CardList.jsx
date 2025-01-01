import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardListShimmer from "./CardListShimmer";
export default function CardList({query}) {

  const [countryData,setCountryData] =useState([])

 useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    setCountryData(data)
   
  });
 },[])
  return (
    <>
      <div className="countires-container">
      {countryData.length===0 ? (<CardListShimmer/>) : countryData.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country,i) => {
        return (
          <Card
            key={i}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
            data={country}
          />
        );
      })}
    </div>
    </>
  );
}
