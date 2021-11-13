import { shallow } from 'enzyme'
import React from 'react'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd'


describe('pruebas con <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
    <TodoAdd 
        handleAddTodo= {handleAddTodo}
    />)

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('no debe de llamar handleAddTodo', () => {
        //no se debe disparar la función
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la función handleAddTodo', () => {

        //con un argumento
        const value = 'Aprender React'
        wrapper.find('input').simulate('change',{
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));//no es tan precisa ya que se puede solo o pasaria con {}
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),//se pone así para que el id solo sea un numero
            desc:value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('')

        
    });


        
    
})
