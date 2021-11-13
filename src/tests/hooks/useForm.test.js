import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {
    const initialForm = {
        name:'Andres',
        email:'andres@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        // console.log(result.current)
        const [values,handle, reset] = result.current
        // console.log(values);
        expect(values).toEqual(initialForm);
        expect(typeof handle).toBe('function');
        expect(typeof reset).toBe('function');

    });
    test('debe de cambiar el valor del formulario(cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [,handleInputChange,] = result.current
        // console.log(handleInputChange);
        // const target = {name:'Felipe', email:'andres@gmail.com'}
        act( () =>{
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Felipe'
                }});
        });
        const [ values] = result.current
        expect(values).toEqual({...initialForm, name:'Felipe'});



    });

    test('debe de reestablecer el formulario con RESET', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [, handle, reset] = result.current;

        act( () =>{
            handle({

                target:{
                    name:'name',
                    value: 'Felipe'
                }
            });
            reset()
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    
    
})
