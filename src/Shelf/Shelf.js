import React from 'react'
import propTypes from 'prop-types'

const Shelf = ({ data, chooseShelf }) => {
    let shelf;

    switch (chooseShelf) {
        case 'Currently Reading':
            shelf = 'currentlyReading'
            break;
        case 'Want to Read':
            shelf = 'wantToRead'
            break;
        case 'Read':
            shelf = 'read'
            break;
        default:
            shelf = null
    }

    const listShelfData = data.filter((book) => {
        if (shelf === null) {
            return book
        }

        return book.shelf === shelf
    })
    console.log(listShelfData);
    return ''
}

export default Shelf