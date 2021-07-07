

const TabCard = ({track}) => {

    return (
        <>
            <li>
                <h2>{track.title}</h2>
                <h4>{track.artist}</h4>
                <a href={track.url} rel="noreferrer" target="_blank">TAB</a>
            </li>
        </>
    )
}

export default TabCard
