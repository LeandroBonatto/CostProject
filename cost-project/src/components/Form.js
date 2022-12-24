import { useState } from 'react'

function Form() {
    function register(e) {
        e.preventDefault()
        console.log(name)
        console.log('User ${name} was registred with password: ${password}')
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return (
        <div>
            <h1>Fill up:</h1>
            <form onSubmit={register}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Write your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Write your pasword"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="registration"></input>
                </div>
            </form>
        </div>
    )
}

export default Form