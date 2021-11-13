import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    //no se hace snap porque no tiene html
    test('debe de retornar los valores por defecto', () => {
        
        const {result} = renderHook( () => useCounter())
        // console.log(result.current);
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })
    
    test('debe de tener el counter en 100', () => {
       
        const {result} = renderHook( () => useCounter(100))
        // console.log(result.current);
        expect(result.current.counter).toBe(100);
    })

    test('debe de incrementar el counter en 1', () => {

        const {result} = renderHook( () => useCounter(100) );
        const {increment} = result.current;
        act(() =>{
            increment();
        })
        const {counter} = result.current;
        expect(counter).toBe(101);
    })
    test('debe de disminuir el counter en 1', () => {

        const {result} = renderHook( () => useCounter(100) );
        const {decrement} = result.current;
        act(() =>{
            decrement();
        })
        const {counter} = result.current;
        expect(counter).toBe(99);
    })
    test('debe de hacer reset el counter  100', () => {

        const {result} = renderHook( () => useCounter(100) );
        const {increment, reset} = result.current;
        act(() =>{
            increment();//no se puede hacer más de dos veces por ahora
            reset();
        })
        const {counter} = result.current;
        expect(counter).toBe(100);
    }) 
    
})
