import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

//Components
import Shelf from '../Shelf/Shelf'

class SearchPage extends Component {

    state = {
        ...this.state,
        searchText: '',
        bookDataSearch: []
    }

    searchHandler = (e) => {
        e.preventDefault()

        this.setState({ 
            searchText: e.target.value,
            bookDataSearch: []
        })

        //Search on API
        if (e.target.value.length > 0) {
            this.props.searchBookOnApi(e.target.value).then(data => {            
                //Verificar se existe erro ao buscar dados
                if (data !== undefined && data.error === undefined) {
                    //Remover livros que já existem na estante
                    const removeDuplicate = data.filter(book => {
                        let foundBook = this.props.bookDataOnShelf.filter(bookOnShelf => bookOnShelf.title === book.title)

                        if (foundBook.length === 0) return book

                        return null
                    })

                    this.setState({ bookDataSearch: removeDuplicate })
                }
            })
        }
    }

    addShelfToBook = (book, shelf) => {
        const newBookDataSearch = this.state.bookDataSearch.filter(b => b.title !== book.title)

        this.setState({ bookDataSearch: newBookDataSearch })
        this.props.changeBookShelfHandler(book, shelf)
    }

    render() {        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" onChange={this.searchHandler} value={this.state.searchText} placeholder="Search by title or author"/>
                        </div>
                </div>
                <div className="search-books-results">
                    <Shelf 
                        data={this.state.bookDataSearch} 
                        chooseShelf={null}
                        changeBookShelf={this.addShelfToBook} />
                </div>
            </div>
        )
    }
}

const { func, array } = PropTypes
SearchPage.propTypes = {
    searchBookOnApi: func.isRequired,
    changeBookShelfHandler: func.isRequired,
    bookDataOnShelf: array
}

export default SearchPage