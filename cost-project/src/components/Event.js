import Button from './event/Button'

function Event() {

    function myEvent() {
        console.log('Activating first event')
    }
    
    function secondEvent() {
        console.log('Activating second event')
    }

    return(
        <div>
            <p>Click here for an Event:</p>
            <Button event={myEvent} text="First Event" />
            <Button event={secondEvent} text="Second Event" />
        </div>
    )
}

export default Event