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

describe('[Component ItemShelf]', () => {
    //UX
    it('calls \'changeBookShelf\' when change value on select', () => {
        const wrapper = shallow(<ItemShelf {...props} />)

        wrapper
            .find('.book-shelf-changer > select')
            .simulate('change', { target: { value: 'read'} } )
        
        expect(props.changeBookShelf).toBeCalled()
    })
    
})