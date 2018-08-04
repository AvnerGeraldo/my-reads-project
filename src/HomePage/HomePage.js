import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Components
import ButtonChooseShelf from '../ButtonChooseShelf/ButtonChooseShelf'
import Shelf from '../Shelf/Shelf'

class HomePage extends Component {

    state ={
        shelfActive: 'All'  
    }

    changeShelfHandler = (shelf) => {
        this.setState({ shelfActive: shelf })
    }

    render() {
        const listBookShelf = ['Currently Reading', 'Want to Read', 'Read', 'All']
        const { bookData, changeBookShelfHandler } = this.props

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
                                        changeShelf={this.changeShelfHandler}
                                        active={shelf === this.state.shelfActive}/>
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
                    chooseShelf={this.state.shelfActive}
                    changeBookShelf={changeBookShelfHandler} />
            </div>
        )
    }
}

const { func, array } = PropTypes

HomePage.propTypes = {
    bookData: array.isRequired,
    changeBookShelfHandler: func.isRequired
}

export default HomePage