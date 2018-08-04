import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Components
import ButtonChooseShelf from '../ButtonChooseShelf/ButtonChooseShelf'
import Shelf from '../Shelf/Shelf'

const HomePage = ({ bookData, changeShelfHandler,  changeBookShelfHandler, shelfActive }) => {
    const listBookShelf = ['Currently Reading', 'Want to Read', 'Read', 'All']

    return (
        <div>
            <div className="row align-items-center">
                <div className="col list-books-title">
                    <h1>MyReads</h1>
                </div>
            </div>
            <div className="row choose-bookshelf">
                <div className="col-10 offset-1">
                    <div className="row">
                        {listBookShelf.map(shelf => (
                            <div key={shelf} className="col-3">
                                <ButtonChooseShelf 
                                    bookshelf={shelf}
                                    changeShelf={changeShelfHandler}
                                    active={shelf === shelfActive}/>
                            </div>
                        ))}
                    </div>          
                </div>
                <div className="open-search">
                    <Link to="/search">Add a Book</Link>
                </div>
            </div>
            <Shelf 
                data={bookData} 
                chooseShelf={shelfActive}
                changeBookShelf={changeBookShelfHandler} />
        </div>
    )
}

const { func, array, string } = PropTypes

HomePage.propTypes = {
    bookData: array.isRequired,
    changeShelfHandler: func.isRequired,
    changeBookShelfHandler: func.isRequired,
    shelfActive: string.isRequired
}

export default HomePage