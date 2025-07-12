import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  useEffect(() => {
    fetch('https://portfolio-project-oqd1.onrender.com/')
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);
  
  return (
    <div>
      <h1>Sunil Sethi - Full Stack Developer</h1>
      <p>This is my React frontend!</p>
    </div>
  );
}



export default App
