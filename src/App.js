import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; //needs Rick n Morty graphics
//also we should change the favicon
import axios from 'axios'
import Styled from 'styled-components'
import {  BASE_URL,ARR_QRY_STRS , PAGIFICATION /*we should add our git & social info in there as well */} from './Constants/constants'
import './App.css'; 

import CharGallery from './components/CharGallery'

const StyledApp = Styled.section`

`

function App() {
 const [charDataReceived, setCharDataReceived] = useState({});
 const  [locDataRetreived, setLocDataReceived] = useState({}); 
 const [epDdataReceived, setEpDataReceived] = useState({})

 //Pagification helper function -- loops through pages.
 //Parced Data is how all previous pages of data are store -- it's an array of arrays. 
 function allPageRequests(parsedData, url) {
   let parsedDataList = parsedData
  axios.get(url)
  .then ( res => {
    parsedDataList.push(res.data.results)
    if (res.data.info.next){
      // keep recursively iterating through pages as long as info.next is truthy
      allPageRequests(parsedDataList, res.data.info.next)
    } else {
      //Once there is no res.data.info.next, flatten the complete array of arrays of objects.
      const completeResponse = parsedDataList.flat() 
      console.log(completeResponse)
      //Route data to respective bucket, setting state for each gallery
       if (url.includes("character")){
        setCharDataReceived(completeResponse)}
      else if (url.includes("location")){
          setLocDataReceived(completeResponse)
    }
      else if (url.includes("episode")){
        setEpDataReceived(completeResponse)
    }
  }  
  })
  .catch ( err => {
    console.log(err)
  } )
 }
  
  //Grab all pages of Char, Loc, Ep datasets and set their state to pass through gallery props
   useEffect (() => {
    ARR_QRY_STRS.forEach( qS => {
      allPageRequests([], `${BASE_URL}/${qS}`)
    })    
  }, [])
  return (
    <StyledApp className="App">
     {/* Create Nav component */}
     {/* Create Marketing Page Component */}
     {/* Create  Footer Component*/}
     {/*for all three databases-- craft tile / gallery components */}
     <CharGallery data={charDataReceived} />
    </StyledApp>
  );
}

export default App;

//additional notes: Needs react router (import and implementation)
//We should define our component architecture and consider how we want to during next meeting
//We'll want to make sure it's mobile accessible!