import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

//Components
import ButtonChooseShelf from './ButtonChooseShelf/ButtonChooseShelf'
import Shelf from './Shelf/Shelf'

//Assets
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
    const listBookShelf = ['Currently Reading', 'Want to Read', 'Read', 'All']

    return (
      <div className="container-fluid">         
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
        </div>
        <div className="row">
          <div className="col">
            <Route 
              path='/' 
              exact
              render={() => (
                <Shelf data={this.state.bookData} chooseShelf={this.state.shelfActive} />
              )} />
          </div>
        </div>        
      </div>
    )
  }
}
export default BooksApp