import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Pruebas en <RealExampleRef />', () => { 

    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<RealExampleRef />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );

    });

    test('debe mostra el componente <MultipleCustomHooks />', () => { 

        const wrapper = shallow(<RealExampleRef />);
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();        
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );

    });


});