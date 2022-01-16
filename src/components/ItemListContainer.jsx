import React from 'react'

export const ItemListContainer = ( { greetings } ) => {
// console.log(props) == console.log( { greetings }) es la callback con destructuring
    return (
        <div>
            <h1>ITEMLIST</h1>
            <p>{ greetings } </p>
                              
        </div>     
    )
}
