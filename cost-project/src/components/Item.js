import PropTypes from 'prop-types'

function Item({brand, year_release}) {
    return (
        <>
            <li>{brand} - {year_release}</li>
        </>
    )
}

Item.PropTypes = {
    brand: PropTypes.string.isRequired,
    year_release: PropTypes.number,
}

Item.defaultProps = {
    brand: 'Missing brand',
    year_release: 0,
}

export default Item