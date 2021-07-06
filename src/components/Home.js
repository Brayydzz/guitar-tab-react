import { useContext } from "react"
import { trackContext } from "../trackReducer"

const Home = () => {
    const {tracks} = useContext(trackContext)
    

    return (
        <>
            <h1>HOME</h1>
            <ul>
            {tracks.map((track) => (
                <div key={track.id}>
                    <h2>{track.title}</h2>
                    <p>{track.artist}</p>
                    <a href={track.url}>TABS</a>
                </div>
            ))}
            </ul>
        </>
    )
}

export default Home
