import { createContext } from "react";

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