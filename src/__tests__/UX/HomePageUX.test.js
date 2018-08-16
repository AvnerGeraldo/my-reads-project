import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

//Component
import HomePage from '../../HomePage/HomePage'
import { text } from '../../../node_modules/@fortawesome/fontawesome-svg-core';

const props = {
    bookData: [
        {
            title: 'book title 1',
            imageLinks: {
                thumbnail: 'image-link 1'
            },
            shelf: 'wantToRead',
            authors: ['author1', 'author2']
        },
        {
            title: 'book title 2',
            imageLinks: {
                thumbnail: 'image-link 2'
            },
            shelf: 'read',
            authors: ['author1']
        },
        {
            title: 'book title 3',
            imageLinks: {
                thumbnail: 'image-link 3'
            },
            shelf: 'currentlyReading',
            authors: []
        }
    ],
    changeBookShelfHandler: jest.fn()
}
const shelfCategoryList = ['Currently Reading', 'Want to Read', 'Read', 'All']
const options = new ReactRouterEnzymeContext();

describe('[Component] UX HomePage', () => {
  it('maps throught the shelf categories', () => {
      const wrapper = shallow(<HomePage {...props} />)

      expect(wrapper.find('.choose-bookshelf').find('.row').find('div.col-3')).toHaveLength(shelfCategoryList.length)
  })

  it('update the actived shelf', () => {
    const wrapper = mount(<HomePage {...props} />, options.get())
    const initialState = wrapper.state();

    wrapper.find('.choose-bookshelf')
        .find('.row')
        .find('div.col-3')
        .first()
        .find('a')
        .simulate('click')
    
    expect(wrapper.state().shelfActive).not.toEqual(initialState.shelfActive)
  })

  it('state starts with \'shelfActive = All\'', () => {
      const wrapper = shallow(<HomePage {...props} />)
      expect(wrapper.state().shelfActive).toBe('All')
  })
})