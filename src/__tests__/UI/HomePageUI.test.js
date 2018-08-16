import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

//Component
import HomePage from '../../HomePage/HomePage'
import { list } from '../../../node_modules/postcss';

const props = {
    bookData: [],
    changeBookShelfHandler: jest.fn()
}
const shelfCategoryList = ['Currently Reading', 'Want to Read', 'Read', 'All']
const options = new ReactRouterEnzymeContext();

describe('[Component] UI HomePage', () => {
    it('render correctly', () => {
        const wrapper = mount(<HomePage {...props}/>, options.get())
        expect(wrapper).toMatchSnapshot()
    })

    it('render the button choose shelf for every category of a shelf', () => {
        const wrapper = mount(<HomePage {...props}/>, options.get())
        const listRenderShelfs = []

        wrapper.find('.choose-bookshelf')
        .find('.row')
        .find('div.col-3').map(elemDiv => {
            listRenderShelfs.push(elemDiv.find('a').find('.title-shelf').text())
        })
        
        expect(shelfCategoryList).toEqual(expect.arrayContaining(listRenderShelfs))
    })

    it('verified if page link \'Add Book\' exists on HomePage', () => {
        const wrapper = mount(<HomePage {...props}/>, options.get())
        expect(wrapper.find('.open-search').find('a')).toHaveLength(1)
    })

    it('render shelf correctly', () => {
        const wrapper = mount(<HomePage {...props} />, options.get())
        expect(wrapper.find('.shelf-content')).toHaveLength(1)
    })
})