import React, { useEffect, useState } from 'react'
import Card from './Card';
import Input from './Input';


function Covid19() {
  const[country, setCountry]= useState("Turkey");
  const[data, setData]=useState([])
  

  useEffect(()=>{
    const axios = require("axios");
    const key= process.env.REACT_APP_SECRET_KEY;
    const host= process.env.REACT_APP_SECRET_HOST;

    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      params: {country: `${country}`},
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': `${host}`
      }
    };
    
    axios.request(options).then(function (response) {
     console.log(response.data.response[0]);
      setData(response.data.response[0]);
    }).catch(function (error) {
      console.error(error);
    });

  },[country])
 
 
  return (
    <div>
      <h1>Covid-19 Data</h1>
      <Input setCountry={setCountry}/>
      <Card data={data} />


    </div>
  )
}

export default Covid19