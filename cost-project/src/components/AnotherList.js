function AnotherList({ itens }) {
    return (
        <>
            <h3>Good Things list:</h3>
            {itens.map((item, index)) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )
}

export default AnotherList