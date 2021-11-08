import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    const {x, y } = coords;

    useEffect(() => {

        const mouseMove = (e) =>{
            const coor = {x:e.x, y:e.y};
            setCoords(coor);
            // console.log(coor);
            // console.log(' :D ');
        }

        window.addEventListener('mousemove', mouseMove);
        // (e) =>{
            // const coor = {x:e.x, y:e.y}
            // console.log(coor);
            // console.log(':D');

        // })

        console.log('Componente montado');
        return () => {
            // console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y: {y}
            </p>
        </div>
    )
}
