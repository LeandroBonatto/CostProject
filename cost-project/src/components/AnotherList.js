function AnotherList({ itens }) {
    return (
        <>
            <h3>Good Things list:</h3>
            {itens.length > 0 ? (
                {itens.map((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>There is no itens!</p>
            )}
        </>
    )
}

export default AnotherList