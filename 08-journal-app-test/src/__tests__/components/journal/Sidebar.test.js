import React from 'react';
import { mount } from "enzyme";
import { Sidebar } from "../../../components/journal/Sidebar";
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/notes',
    ()=>({
        startNewNote: jest.fn()
    })
);
jest.mock('../../../actions/auth',
    ()=>({
        startLogout: jest.fn()
    })
);

const mockStore = createMockStore();

const initStore={
    // ui:{},
    auth:{
        uid:'12345',
        name: 'Paco'
    },
    notes:{
        notes:[]
    }
}

let store = mockStore( initStore );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = { store }>
        <Sidebar />
    </Provider>
);

describe('Pruebas en <Sidebar />', () => {
    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('debe de llamar el startLogout', () => {
        wrapper.find( 'button' ).prop('onClick')();
        expect( startLogout ).toHaveBeenCalled();
    });
    test('debe de llamar el startNewNote', () => {
        wrapper.find( '.journal__new-entry' ).prop('onClick')();
        expect( startNewNote ).toHaveBeenCalled();
    });
});