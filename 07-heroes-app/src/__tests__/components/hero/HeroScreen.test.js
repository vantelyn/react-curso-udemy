import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock(
    "react-router-dom",
    ()=>({
        ...jest.requireActual("react-router-dom"),
        useNavigate: ()=> mockNavigate
    })
);


describe('Pruebas en el componente <HeroScreen />', () => {
    test('no debe de mostrar el HeroScreen si no hay un héro en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <Routes>
                    <Route path="/hero" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find('h1').text().trim() ).toBe( 'No Hero Page' );
    });

    test('debe de mostrar un héroe si el parámetro existe y se encuentra', () => {
        const heroId = 'marvel-spider';
        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/hero/${heroId}`] }>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find( 'img' ).prop( 'src' ) ).toBe(`/assets/${heroId}.jpg`);
    });

    test('debe regresar a la pantalla anterior si el héroe no existe', () => {
        const heroId = 'marvel-spider';
        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/hero/${heroId}`] }>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
        );
        const click = wrapper.find( 'button' ).prop( 'onClick' );
        click();
        expect( mockNavigate ).toHaveBeenCalledWith( -1 );
    });

    test('debe de mostrar el No Hero Page si el héro no se encuentra', () => {
        const heroId = 'heroe-que-no-existe';
        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/hero/${heroId}`] }>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />                    
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );        
        expect( wrapper.text().trim() ).toBe( 'No Hero Page' );        
    });
});