import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

// const mockGoogleLogin = jest.fn();

jest.mock('../../../actions/auth',
 ()=>({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
 })
)

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initStore = {
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initStore);
store.dispatch = jest.fn();

describe('Pruebas en <LoginScreen.js />', () => {
    
    beforeEach(() => {
        store = mockStore(initStore);
        jest.clearAllMocks();
    })
    
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>
    );    

    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe disparar la acción de startGoogleLogin', () => {
        const googleLoginBtn = wrapper.find('.google-btn').prop('onClick');
        googleLoginBtn();

        expect( startGoogleLogin ).toHaveBeenCalled();
    });

    test('debe disparar el startLogin con los argumentos correspondientes', () => {
        wrapper.find('form').simulate('submit');

        expect( startLoginEmailPassword ).toHaveBeenCalledWith('nando@gmail.com', '123456');
    });
});