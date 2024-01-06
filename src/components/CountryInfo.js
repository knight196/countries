import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import data from '../data'

export default function CountryInfo({isDark}) {

const {slug} = useParams()

const a = data.map(item => item.name === slug && item).filter(Boolean)

const code = a.map(item => item.borders?.map(item => item)).toString()

const b = data.filter(c => code.includes(c.cioc))

function borders(){

const borderNames = b.map(item =>
   <Link to ={`/countryInfo/${item.name}`}>
   <button className={!isDark ? "border-1 darkmode rounded-1 mx-2 px-4 py-1 m-1" : "border-1 rounded-1 lightmode mx-2 px-4 py-1 m-1"}>{item.name}</button>
   </Link>
   )

return borderNames

}

  return (
    <div className={!isDark ? 'darkmode p-4' : 'lightmode p-4'} >
      <Link to="/">
      <button className="border-1 rounded-1 bg-white px-3 py-1"><i className="bi bi-arrow-left"></i> Back</button>
      </Link>
      
      {data.map(country => {
        if(country.name === slug){
          return(

            <div className="country_page my-5">

      <div>
    
           <img src={country.flags?.png} alt=""/>
    
                </div>
    
            <div>

            
            <h4 className="px-2">{country.name}</h4>
            
              
              <div className="country_details">

              <div>  
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
              </div>

            <div>
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: {country.currencies?.map(item => item.name)} </p>
                <p>Languages: {country.languages?.map(item => item.name).join(', ')}</p>
            </div>

              </div>

              <span className="px-2">
                {!code ? <></> : 
                <>
                Border Countries: 
                {borders()}
                </>
                }
              </span>
                

                </div>

    
      </div>
                )
                }
                })}
    
    </div>
  )
}
