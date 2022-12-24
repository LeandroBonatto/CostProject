function Form() {

    function register(e) {
        e.preventDefault()
        console.log('Registration done!')
    }

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
                        laceholder="Write your name"
                    />
                </div>
                <label htmlFor="password">Password: </label>
                <div>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Write your pasword" 
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