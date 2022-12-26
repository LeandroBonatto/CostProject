function AnotherList({ itens }) {
    return (
        <>
            <h3>Good Things list:</h3>
            {itens.map((item)) => (
                <p>{item}</p>
            ))}
        </>
    )
}

export default AnotherList