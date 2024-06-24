import { useState } from 'react';
import './Country.css'
export default function Country({country, handleVisitedCountries}){
    // console.log(country);
    const {name, flags, population, region} = country;

    const [visited, setVisited] = useState(false);

    const handleButton= ()=>{
        setVisited(!visited);
    }
    return(
        <div className={`Country ${visited && 'visited'}`}>
            <h3>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5>
            {/* <button className='btn' onClick={}> Mark Visited</button> */}
            <br />
            <button onClick={()=>{
                handleButton
                handleVisitedCountries(country)
                }} className='btn'>{visited? 'visited':'Visit'}</button>
        </div>
    )
}