import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

//Components
import Shelf from '../Shelf/Shelf'

class SearchPage extends Component {

    state = {
        searchText: '',
        bookDataSearch: []
    }

    searchHandler = (e) => {
        e.preventDefault()

        this.setState({ 
            searchText: e.target.value
        })
        
        //Buscar na API
        if (e.target.value.length > 0) {
            this.props.searchBookOnApi(e.target.value).then(data => {
                if (data === undefined || data.error !== undefined) {
                    this.setState({ bookDataSearch: [] })
                    return false
                }

                //Atualizar estante nos livros
                this.updateBooksSearched(data)
            })
        }
    }

    addShelfToBook = (book, shelf) => {
        this.props.changeBookShelfHandler(book, shelf)

        //Atualizar do livro na busca
        const booksShelfUpdate = this.state.bookDataSearch.map(b => {
            if (book.id === b.id && book.title === b.title) {
                return {
                    ...book,
                    shelf
                }
            }

            return b;
        })

        //Atualizar busca
        this.setState({ bookDataSearch: booksShelfUpdate })
    }

    updateBooksSearched = (dataSearched) => {
        //Percorrer livros retornados da busca
        const booksShelfUpdate = dataSearched.map(book => {
            //Verificar se o livro já existe na estante
            let bookFounded = this.searchBookOnShelf(book)

            //Atualizar a estante em que o livro está caso ele já exista
            if (bookFounded.length > 0) {
                return {
                    ...book,
                    shelf: bookFounded[0].shelf
                }
            }
            
            return book;
        })

        //Atualizar busca
        this.setState({ bookDataSearch: booksShelfUpdate })
    }

    searchBookOnShelf = book => {
        //Percorrer livros na estante
        return this.props.bookDataOnShelf.filter(bookShelf => bookShelf.id === book.id && bookShelf.title === book.title)
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