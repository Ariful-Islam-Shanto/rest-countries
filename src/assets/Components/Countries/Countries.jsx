import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { list } from 'postcss';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = country => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
        handleVisitedFlags(country.flags.png)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags);
    }
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    console.log(countries);
    return (
        <div className='space-y-10'>
        <div>
            <h1 className='text-2xl font-medium text-black'>Total Visited Countries : {visitedCountries.length}</h1>
            <div className='w-full'>
                <ul className='grid grid-cols-12 gap-3 '>
                    {visitedCountries.map(country => <li>{country?.name?.common}</li>)}
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-medium text-black' >All visited country flags :</h1>
                <div className='grid grid-cols-12 gap-3'>
                    {visitedFlag.map(flag => <img className='w-full h-[50px]' src={flag} />)}
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
            {countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)}
        </div>
        </div>
    );
};

export default Countries;