import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from "../../hooks/useCounter";

import './layout.css';

export const Layout = () => {
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    const {quote} = !!data && data[0];
    // console.log(author, quote);

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        
        setBoxSize(pTag.current.getBoundingClientRect());

    },[quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />               
                
            <blockquote className="blockquote text-end">
                <p 
                    className="mb-1"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>               
            
            <button className="btn btn-primary"
                    onClick={increment}
            >
                Siguiente quote
            </button>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>


            
        </div>
    )
}
