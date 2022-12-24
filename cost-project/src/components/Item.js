import PropTypes from 'prop-types'

function Item({brand, year_release}) {
    return (
        <>
            <li>{brand} - {year_release}</li>
        </>
    )
}

export default Item