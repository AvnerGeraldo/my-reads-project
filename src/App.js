import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

//Components
import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'

//Assets
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class BooksApp extends React.Component {
  state = {
    bookData: []    
  }

  componentDidMount() {
    this.searchAllBooks()
  }

  changeBookShelfHandler = (book, shelf) => {
    //First change on state
    let oldShelf = book.shelf || null

    this.updateBookShelfState(book, shelf)

    //Second update shelf on API
    BooksAPI.update(book, shelf).catch((e) => {
      alert('Não foi possível atualizar livro.')
      this.updateBookShelfState(book, oldShelf)
    })
  }

  updateBookShelfState = (book, shelf) => {
    let bookDataUpdate = this.state.bookData.map(b => {
      if (b.id === book.id && b.title === book.title) {
        //Update shelf
        return {
          ...book,
          shelf
        }
      }

      return b
    })

    //Remove 'none' shelfs
    bookDataUpdate = bookDataUpdate.filter(b => (b.shelf.toLowerCase() || null) !== 'none')

    this.setState({ bookData: bookDataUpdate })
  }

  searchAllBooks = () => {
    BooksAPI.getAll().then((bookData) => this.setState({ bookData }))
    .catch( _ => this.setState({ bookData: [] }))
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