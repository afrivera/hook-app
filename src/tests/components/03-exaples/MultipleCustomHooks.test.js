import React from 'react';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');
//hace simulación del useFetch



describe('Pruebas en <MultipleCustomHooks />', () => {

    //como no se va a cambiar ningún valor se define desde aquí
    useCounter.mockReturnValue({
        counter: 10,
        increment: () =>{}
    });

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);
    
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author:'Andres',
                quote:'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper.find('.alert').exists()).toBe(false)//se busca una clase que no debería de existir
        expect(wrapper.find('.mb-1').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('Andres')
        
    });
    
    

})
