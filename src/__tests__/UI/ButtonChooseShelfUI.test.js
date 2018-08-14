import React from 'react'
import { shallow, mount } from 'enzyme'

//Component
import ButtonChooseShelf from '../../ButtonChooseShelf/ButtonChooseShelf'
import { wrap } from 'module';

///UI
describe('[Component] ButtonChooseShelfUi', () => {
    it('render a button is correctly', () => {
        const props = {
            bookshelf: 'All',
            active: true,
            changeShelf: () => jest.fn()
        }     

        const wrapper = shallow(<ButtonChooseShelf {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })

    it('render a fontAwesome into button on time', () => {
        const props = {
            bookshelf: 'All',
            active: true,
            changeShelf: jest.fn()
        }     

        const wrapper = shallow(<ButtonChooseShelf {...props}/>)
        expect(wrapper.find('a > svg')).toHaveLength(0)
    })

    it('title of a button is showed', () => {
        const props = {
            bookshelf: 'All',
            active: true,
            changeShelf: jest.fn()
        }     

        const wrapper = shallow(<ButtonChooseShelf {...props}/>)
        expect(wrapper.find('.title-shelf').text()).toBe(props.bookshelf)
    })
})