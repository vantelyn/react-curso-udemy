import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock( 
    "react-router-dom",
    ()=>({
        ...jest.requireActual("react-router-dom"),
        Navigate: ()=><span>Saliendo</span>
    })
);

describe('Pruebas en el componente <PrivateRoute />', () => {
    
    test('debe mostrar el hijo si el usuario está autenticado y guardar la ruta en el localstorage', () => {
        Storage.prototype.setItem = jest.fn();
        const wrapper = mount(
            <AuthContext.Provider value={{ user: { logged: true } }}>
                <MemoryRouter initialEntries={['/test']}>
                    <PrivateRoute children={ <h1>Entró</h1> }/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Entró');
        expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", "/test" );
    });

    test('debe redireccionar al login si el usuario NO está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={{ user: { logged: false } }}>
                <MemoryRouter initialEntries={['/test']}>
                    <PrivateRoute children={ <h1>Entró</h1> }/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Saliendo');
    });
});