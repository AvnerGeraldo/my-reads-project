import React from 'react'
import propTypes from 'prop-types'

//Assets
import './ItemShelf.css'

const ItemShelf = ({ bookData, changeBookShelf }) => {
    const styleBookCover = {
        backgroundImage: `url(${bookData.imageLinks.thumbnail}}`,
        width: 128,
        height: 193
    }

    const valueSelected = (bookData.shelf === null ? 'none' : bookData.shelf)

    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={styleBookCover}></div>
                <div className="book-shelf-changer">
                    <select value={valueSelected} onChange={(e) => changeBookShelf(bookData, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors.join(' , ')}</div>
        </div>
    )
}

const { object, func } = propTypes
ItemShelf.propTypes = {
    bookData: object.isRequired,
    changeBookShelf: func.isRequired
}

export default ItemShelf