import Item from "./Item"

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item brand="Ferrari" year_release={1985} />
                <Item brand="Porsche" year_release={1998} />
                <Item brand="Renault" year_release={2002} />
                <Item brand="GM" year_release={1999} />
                <Item />
            </ul>
        </>
    )
}

export default List