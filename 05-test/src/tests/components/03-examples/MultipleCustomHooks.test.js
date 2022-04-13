import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '@vantelyn/custom-hooks';
// import { useCounter } from '../../../hooks/useCounter';
// import { useFetch } from '../../../hooks/useFetch';

// jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');
jest.mock('@vantelyn/custom-hooks');

describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe mostrar la información', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: 'Putaaaaa',
                quote: 'hola mundo'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('hola mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Putaaaaa');

    });
  

})


