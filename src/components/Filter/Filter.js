import {useEffect,useState} from 'react'
import data from '../../data'

export default function Filter({setfilter}) {

    const [countryfilter,setcountryfilter] = useState('')
    const [searchTerm, setsearchTerm] = useState('')
    
    function searchHandle(e){
            setsearchTerm(e.target.value)
    }

    function searchfilter(value){
        if(!searchTerm){
           return value
        }
            const filtered = value.filter((y) => y.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return filtered
        
    }

    useEffect(() => {
        const searchfiltered = searchfilter(data.map(item => item))
        setfilter(searchfiltered)
    },[searchTerm])


    //dropdown filter option
    function handleChange(e){
        setcountryfilter(e.target.value)
    }

    function filterByCountry (filterdata){
        //avoid filter for empty string

        if(!countryfilter){
            return filterdata
        }

            const filteredPriceData = filterdata.filter(
                (region) => region.region.split(" ").indexOf(countryfilter) !== -1
                );
                return filteredPriceData;
            
    }

    useEffect(() => {
        const filteredData = filterByCountry(data.map(item => item))
        setfilter(filteredData)
    },[countryfilter])


  return (
    <>
    <div className="bg-white py-2 p-2 rounded-2">
    <i className="text-secondary bi bi-search"></i>
<input value={searchTerm} onChange={searchHandle} className="border-0 mx-3" type="text" placeholder="Search for your Country"/>  
</div>

<div>
    <span>Filter By Region</span> 
    <select onChange={handleChange} value={countryfilter} className="border-0 bg-white p-2">
<option value="">All</option>
<option value="Asia">Asia</option>
<option value="Americas">America</option>
<option value="Europe">Europe</option>
<option value="Africa">Africa</option>
<option value="Oceania">Oceania</option>
    </select>
</div>
    </>
  )
}
