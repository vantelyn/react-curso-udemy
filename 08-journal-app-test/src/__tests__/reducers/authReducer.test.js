import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Pruebas con authReducer', () => {
    test('debe devolver el estado inicial', () => {
        const initialState = {
            1: 1
        }
        const action = {
            type: null
        }
        const testState = authReducer(initialState, action);

        expect(testState).toEqual(initialState);
    });

    test('debe devolver el estado de inicio de sesión', () => {
        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 12345,
                displayName: 'Paco'
            }
        }

        const testState = authReducer(initialState, action);

        expect(testState).toEqual({
            uid: action.payload.uid,
            name: action.payload.displayName
        });
    });

    test('debe devolver un objeto vacío', () => {
        const initialState = {
            uid: 12345,
            name: 'Paco'
        }

        const action = {
            type: types.logout
        }

        const testState = authReducer(initialState, action);

        expect(testState).toEqual({});
    });
});