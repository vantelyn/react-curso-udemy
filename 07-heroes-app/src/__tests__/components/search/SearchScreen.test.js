import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", ()=>({
    ...jest.requireActual("react-router-dom"),
    useNavigate: ()=> mockNavigate
}));


describe('Pruebas en <SearchScreen />', () => {
    
    test('debe de mostrar el componente correctamente con los valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert-danger' ).text().trim() ).toBe('Ningún nombre introducido');
    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchScreen />
            </MemoryRouter>            
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe('batman');
        
    });

    test('debe de mostrar un mensaje infromativo si no se encuentran resultados para la búsqueda', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=abcd12345'] }>
                <SearchScreen />
            </MemoryRouter>            
        );

        expect( wrapper.find( '.alert-info' ).text().trim() ).toBe( 'Sin resultados' );

    });

    test('debe de llamar el navigate a la ruta especificada', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>            
        );
        
        const target = {
            name: 'searchText',
            value: 'batman'
        };

        wrapper.find( 'input' ).simulate( 'change', { target } );
        wrapper.find( 'form' ).simulate( 'submit' );

        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
    });

});