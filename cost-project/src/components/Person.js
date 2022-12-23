function Person(props) {

    return (
        <div>
            <img src={props.pic} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Carrer: {props.carrer}</p>
            
        </div>
    )
}

export default Person