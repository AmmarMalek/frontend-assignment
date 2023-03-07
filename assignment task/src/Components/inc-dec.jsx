import React,{useState} from 'react';

function incdec(props) {
    const[value, setvalue] = useState(0)
    return (
        <>
            <div className='container mt-5'>
                <h1>{value}</h1>
                <button className='btn btn-danger' onClick={()=>{setvalue(value-1)}}>Decrement</button>
                <button className='btn btn-danger ms-4' onClick={()=>{setvalue(value+1)}}>Increment</button>
                <button className='btn btn-danger ms-4' onClick={()=>{setvalue(0)}}>Reset</button>
            </div>    
        </>
    );
}

export default incdec;