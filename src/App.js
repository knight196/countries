import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import RootsChange from './RootsChange';
import Header from './Header'

import {useState} from 'react'


function App() {

  const [isDark,setIsDark] = useState(true)

  const darkTheme = () => setIsDark(!isDark)

  return (
    <div>
      <Header darkTheme={darkTheme} isDark={isDark} setIsDark={setIsDark}/>
     <RootsChange darkTheme={darkTheme} isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;
