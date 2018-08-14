import React from 'react'
import { shallow } from 'enzyme'

//Component
import ItemShelf from '../../Shelf/ItemShelf'

const props = {
    bookData: {
        title: 'book title',
        imageLinks: {
            thumbnail: 'image-link'
        },
        shelf: 'wantToRead',
        authors: ['author1', 'author2']
    }, 
    changeBookShelf: jest.fn()
}

describe('[Component] ItemShelf', () => {
    it('render item book correctly', () => {
        const wrapper = shallow(<ItemShelf {...props} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('initialize select with \'none\' value when \'bookData.shelf\' is null or not exists', () => {
        const newProps = { ...props, bookData: { ...props.bookData, shelf: null }}
        const wrapper = shallow(<ItemShelf {...newProps} />)

        expect(wrapper.find('select').props().value).toBe('none')
        expect(wrapper.find('select').props().value).not.toBeNull()
        expect(wrapper.find('select').props().value).not.toBeUndefined()
    })

    it('verified if book title is rendered', () => {
        const wrapper = shallow(<ItemShelf {...props} />)

        expect(wrapper.find('.book-title').text()).toBeDefined()
        expect(wrapper.find('.book-title').text()).not.toBeNull()
        expect(wrapper.find('.book-title').text()).toEqual(props.bookData.title)
    })

    it('verified if book authors is rendered', () => {
        const wrapper = shallow(<ItemShelf {...props} />)

        expect(wrapper.find('.book-authors').text()).toBeDefined()
        expect(wrapper.find('.book-authors').text()).not.toBeNull()
        expect(wrapper.find('.book-authors').text()).toEqual(props.bookData.authors.join(' , '))
    })
})