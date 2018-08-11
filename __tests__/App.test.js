import React from 'react'
import { shallow } from 'enzyme'

//Components
import App from '../src/App'

//Tests
describe('<App />', _ => {
    xit('should render', _ => {
        const wrapper = shallow(<App />)
        expect(wrapper)
    })
})