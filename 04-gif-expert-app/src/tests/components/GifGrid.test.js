import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    
    test('Debe mostrar el snapshot correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [
            {
            id: 'l3vRlt8kty8KKeHni',
            title: 'one punch GIF by Adult Swim',
            url: "https://media0.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=5bcd87eeumlqtq22jd83jf8g5hd086kdi3ko4yz07fxyzsqz&rid=giphy.gif&ct=g",
            },
            {
                id: 'l3vRlt8kty8KKeHhui',
                title: 'one punch GIF by Adult Swim',
                url: "https://media0.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=5bcd87eeumlqtq22jd83jf8g5hd086kdi3ko4yz07fxyzsqz&rid=giphy.gif&ct=g",
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });

});