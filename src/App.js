import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

function App() {

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className="App">
     {/* Create Nav component */}
     {/* Create Marketing Page Component */}
     {/* Create  */}
    </div>
  );
}

export default App;
