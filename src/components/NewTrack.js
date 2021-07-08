import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { trackContext } from "../trackReducer"

const NewTrack = () => {

    const { trackDispatch, tunings } = useContext(trackContext)
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [newTuning, setTuning] = useState("4")
    const [url, setUrl] = useState("")
    const history = useHistory()

    const submit = async (event) => {
        event.preventDefault()
        const newTrack = {title: title, artist: artist, url: url, tuning_id: newTuning}

        const res = await fetch("http://localhost:4000/api/v1/tracks", {
            method: "POST",
            body: JSON.stringify(newTrack),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = res.json()
        console.log(data)
        trackDispatch({
            type: "addTrack",
            newTrack
        })
        history.push("/")
    }


    return (
        <>
            <h1>NEW TRACK</h1>
            <form onSubmit={submit}>
                <label>Select Tuning: </label>
                <select name="tuning" id="tuning" onChange={(e) => setTuning(e.target.value)} value={newTuning}>
                    {tunings.map((tuning) => (
                        <option key={tuning.id} value={tuning.id}>{tuning.name}</option>
                    ))}
                </select>
                <div>
                    <label>Track Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                </div>
                <div>
                    <label>Track Artist:</label>
                    <input type="text" onChange={(e) => setArtist(e.target.value)} value={artist}></input>
                </div>
                <div>
                    <label>Tab URL:</label>
                    <input type="text" onChange={(e) => setUrl(e.target.value)} value={url}></input>
                </div>
                <button type="submit">Add Track</button>
            </form>
        </>
    )
}

export default NewTrack
