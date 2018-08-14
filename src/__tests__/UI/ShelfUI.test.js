import React from 'react'
import { shallow, mount } from 'enzyme'

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
            shelf: 'wantToRead',
            authors: []
        }
    ], 
    chooseShelf: 'currentlyReading', 
    changeBookShelf: jest.fn()
}

describe('[Component] Shelf', () => {
    it('render correctly a Shelf', () => {
        const wrapper = shallow(<Shelf {...props}/>)
        
        expect(wrapper).toMatchSnapshot()
    })

    it('rendered a message error when data shelf is empty', () => {
        const newProps = { ...props, data: [] }        
        const wrapper = mount(<Shelf {...newProps}/>)
        
        expect(wrapper.find('.no-results')).toHaveLength(1)
    })

    it('maps ItemsShelf with the same length passed throught props', () => {
        const wrapper = mount(<Shelf {...props}/>)

        expect(wrapper.find('.book')).toHaveLength(props.data.length)
    })
})