import GifExpertApp from "../GifExpertApp";
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en <GifExpertApp />', () => { 

    test('debe renderizar el componente adecuadamente', () => { 
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorías', () => { 
        const categories = [ 'One Punch','Gay' ];
        const wrapper = shallow(<GifExpertApp  defaultCats={ categories } />);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
    })

});