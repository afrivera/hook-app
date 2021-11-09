

export const todoReducer = (state=[], action) =>{

    switch (action.type) {
        case 'add':            
            return [...state, action.payload];

        case 'delete':    
            //filter retorna un arreglo de elementos que cumplan una condición        
            return state.filter( todo => todo.id !==action.payload);

        case 'toggle':
            return state.map(todo =>
                    (todo.id === action.payload)
                        ?{...todo, done: !todo.done}
                        : todo
                );

        case 'toggle-old':   
            return state.map( todo =>{//esta es la manera larga
                if(todo.id ===action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;//sino se retorna algo en el map retorna undefined
                }
            })
        
        default:
            return state;
    }
}