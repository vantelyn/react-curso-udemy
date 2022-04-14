import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock(
    "react-router-dom",
    ()=>({
        ...jest.requireActual("react-router-dom"),
        useNavigate: ()=> mockNavigate
    })
);


describe('Pruebas en <NavBar />', () => {
    
    const user = {
        logged: true,
        name: 'Paco'
    }

    const dispatch = jest.fn();
    
    const wrapper = mount(
        <AuthContext.Provider value={
            {
                user,
                dispatch
            }
        }>
            <MemoryRouter initialEntries={ ['/'] }>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'span' ).text().trim() ).toBe( user.name );

    });

    test('debe de llamar el logout, el navigate y el dispatch', () => {

        wrapper.find( 'button' ).simulate( 'click' );

        expect( dispatch ).toHaveBeenCalledWith({ type:types.logout });
        expect( mockNavigate ).toHaveBeenCalledWith( "./login", { replace:true } );
        
    });
    
});