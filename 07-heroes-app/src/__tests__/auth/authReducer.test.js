import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    const initialState = { logged: false };
    const action = {};

    test('debe retornar el estado por defecto', () => {

        const testState = authReducer(initialState, action);
        expect(testState).toEqual(initialState);

    });

    test('debe de autenticar y colocar el "name" del usuario', () => {

        const loginAction = {
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        };

        const testState = authReducer( initialState, loginAction );

        expect( testState ).toEqual({
            logged: true,
            name: loginAction.payload.name
        });

    });

    test('debe borrar el name del usuario y cambiar el estado (logged) a false', () => {
        
        const logoutAction = {
            type: types.logout
        };

        const initialState = {
            logged: true,
            name: 'Paco'
        };

        const testState = authReducer ( initialState, logoutAction );

        expect( testState ).toEqual({
            logged: false
        });

    });

});