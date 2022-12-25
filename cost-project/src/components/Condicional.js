import { useState } from "react"

function Condicional () {

    function sendEmail(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h2>Sign in your email:</h2>
            <form>
                <input type="email" placeholder="Write your email" />
                <button onClick={sendEmail}>Send email</button>
            </form>

        </div>

    )
}

export default Condicional