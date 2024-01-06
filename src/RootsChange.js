import React from 'react'
import {Route,Routes} from 'react-router-dom'
import CountryInfo from './components/CountryInfo'
import Countries from './components/Countries'

export default function RootsChange({isDark}) {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Countries isDark={isDark}/>}></Route>
      <Route path="/countryInfo/:slug" element={<CountryInfo isDark={isDark}/>}></Route>

      </Routes>
    </div>
  )
}
