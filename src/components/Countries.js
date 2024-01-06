import {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Filter from './Filter/Filter'


export default function Countries({isDark}) {


    const [filter,setfilter] = useState([])

    return (
    <div className={!isDark ? 'darkmode' : 'lightmode'}>
        
        <div className="filter p-2">

        <Filter setfilter={setfilter}/>

        </div>
      
      <div className='countries'>

      {filter.map((item) => {
          
            return (
                
                <motion.div layout className="countries-card">
                    <div className="img-div">
                    <img src={item.flags.png} alt=""/>
                        </div>

                    <div className={!isDark ? 'darkmodecard p-3' : 'lightmodecard p-3'}>
                        
                    <p className='w-75'>{item.name}</p>
                        
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>


                    <Link style={{textDecoration:'none'}} className="text-dark" to={`/countryInfo/${item.name}`}>
<button className="border-0 px-2 py-1">Learn More</button>
                </Link>

                        </div>

                </motion.div>
            )
        })}
    </div>

    </div>
  )
}
