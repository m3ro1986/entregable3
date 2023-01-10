import { useState, useEffect } from 'react'
import './App.css';

import axios from 'axios';
import header from './assets/Rectangle1.svg'
import ResidentInfo from './components/ResidentInfo';


function App() {

  const[ apiInfo, setApiInfo ] = useState({})
  const[ isloading, setIsloading ] = useState( true );
  const[ id, setId ] = useState("")

  const getapi = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then( res => { 
        setApiInfo( res.data )
        setIsloading( false )
        setId("")
      } );
  } 

  useEffect( () => {
    let n = Math.floor(Math.random() * 126)
    axios.get(`https://rickandmortyapi.com/api/location/${n}`)
    .then( res => { 
      setApiInfo( res.data )
      setIsloading( false )
    } );
  }, [])

  console.log(apiInfo.residents)
  
  return (
    <div className="App">
      { isloading ? 
        <h1>is loading</h1> 
        :
        <>
          <header>
            <img src={header} alt="" />
          </header>
          <input 
            type="text"
            placeholder='type a location id'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={getapi}>search</button>
          <h2>{ apiInfo.name }</h2>
          <div className='infolocation'>
            <span><b>type: </b>{ apiInfo.type } </span> 
            <span><b>Dimension: </b>{ apiInfo.dimension} </span> 
            <span><b>Population: </b>{ apiInfo.residents.length }</span>
          </div>
          <div className='container'>
          {
            apiInfo.residents.map( url => (
              <div key={url}>
                <ResidentInfo url={url} />
              </div>
            ))
          }
          </div>
          
        </>  
        
      }
    </div>
  )
}

export default App
