import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock(
    "react-router-dom",
    ()=> ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: ()=> mockNavigate
    })
);

describe('Pruebas en el componente <LoginScreen />', () => {

    const dispatch = jest.fn()

    const wrapper = mount(
        <AuthContext.Provider value={
            {
                dispatch
            }
        }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route
                        path="/login"
                        element={ <LoginScreen /> }
                    />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegación', () => {

        const payload= {
            name: 'Valentino Vespuci',
            email: 'var@gmail.com'
        };
        const click = wrapper.find( 'button' ).prop( 'onClick' );

        click();

        expect( dispatch ).toHaveBeenCalledWith( { payload, type: types.login } );
        expect( mockNavigate ).toHaveBeenCalledWith(
            "/marvel",
            { replace: true }
        );

        localStorage.setItem( 'lastPath', '/dc' );

        click();

        expect( mockNavigate ).toHaveBeenCalledWith(
            "/dc",
            { replace: true }
        );

    });

});