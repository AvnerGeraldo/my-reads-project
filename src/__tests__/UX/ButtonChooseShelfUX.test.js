import React from 'react'
import { shallow } from 'enzyme'

//Component
import ButtonChooseShelf from '../../ButtonChooseShelf/ButtonChooseShelf'

describe('[Component] ButtonChooseShelf UX', () => {    
    it('render a button if title exists on a list object book shelf', () => {
        const props = {
            bookshelf: 'All',
            active: true,
            changeShelf: jest.fn()
        }        

        const wrapper = shallow(<ButtonChooseShelf {...props} />)
        
        expect(wrapper.find('a')).not.toHaveLength(1)
    })
    
    it('don\'t render a button if title not exists on a list object book shelf', () => {
        const props = {
            bookshelf: 'Another',
            active: false,
            changeShelf: jest.fn()
        }

        const wrapper = shallow(<ButtonChooseShelf {...props} />)
        expect(wrapper.find('a')).toHaveLength(0)
    })

    it('calls \'changeShelf\' when button clicked', () => {
        const changeShelf = jest.fn()
        const props = {
            bookshelf: 'All',
            active: false,
            changeShelf
        }

        const wrapper = shallow(<ButtonChooseShelf {...props} />)
        wrapper.simulate('click')

        expect(changeShelf).toHaveBeenCalledTimes(1)
    })
})