function Event() {

    function myEvent() {
        console.log('Good, I have been activated')
    }

    return(
        <div>
            <p>Click here for an Event:</p>
            <button onClick={myEvent}>Active</button>
        </div>
    )
}

export default Event