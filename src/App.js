import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; //needs Rick n Morty graphics
//also we should change the favicon
import axios from 'axios'
import Styled from 'styled-components'
import {  BASE_URL,ARR_QRY_STRS/*we should add our git & social info in there as well */} from './Constants/constants'
import './App.css'; 

import CharGallery from './components/CharGallery'
import EpGallery from './components/epGallery'
import LocGallery from './components/locGallery'
const StyledApp = Styled.section`

`

function App() {
 const [charDataReceived, setCharDataReceived] = useState({});
 const  [locDataReceived, setLocDataReceived] = useState({}); 
 const [epDataReceived, setEpDataReceived] = useState({})

 //Pagification helper function -- loops through pages
 //Parced Data is  a temporary container to store all previous pages; values -- it's an array of arrays. 
 function allPageRequests(url, parsedData = []) {
    axios.get(url)
    .then ( res => {
      parsedData.push(res.data.results)
      if (res.data.info.next){ // As long as it's true that there's a following page,
        allPageRequests(res.data.info.next, parsedData) // keep recursively iterating through pages, passing along collected data.
      } else {  //Otherwise, flatten the array of arrays of objects, and set the state for appropriate gallery
        const completeResponse = parsedData.flat() 
        //Route data to respective bucket, setting state for each gallery
        if (url.includes("character")){
          setCharDataReceived(completeResponse)}
        else if (url.includes("location")){
            setLocDataReceived(completeResponse)}
        else if (url.includes("episode")){
          setEpDataReceived(completeResponse)}
    }  
    })
    .catch ( err => {
      console.log(err)
    })
 }

  //Grab all pages of Char, Loc, Ep datasets and set their state to pass through gallery props
  useEffect (() => {
    ARR_QRY_STRS.forEach( qS => {
      allPageRequests(`${BASE_URL}/${qS}`)
    })    
  }, [])

  return (
    <StyledApp className="App">
     {/* Create Nav component */}
     {/* Create Marketing Page Component */}
     {/* Create  Footer Component*/}
     <EpGallery data={epDataReceived} />
     <LocGallery data={locDataReceived} />
     <CharGallery data={charDataReceived} />
    </StyledApp>
  );
}

export default App;

//additional notes: Needs react router (import and implementation)
//We should define our component architecture and consider how we want to during next meeting
//We'll want to make sure it's mobile accessible!