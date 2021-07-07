import { createContext } from "react";


// Creates a reducer function for tracks. trackState is the current state. The action is everything taken from trackDispatch
export default function trackReducer ( trackState, action ) {
    switch (action.type) {
        case "getTracks": {
            return {
                ...trackState,
                tracks: action.tracks
            }
        }

        default: return trackState

    }

    
}

export const trackContext = createContext() 