import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited);
    }
    return (
        <div className='bg-white border-solid shadow-lg rounded-lg p-8' >
            <img className='w-full h-[150px]' src={flags.png} alt="" />
            <h1 className='text-2xl text-black font-medium'>Name :{name.common} </h1>
            <p className='text-lg text-gray-500' >Population : {population}</p>
            <p className='text-lg text-gray-500 ' >Area : {area}</p>
            <p className='text-lg text-gray-500 ' >Code : {cca3}</p>
            <button onClick={handleClick} className='btn bg-black text-white' >{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country" : "I want to visit this country"}
            <br />
            <button className='btn bg-black text-white' onClick={() => handleVisitedCountries(country)} >Add Visited</button>
        </div>
    );
};

export default Country;