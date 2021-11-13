import { mount } from 'enzyme'
import React from 'react'
import { AppRouter } from '../../../components/09-useContext/AppRouter'
import { UsertContext } from '../../../components/09-useContext/UserContext'


describe('pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Andres'
    }
    
    const wrapper = mount(
        <UsertContext.Provider value = {{
            user
        }} >
            
            <AppRouter />

        </UsertContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
