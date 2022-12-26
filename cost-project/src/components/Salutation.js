function Salutation({name}) {
    function generateSalutation(anyName) {
        return `Hello, ${anyName}, everything ok?`
    }

    return <>{name && <p>{generateSalutation(name)}</p>}</>
}

export default Salutation