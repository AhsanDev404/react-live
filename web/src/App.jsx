import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [data, setData] = useState([])
useEffect(()=>{
  const fetchData = () => {
    
    axios
      .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(response => {
        setData(response.data)

      
    
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  fetchData();
},[])



  return (
    <>
    
     {JSON.stringify(data)}
    </>
  )
}

export default App
