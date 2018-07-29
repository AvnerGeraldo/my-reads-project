import React from 'react'
import { Route } from 'react-router-dom'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import ButtonChooseShelf from './ButtonChooseShelf/ButtonChooseShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => console.log(data))
  }

  render() {
    const listBookShelf = ['Currently Reading', 'Want to Read', 'Read']

    return (
      <div className="container-fluid">         
        <div className="row align-items-center">
          <div className="col list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <div className="row choose-bookshelf">
          <div className="col-8 offset-2">
            <div className="row">
              {listBookShelf.map(shelf => (
                <div key={shelf} className="col-4">
                  <ButtonChooseShelf bookshelf={shelf} active={(shelf === 'Currently Reading')}/>
                </div>
              ))}
            </div>          
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Route 
              path='/' 
              exact
              render={() => 'Current Reading'} />        
          
            <Route
              path='/current-reading'
              render={() => 'Current Reading'} />

            <Route
              path='/want-to-read'
              render={() => 'Want to Read'} />

            <Route
              path='/read'
              render={() => 'Read'} />
          </div>
        </div>        
      </div>
    )
  }
}
export default BooksApp