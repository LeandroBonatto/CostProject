import { useState } from "react"

function Condicional () {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function cleanUpEmail() {
        setUserEmail('')
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
                {userEmail && (
                    <div>
                        <p>User email is: {userEmail}</p>
                        <button onClick={cleanUpEmail}>Clean Up Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional