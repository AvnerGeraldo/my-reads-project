import React from 'react'
import { mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

//Component
import SearchPage from '../../SearchPage/SearchPage'

const props = {    
    bookDataOnShelf: [],
    searchBookOnApi: jest.fn(),
    changeBookShelfHandler: jest.fn()
}

const options = new ReactRouterEnzymeContext()

describe('[Functions] SearchPage', () => {
    it('calls \'searchBookOnApi\' correctly', () => {
        const wrapper = mount(<SearchPage {...props}/>, options.get())        
        const instance = wrapper.instance()
        
        //Value to search
        const valueToSearch = 'test'
        instance.searchInApi(valueToSearch)

        expect(instance.props.searchBookOnApi(valueToSearch)).toBeenCalled()
    })
})