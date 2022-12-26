import { useState } from "react"

function Condicional () {

    const [email, setEmail] = useState()


    function sendEmail(e) {
        e.preventDefault()
        console.log('Testing')
    }

    return (
        <div>
            <h2>Sign in your email:</h2>
            <form>
                <input type="email" placeholder="Write your email" 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit" onClick={sendEmail}>
                    Send email
                </button>
            </form>

        </div>

    )
}

export default Condicional