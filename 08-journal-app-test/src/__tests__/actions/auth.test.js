import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import '@testing-library/jest-dom';
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initStore = {};

let store = mockStore(initStore);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach(()=>{
        store = mockStore(initStore);
    })

    test('login y logout deben de crear la acción respectiva ', () => {

        const uid = "12345abcde";
        const displayName = "Paco";
        const testLogin = login( uid, displayName )
        const testLogout = logout();

        expect( testLogin.type ).toBe( types.login );
        expect( testLogout.type ).toBe( types.logout );

        expect( testLogin.payload ).toEqual({
            uid,
            displayName
        });
    });

    test('debe de realizar el startLogout', async() => {
        await store.dispatch( startLogout() );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });
        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        })
    });

    test('debe de iniciar el startLoginEmailPassword', async() => {
        await store.dispatch( startLoginEmailPassword('test@testing.com','test1234') );
        const actions = store.getActions();
        console.log(actions)

        expect( actions[1] ).toEqual({
            type: types.login,
            payload:{
                uid: expect.any(String),
                displayName: null
            }
        });
    });

    
    
})