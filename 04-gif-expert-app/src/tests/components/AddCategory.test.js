import React from 'react';
import '@testing-library/jest-dom';

import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';



describe('Pruebas en el <AddCategory />', () => {

    const setCategories = jest.fn();
    const setInputValue = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe mostrar la imagen correspondiente', () => {


        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar adecuadamente los cambios en el input', () => {

        let input = wrapper.find( 'input' );
        
        const value = 'Hola Mundo';

        input.simulate('change', { 
            target: { 
                value: value,
            }, 
        });
        
        input = wrapper.find( 'input' );

        expect( input.prop( 'value' ) ).toBe( value );
        
    });

    test('NO debe de postear la información con submit', () => { 

        wrapper.find( 'form' ).simulate('submit', { 
            preventDefault: ()=>{},
        });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. Comprobar que setCategories se ha llamado al menos una vez
        // 4. El valor del input debe de estar vacío

        const value = 'Hola Mundo';

        wrapper.find( 'input' ).simulate( 'change', { 
            target:{
                value: value,
            },
        });

        wrapper.find( 'form' ).simulate( 'submit', {
            preventDefault: ()=>{},
        });     

        // expect( setInputValue ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect(  wrapper.find( 'input' ).prop( 'value' ) ).toBe('');

    });

});