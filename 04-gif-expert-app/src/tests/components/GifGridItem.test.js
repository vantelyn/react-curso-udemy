import React from "react";
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => { 

    const img = {
        id:'l3vRlt8kty8KKeHni',
        title:'one punch GIF by Adult Swim',
        url:'https://media1.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=5bcd87eezgvx8hg8k0cllljly13foyb81et5rgk4qnz86jex&rid=giphy.gif&ct=g',
    };

    const wrapper = shallow ( <GifGridItem { ...img } /> );

	test('Debe de mostrar el componente correctamente', () => { 
		
		expect( wrapper ).toMatchSnapshot();
								
	});

    test('debe de tener un párrafo con el title', () => { 

        const parrafo = wrapper.find('p').text().trim();
        expect(parrafo).toBe(img.title);

    });

    test('debe mostrar la imagen correspondiente', () => { 

        // const src = wrapper.find('img').prop('src');
        // const alt = wrapper.find('img').prop('alt');
        // const props = wrapper.find('img').props();
        const imgTest = wrapper.find('img');

        // expect(props.src).toBe(img.url);
        // expect(props.alt).toBe(img.title);
        
        expect( imgTest.prop('src') ).toBe(img.url);
        expect( imgTest.prop('alt') ).toBe(img.title);

    });

    test('debe de tener animate__fadeIn', () => { 

        const div = wrapper.find('div');
        const className = div.prop( 'className' );

        // expect( className ).toContain( 'animate__fadeIn' );
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
    })

}); 