import React from 'react'
import PropTypes from 'prop-types'

//Assets
import './ItemShelf.css'

const ItemShelf = ({ bookData, changeBookShelf }) => {
    //Vars
    const bookTitle = bookData.title !== undefined ? bookData.title : ''
    const backgroundImage = bookData.imageLinks !== undefined && bookData.imageLinks.thumbnail !== undefined ? `url(${bookData.imageLinks.thumbnail}}` : null
    const valueSelected = (bookData.shelf === null || bookData.shelf === undefined ? 'none' : bookData.shelf)
    const listAuthors = bookData.authors !== undefined ? bookData.authors : []

    //Style
    const styleBookCover = {
        backgroundImage,
        width: 128,
        height: 193
    }    

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
            <div className="book-title">{bookTitle}</div>
            <div className="book-authors">{listAuthors.join(' , ')}</div>
        </div>
    )
}

const { object, func } = PropTypes
ItemShelf.propTypes = {
    bookData: object.isRequired,
    changeBookShelf: func.isRequired
}

export default ItemShelf