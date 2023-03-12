import React from 'react';

import Cars from './component/items/Cars'
import './App.css';
import './cars.css'
import useFetch from './useFetch'

function App() {

  const { data, loading, error } = useFetch('https://yegorka78.github.io/gscars/data/db.json')
  if (loading) return <h1> LOADING ... </h1>
  if (error) console.log(error);

  return (
    <div className="App">
      <h1>Here it is</h1>
      <Cars data={data}/>
    </div>
  );
}

export default App;
