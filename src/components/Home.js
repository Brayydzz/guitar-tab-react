import { useContext } from "react"
import { trackContext } from "../trackReducer"
import TabCard from "./TabCard"

const Home = () => {
    const {tracks} = useContext(trackContext)
    

    return (
        <>
            <h1>HOME</h1>
            { tracks.length > 0 ?
                <ul>
                    {tracks.map((track) => (
                        <TabCard track={track}/>
                    ))}
                </ul>
                :
                <h2>....Loading Tracks</h2>
            }
        </>
    )
}

export default Home
