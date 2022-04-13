// import { render } from "@testing-library/react";
import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp />', () => { 
    
    // test('Debe de mostrar el mensaje "Hola, soy Germán"', () => { 
    //     const saludo = 'Hola. soy Germán';
    //     const { getByText } = render( <PrimeraApp saludo= { saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument(); 
    //  })


    test('debe de mostrar <PrimeraApp /> correctamente', () => { 

        const saludo = 'Hola, soy Germán';        

        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtítulo enviado por props', () => { 

        const saludo = 'Hola, soy Germán';
        const subtitulo = 'Me gustan las gominolas';

        const wrapper = shallow( <PrimeraApp saludo={ saludo } subtitulo={ subtitulo } /> );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);

     });

});