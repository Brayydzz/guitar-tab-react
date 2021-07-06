import React, {useEffect, useReducer} from 'react';
import Home from './components/Home';
import trackReducer, { trackContext } from './trackReducer';

function App() {

  
  const [storeTracks, trackDispatch ] = useReducer(trackReducer, { 
    tracks: [] }) 

  useEffect( async () => {
    const res = await fetch("http://localhost:4000/api/v1/tracks")
    const data = await res.json()
    trackDispatch({
      type: "getTracks",
      tracks: data
    })
  }, [])


  return (
    <>
      <trackContext.Provider value={{...storeTracks, trackDispatch}}>
        <Home />
      </trackContext.Provider>
    </>
  );
}

export default App;
