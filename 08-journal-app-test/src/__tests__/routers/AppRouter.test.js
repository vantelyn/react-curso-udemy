import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import '@testing-library/jest-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';

import { firebase } from "../../firebase/firebase-config";

jest.mock('../../actions/auth',
    () => ({
        login: jest.fn()
    })
)

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initStore = {
    auth:{},
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        notes:[],
        active: null
    }
};

let store = mockStore(initStore);
store.dispatch = jest.fn();





describe('Pruebas en <AppRouter />', () => {
    beforeEach(() => {
        store = mockStore(initStore);
        jest.clearAllMocks();
    })
    
    test('debe de llamar el login si estoy autenticado ', async () => {
        store.dispatch=jest.fn();
        await act( async ()=>{

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', 'test1234');
            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        })
        expect( login ).toHaveBeenLastCalledWith(
            expect.any(String), null
        );
    });

});