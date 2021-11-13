import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        //los reducer siempre devuelven un estado
        const state = todoReducer(demoTodos, {})
        //esperamos que el state sea igual al demotodos
        expect(state).toEqual(demoTodos)
    });

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false        
        }
        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de borrar un TODO', () => {
        //action.payload = ID del todo
        // const delTodo = {
        //     id: 3
        // };
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action)
        // console.log(state);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
        
    })

    test('debe de hacer el Toggle del TODO', () => {
        //action.payload = ID del todo
        // const updateTodo = {
        //     id:2
        // }
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        // console.log(state);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1])
    })
    
    
    
})
