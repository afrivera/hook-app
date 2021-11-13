import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UsertContext } from '../../../components/09-useContext/UserContext';


describe('pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Andres',
        email: 'andres@gmail.com'
    }

    //el shallow solo evalua el componente principal o el primero
    const wrapper = mount(
        <UsertContext.Provider value={{
            user,

        }}>
            <HomeScreen />

        </UsertContext.Provider>
    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
