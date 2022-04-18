import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from "../../actions/notes";
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";

jest.mock("../../helpers/fileUpload", ()=>  ({
    fileUpload: jest.fn( () => {
        return Promise.resolve('https://url-de-prueba/file.jpg');
    })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initStore = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'BGSGjAx1XRn515SJVSn8',
            body: 'hola mundo',
            date: 1650113829034,
            title: 'serpientes'
        }
    }
};

let store = mockStore(initStore);

describe('Pruebas con las acciones de notes', () => {

    beforeEach(() => {
        store = mockStore(initStore);
    })

    test('debe de crear una nueva nota startNewNote', async () => {

        await store.dispatch(startNewNote());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;

        await db.doc(`TESTING/journal/notes/${docId}`).delete();

    });

    test('startLoadingNotes debe cargar las notas', async () => {
        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('startSaveNote debe de actualizar la nota', async () => {
        const note = {
            id: 'BGSGjAx1XRn515SJVSn8',
            date: 1650113829034,
            body: "hola mundo",
            title: "serpientes"
        };
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();

        expect(actions[0].type).toBe(types.notesUpdated);
        const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe("serpientes");

    });

    test('startUploading debe de actualizar el url del entry', async () => {

        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading(file));

        const docRef = await db.doc(`/TESTING/journal/notes/BGSGjAx1XRn515SJVSn8`).get();
        expect( docRef.data().url ).toBe( 'https://url-de-prueba/file.jpg' )
    });
});