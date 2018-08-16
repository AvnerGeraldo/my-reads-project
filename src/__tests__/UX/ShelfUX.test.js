import React from 'react'
import { mount } from 'enzyme'

//Component
import Shelf from '../../Shelf/Shelf'

const props = {
    data: [
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
    chooseShelf: 'Read', 
    changeBookShelf: jest.fn()
}

describe('[Component] UX Shelf', () => {
    it('maps itemShelf if data passed to Shelf is not empty', () => {
        const wrapper = mount(<Shelf {...props}/>)
        
        expect(wrapper.find('.book')).not.toBeUndefined()
        expect(wrapper.find('.book')).not.toBeNull()
    })
})