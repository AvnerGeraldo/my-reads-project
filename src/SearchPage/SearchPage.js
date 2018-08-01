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
                    this.setState({ bookDataSearch: data })
                }
            })
        }
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
                        changeBookShelf={(book, shelf) => this.props.changeBookShelfHandler(book, shelf)} />
                </div>
            </div>
        )
    }
}

const { func } = PropTypes
SearchPage.propTypes = {
    searchBookOnApi: func.isRequired,
    changeBookShelfHandler: func.isRequired
}

export default SearchPage