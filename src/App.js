import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; //needs Rick n Morty graphics
//also we should change the favicon
import axios from 'axios'
import Styled from 'styled-components'
import {  BASE_URL,ARR_QRY_STRS , PAGIFICATION /*we should add our git & social info in there as well */} from './Constants'
import './App.css';

const StyledApp = Styled.section`

`

function App() {
  // instantiate state: charDataReceived; locDataRetreived; epDdataReceived =({})...


  //Grab all pages of Character dataset
  //  useEffect (() => {
  //   axios.get(`${BASE_URL} ${ARR_QRY_STRS[0]} ${PAGIFICATION}`)
  //     .then ( res => {
  //       setCharDataReceived
  //     })
  //     .catch ( err => {
  //       console.log(err)
  //     } )
  // }, [])
  return (
    <StyledApp className="App">
     {/* Create Nav component */}
     {/* Create Marketing Page Component */}
     {/* Create  */}
    </StyledApp>
  );
}

export default App;
