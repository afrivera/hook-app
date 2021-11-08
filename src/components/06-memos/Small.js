import React, {memo}from 'react'

export const Small = memo(({value}) => {
    console.log('Me volvi a llamar :c');
    return (
        <small>{value}</small>
            )
})
//memo solo se dispara si las properties cambian tambien se llama React.memo

