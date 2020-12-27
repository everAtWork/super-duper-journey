import React, {useState} from 'react';
import './App.css';
import { SortingTable } from './components/SortingTable';
import MOCK_DATA from './components/MOCK_DATA.json'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return ( 
  <div className="App">
    <input type="text" placeholder="Search..." onChange={event => {
      setSearchTerm(event.target.value)
    }} />
    {MOCK_DATA.filter(val => {
      if (searchTerm == ""){
        return val
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key) => {
      return <div className="user" key={key}>{val.name}</div>
    })}
    <SortingTable></SortingTable>
  </div>
  )
}

export default App;