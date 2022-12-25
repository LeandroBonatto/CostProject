import button from './Event/Button'

function Event() {

    function myEvent() {
        console.log('Activating first event')
    }

    return(
        <div>
            <p>Click here for an Event:</p>
            <button event={myEvent} text="First Event" />
        </div>
    )
}

export default Event