import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

//Component 
import SearchPage from '../../SearchPage/SearchPage'
const props = {    
    bookDataOnShelf: [],
    searchBookOnApi: jest.fn(),
    changeBookShelfHandler: jest.fn()
}

const options = new ReactRouterEnzymeContext()

describe('[Component] SearchPage', () => {
    it('Verify if state change when text change', () => {
        const wrapper = shallow(<SearchPage {...props} />)
        const value = 'some input text'
        
        const inputText = wrapper.find('.search-books-input-wrapper > input')
        inputText.simulate('change', {
            target: {
                value
            }
        })
        
        expect(wrapper.state().searchText).toEqual(value)
    })
})
///UX
////Create:
    // - searchBooksWithThrottle(text)
    // - searchBooksWithDebounce(text)
    // - props.searchBookOnApi(textSearch)
//Verify if state change when text change
//verify if \'searchQueryHandler\' 
    // - calls \'searchBookOnApi\' correctly
    // - if \'searchBookOnApi\' returns data, verify if \'updateBooksSearched\' update state correctly
    // - calls \'searchInApi\' correctly

//update \'bookDataSearch\' to empty when passed search text to searchInApi is empty



// Shelf calls \'addShelfToBook\' correctly
//\'updateBooksSearched\' calls \'changeBookShelfHandler\' correctly
//\'addShelfToBook\' update state \'bookDataSearch\' correctly
///UI
//verify if exists link for close page
//mounts input text correctly
//mounts Shelf content correctly
