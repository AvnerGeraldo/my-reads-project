import React from 'react'
import propTypes from 'prop-types'

//Components
import ItemShelf from './ItemShelf'

const Shelf = ({ data, chooseShelf, changeBookShelf }) => {
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

    const styleRow = {
        padding: "0px 10px",
        minWidth: "675px",
        margin: "0 auto",
        maxWidth: "800px"
    }
    
    return (
        <div className="row" style={styleRow}>
            {(listShelfData.length === 0) ? 
            (<div className="no-results">Não há dados para serem exibidos!</div>) :
                listShelfData.map((item, index) => ( 
                <ItemShelf 
                    key={index} 
                    bookData={item} 
                    changeBookShelf={changeBookShelf}/> 
            ))}
        </div>
    )
}

const { func, string, array } = propTypes
Shelf.propTypes = {
    data: array.isRequired,
    chooseShelf: string.isRequired,
    changeBookShelf: func.isRequired
}

export default Shelf