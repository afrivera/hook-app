import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UsertContext } from '../../../components/09-useContext/UserContext';


describe('pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UsertContext.Provider value={{
            setUser
        }}>
            <LoginScreen />

        </UsertContext.Provider>)
    
    test('debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id:123,
            name: 'Andres'
        })
    })
    


    
    
})
