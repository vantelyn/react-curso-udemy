import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from '../../../actions/notes';

// jest.mock('../../../actions/notes', () => ({
//     activeNote: jest.fn()
// }));

const initState = {};

const mockStore = createMockStore();
const store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    body: 'Mundo',
    id: 1,
    url: null,
    title: 'Hola',
    date: 0
}

const wraper = mount(
    <Provider store={store}>
        <JournalEntry
            {...note}
        />
    </Provider>
);

describe('Pruebas en <JournalEntry />', () => {
    test('debe de mostrarse correctamente ', () => {
        expect(wraper).toMatchSnapshot();
    });
    test('debe llamar a activeNote', () => {
        wraper.find('.journal__entry').simulate('click');
        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote(note.id, {...note})
        );
});
});