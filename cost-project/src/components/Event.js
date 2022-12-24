function Event({ number }) {

    function myEvent() {
        console.log('Good, I have been activated ${number}')
    }

    return(
        <div>
            <p>Click here for an Event:</p>
            <button onClick={myEvent}>Active</button>
        </div>
    )
}

export default Event