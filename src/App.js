import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

//Components
import ButtonChooseShelf from './ButtonChooseShelf/ButtonChooseShelf'
import Shelf from './Shelf/Shelf'
import SearchPage from './SearchPage/SearchPage'

//Assets
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class BooksApp extends React.Component {
  state = {
    bookData: [],
    shelfActive: 'All'
  }

  componentDidMount() {
    this.searchAllBooks()
  }

  changeShelfHandler = (shelf) => {
    this.setState({ shelfActive: shelf })
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
    .catch(e => {
      alert('Não foi possível buscar livros.')
      this.setState({ bookData: [] })
    })
  }

  render() {
    const listBookShelf = ['Currently Reading', 'Want to Read', 'Read', 'All']

    return (   
      <div className="container-fluid">
        <Route 
          path='/' 
          exact
          render={() => (
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
                              <div 
                                key={shelf} 
                                className="col-3">
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
                    data={this.state.bookData} 
                    chooseShelf={this.state.shelfActive}
                    changeBookShelf={this.changeBookShelfHandler} />
              </div>
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