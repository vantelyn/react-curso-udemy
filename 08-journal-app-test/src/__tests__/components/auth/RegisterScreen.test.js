import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import { mount } from "enzyme";
import { Provider } from "react-redux";
import '@testing-library/jest-dom';

import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initStore = {
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initStore);

describe('Pruebas en <RegisterScreen />', () => {

    beforeEach(() => {
        store = mockStore(initStore);
    });

    const actions = store.getActions();

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>
                <RegisterScreen />
            </MemoryRouter>
        </Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de hacer el dispatch correspondiente', () => {
        const emailInput = wrapper.find('input[name="email"]');
        const target = {
            name: 'email',
            value: ''
        }
        emailInput.simulate('change', { target })
        wrapper.find('form').simulate('submit');

        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        })
    });

    test('debe de mostrar la caja de alerta con el error', () => {
        const initStore = {
            ui: {
                loading: false,
                msgError: 'Email is not valid'
            }
        };
        const store = mockStore(initStore);

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect( wrapper.find('.auth__alert-error').text().trim() ).toBe( initStore.ui.msgError );
    });

});