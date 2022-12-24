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
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Write your name" ></input>
                </div>
                <label htmlFor="password"></label>
                <div>
                    <input type="password" id="password" name="password" placeholder="Write your pasword" ></input>
                </div>
                <div>
                    <input type="submit" value="registration"></input>
                </div>
            </form>
        </div>
    )
}

export default Form