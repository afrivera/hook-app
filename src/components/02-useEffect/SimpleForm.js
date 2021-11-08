import React, { useEffect, useState } from 'react';

import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email } = formState;

    useEffect(() =>{
        // console.log('Hey');
    },[] );
    useEffect(() =>{
        // console.log('formState cambio');
    },[formState] );
    useEffect(() =>{
        // console.log('correo cambio');
    },[email] );

    const hadleInputchange = ({target}) =>{
        // console.log(target);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>   
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={hadleInputchange}
                />

            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tu correo"
                    autoComplete="off"
                    value={email}
                    onChange={hadleInputchange}
                />

            </div>
            {/* si existe se muestra */}
            { (name === '123') && <Message />}

        </>
    )
}
