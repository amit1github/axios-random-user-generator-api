import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

import Axios from "axios"

import Cards from "./Cards";

function App() {
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/")
    console.log("Response: ", data); 
    
    const details = data.results[0];
  
    setDetails(details)
  }


  useEffect(() => {
    fetchDetails();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Cards details={details} />
      </header>
    </div>
  );
}

export default App;
