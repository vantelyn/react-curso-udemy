import React from 'react';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
// import '@testing-library/jest-dom'; //Para autocompletado

describe('Pruebas de <CounterApp />', () => { 

    let wrapper;

    beforeEach( () =>{
        
        wrapper = shallow( <CounterApp /> );

    });

    test('Debe de mostrar <CounterApp /> correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const defaultValue = 100;
        const wrapper = shallow ( <CounterApp value={defaultValue} /> );

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`${defaultValue}`);

    });

    test('debe de incrementar con el botón +1', () => { 
         
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe de incrementar con el botón -1', () => { 
         
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe de reiniciar el valor por defecto al puslar btn reset', () => {

        const defaultValue = 100;
        const wrapper = shallow ( <CounterApp value={defaultValue} /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(`${defaultValue}`);
     })
 
});