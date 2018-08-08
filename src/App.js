import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './API/BooksAPI'

//Components
import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'

//Assets
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class BooksApp extends Component {
  state = {
    bookData: []    
  }

  async componentDidMount() {
    try {
      const bookData = await BooksAPI.getAll()
      this.setState({ bookData })
    } catch (error) {
      this.setState({ bookData: [] })
    }
  }

  changeBookShelfHandler = (book, shelf) => {
    //First change on state
    let oldShelf = book.shelf || null

    try {
      this.updateBookShelfState(book, shelf)

      //Second update shelf on API
      BooksAPI.update(book, shelf)
    } catch(error) {
        alert('Não foi possível atualizar livro.')
        this.updateBookShelfState(book, oldShelf)
    }
  }

  updateBookShelfState = (book, shelf) => {
    let bookDataUpdate = this.state.bookData
    //Verify if book exists
    const bookFounded = bookDataUpdate.find(b => b.id === book.id && b.title === book.title)

    if (bookFounded === undefined) {
      bookDataUpdate.push({
        ...book,
        shelf
      })
    } else {
      bookDataUpdate = bookDataUpdate.map(b => {
        if (b.id === book.id && b.title === book.title) {
          //Update shelf
          return {
            ...book,
            shelf
          }
        }

        return b
      }).filter(b => (b.shelf.toLowerCase() || null) !== 'none') //Remove 'none' shelfs
    }

    this.setState({ bookData: bookDataUpdate })
  }

  render() {
    return (   
      <div className="container-fluid">
        <Route 
          path='/' 
          exact
          render={() => (
            <HomePage
              bookData={this.state.bookData}
              changeBookShelfHandler={this.changeBookShelfHandler} />
          )} />
          <Route
            path = '/search'
            render = {() => (
              <SearchPage 
                searchBookOnApi={(query) => BooksAPI.search(query)}
                bookDataOnShelf={this.state.bookData}
                changeBookShelfHandler={this.changeBookShelfHandler} />
            )} />   
      </div>
    )
  }
}
export default BooksApp