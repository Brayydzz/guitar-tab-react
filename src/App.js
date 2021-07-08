import React, {useEffect, useReducer} from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import NewTrack from './components/NewTrack';
import trackReducer, { trackContext } from './trackReducer';
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {

  // Assigns [storeTrack, trackDispatch] to the use reducer function. Pulls in the trackReducer function.
  // 2nd argument is an object containing the default values of tracks
  //storeTracks is the global state that we can pass down to components that are wrapped within trackContext.Provider

  const [storeTracks, trackDispatch ] = useReducer(trackReducer, { 
    tracks: [],
    tunings: [] }) 

  useEffect( async () => {
    const res = await fetch("http://localhost:4000/api/v1/tracks")
    const data = await res.json()
    trackDispatch({
      type: "getTracks",
      tracks: data
    })
  },[])

  useEffect( async () => {
    const res = await fetch("http://localhost:4000/api/v1/tunings")
    const data = await res.json()
    trackDispatch({
      type: "getTunings",
      tunings: data
    }) 
  },[])


  return (
    <>
      <h1>GUITAR TAB LIBRARY</h1>
      <BrowserRouter>
        <trackContext.Provider value={{...storeTracks, trackDispatch}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/track/new/" component={NewTrack}/>
          </Switch>
        </trackContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
