import React from 'react';

function listview(props) {
    const data = [
        {
            name: 'Mary',
            age:25
        },
        {
            name: 'Alan',
            age:24
        },
        {
            name: 'John',
            age:29
        },
    ]
    return (
        <>
         {
            data.map((element)=>{
                return <div>
                {element.name} is {element.age} years old.
                </div>
            })
         }   
        </>
    );
}

export default listview;