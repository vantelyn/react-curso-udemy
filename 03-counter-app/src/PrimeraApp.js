//  FUNCTIONAL COMPONENTS (APPS BASADAS EN FUNCIONES QUE HACEN USO DE HOOKS PARA SIMPLIFICAR EL CÓDIGO)
import React from 'react';
// import { Fragment } from 'react';   
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo, subtitulo }) =>{

    // if(!saludo){
    //     throw new Error('El saludo es necesario');
    // }



    return (
        // <Fragment>            
        //     <h1> { saludo } </h1>
        //     <p> { subtitulo } </p>
        // </Fragment>
        <>            
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <h1>{ saludo }!!!</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired,
    // otra: PropTypes.number,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtítulo por defeco',
}

export default PrimeraApp;