import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";


describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrar el login sin no hay usuario autenticado', () => {
        
        const contextValue = {
            user:{
                logged: false
            }
        };
        
        const wrapper = mount( 
            <AuthContext.Provider value = { contextValue }>
                <AppRouter />
            </AuthContext.Provider>            
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );

    });

    test('debe mostrar el homepage (/marvel) cuando hay un usuario autenticado', () => {
        const contextValue = {
            user:{
                logged: true,
                name: 'María'
            }
        };

        const wrapper = mount( 
            <AuthContext.Provider value = { contextValue }>
                <AppRouter />
            </AuthContext.Provider>            
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.navbar' ).exists() ).toBe( true );


    });
});