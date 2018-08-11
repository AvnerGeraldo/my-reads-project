import React from 'react'
import { shallow } from 'enzyme'

//Component
import ButtonChooseShelf from '../../src/ButtonChooseShelf/ButtonChooseShelf'

describe('[Component] ButtonChooseShelf UX', () => {
    //render a button if title exists on a list object book shelf
    //don't render a button if title not exists on a list object book shelf
    //verified if button shelf 'all' starts active
    //verified if button shelf diff 'all' starts unactive
    //calls 'changeShelf' when button clicked
    
    it('render a button if title exists on a list object book shelf', () => {
        const props = {
            bookshelf: 'all',
            active: true
        }

        const objBookShelt = [
            { title: 'Currently Reading', icon: faBookOpen },
            { title: 'Want to Read', icon: faBook },
            { title: 'Read', icon: faGlasses },
            { title: 'All', icon: faAtlas }
        ]

        const wrapper = shallow(<ButtonChooseShelf {...props}/>)
        
        expected(objBookShelt.find(item => item.title === wrapper.props().bookshelf))
    })
})