


const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];

const miFuncion = (state=initialState, action) =>{

    if( action?.type === 'agregar'){//se pone el signo de interrogación para saber si hay algún valor, sino no hace nada
        
        return [...state, action.payload]
    }

    return state;
}

let todos = miFuncion();

//en react no es aconsejable hacer un push
const newTodo = [{
    id: 2,
    todo: 'comprar leche',
    done: false
}];

const agregarTodoAction = {
    type:'agregar',//indica la acción a realizar
    payload : newTodo //es un estandar llamarlo payload
}

todos = miFuncion(todos, agregarTodoAction );

console.log(todos);