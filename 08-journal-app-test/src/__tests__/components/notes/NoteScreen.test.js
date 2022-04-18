import React from 'react';
import { mount } from "enzyme";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { activeNote } from '../../../actions/notes';
import thunk from 'redux-thunk';
import "@testing-library/jest-dom";
jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const initStore = {
    auth: {},
    ui: {},
    notes: {
        notes: [],
        active: {
            id: 1234,
            title: '',
            body: '',
            date: 0
        }
    }
};

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

let store = mockStore(initStore);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en <NoteScreen />', () => {

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de disparar el active note', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola Mundo'
            }
        });
        // console.log(wrapper.find('input[name="title"]').prop('value'))
        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: "",
                date: 0,
                id: 1234,
                title: "Hola Mundo"
            }
        );
    });
});