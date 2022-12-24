function Form() {

    function register() {
        console.log('Registration done!')
    }

    return (
        <div>
            <h1>Fill up:</h1>
            <form onSubmit={register}>
                <div>
                    <input type="text" placeholder="Write your name" ></input>
                </div>
                <div>
                    <input type="submit" value="registration"></input>
                </div>
            </form>
        </div>
    )
}

export default Form