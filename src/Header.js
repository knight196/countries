import {useState} from 'react'

export default function Header({darkTheme,isDark}) {

  return (
    <div className="d-flex shadow-sm bg-white p-3 justify-content-between align-items-center">
      <h2>Where in the world?</h2>
      <button onClick={darkTheme} className="border-1 px-2 py-1 bg-white">
        {!isDark ? 
      <>
       <i className="bi bi-sun"></i>
        Light Mode
      </>  :

      <>
        <i className="bi bi-moon"></i>
        Dark Mode
      </>
      }
      </button>
    </div>
  )
}
