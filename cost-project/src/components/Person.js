function Person({name, age, carrer, pic}) {

    return (
        <div>
            <img src={pic} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Carrer: {carrer}</p>
            
        </div>
    )
}

export default Person