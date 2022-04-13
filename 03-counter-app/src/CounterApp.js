// rafcp + tab PARA PLANTILLA FUNCTIONAL COMPONENT
import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) =>{

    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState(value);

    const handleAdd = ()=>{
        // setCounter(counter +1); //Puede definir un valor determinado
        setCounter((c)=>c+1); //Puede enviar el valor existente como argumento de una función y asignar el valor devuelto por esa función como nuevo valor
    };

    const handleSubstract = ()=> setCounter(counter -1);
    
    const handleReset = ()=> setCounter(value);

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* <button onClick={ function(){console.log(+1)} }>+1</button> */}
            {/* <button onClick={ (e)=>{console.log(e)} }>+1</button> */}
            {/* <button onClick={ (e)=>{handleAdd(e)} }>+1</button> */}
            {/* <button onClick={ handleAdd() }>+1</button> //CON () SE EJECUTA EN TIEMPO DE RENDERIZACIÓN  */}
            
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );

}

CounterApp.propTypes = {

    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value:10,
};

export default CounterApp;