import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done:false
// }];

const init = () => {
    return JSON.parse (localStorage.getItem('todos')) ||[];    
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done:false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    
    // console.log(description);
    useEffect( () =>{
        //guardar en local storage
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleDelete = (todoId) =>{
        // console.log(todoId);

        //crear la acción
        const action = {type: 'delete', payload: todoId};
        //dispatch
        dispatch(action);

    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
        

        

        // const action = {
        //     type:'add',
        //     payload: newTodo
        // }
        // //para mandar la accion
        // dispatch(action);
        // reset();    
    // }

    const handleToggle = (todoId) => {

        dispatch({
            type:'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload: newTodo
        })        

    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    {/* TODO: TodoList, todos , funciones */}
                    <TodoList 
                        todos ={todos}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                            
                </div>
            </div>



        </div>
    )
}
