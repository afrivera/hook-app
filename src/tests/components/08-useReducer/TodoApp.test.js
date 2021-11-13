import { act } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from '../../fixtures/demoTodos'


describe('pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);

    //confirmar si el localStorage fue llamado, hcer un mock de ls
    Storage.prototype.setItem = jest.fn()

    test('debe de llamarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de agregar un TODO', () => {

        const wrapper = mount( <TodoApp />);//mount se usa para probar toda la app en contexto
        act( () =>{

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
            
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        
    });

    test('debe de eliminar un Todo', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    })
    
    
    
    
})
