import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Assets
import './ButtonChooseShelf.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBook, faGlasses } from '@fortawesome/free-solid-svg-icons'

const ButtonChooseShelf = ({ bookshelf, active }) => {
    const objBookShelt = [{
        title: 'Currently Reading',
        route: '/current-reading',
        icon: faBookOpen
    },
    {
        title: 'Want to Read',
        route: '/want-to-read',
        icon: faBook
    },
    {
        title: 'Read',
        route: '/read',
        icon: faGlasses
    }]

    const shelfObj = objBookShelt.filter((item) => item.title === bookshelf)
    
    return (
        <Link to={shelfObj[0].route} className={active ? 'active' : ''}>
            <FontAwesomeIcon icon={shelfObj[0].icon} className="mx-auto d-block"/>
            <div className=''>{shelfObj[0].title}</div>
        </Link>
    )
}

ButtonChooseShelf.propTypes = {
    bookshelf: PropTypes.string
}

export default ButtonChooseShelf;