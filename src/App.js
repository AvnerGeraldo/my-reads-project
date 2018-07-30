import React from 'react'
import { Route } from 'react-router-dom'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import ButtonChooseShelf from './ButtonChooseShelf/ButtonChooseShelf'
import { faFilter } from '../node_modules/@fortawesome/free-solid-svg-icons';

class BooksApp extends React.Component {
  state = {
    bookData: [],
    shelfActive: 'Currently Reading'
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookData) => this.setState({ bookData }))
  }

  changeShelfHandler = (shelf) => {
    console.log(shelf)
    this.setState({ shelfActive: shelf })
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
                <div 
                  key={shelf} 
                  className="col-4">
                    <ButtonChooseShelf 
                      bookshelf={shelf}
                      changeShelf={this.changeShelfHandler}
                      active={shelf === this.state.shelfActive}/>
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