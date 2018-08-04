import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Assets
import './ButtonChooseShelf.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBook, faGlasses, faAtlas } from '@fortawesome/free-solid-svg-icons'

const ButtonChooseShelf = ({ bookshelf, active, changeShelf }) => {
    const objBookShelt = [{
        title: 'Currently Reading',
        icon: faBookOpen
    },
    {
        title: 'Want to Read',
        icon: faBook
    },
    {
        title: 'Read',
        icon: faGlasses
    },
    {
        title: 'All',
        icon: faAtlas
    }]

    const shelfObj = (objBookShelt.find((item) => item.title === bookshelf))
    
    if (shelfObj === undefined) {
        return null
    }

    return (
        <Link
            to='/'
            onClick={() => changeShelf(shelfObj.title)}
            className={active ? 'active' : null}>
            <FontAwesomeIcon 
                icon={shelfObj.icon} 
                className="mx-auto d-block" />
            <div className=''>{shelfObj.title}</div>
        </Link>
    )
}

const { string, bool, func } = propTypes
ButtonChooseShelf.propTypes = {
    bookshelf: string.isRequired,
    active: bool.isRequired,
    changeShelf: func.isRequired
}

export default ButtonChooseShelf;