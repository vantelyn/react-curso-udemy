import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const userColection = collection(db, `${uid}`, "journal/notes");

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(userColection, newNote);
        dispatch(addNewNote(doc.id, newNote));
        dispatch(activeNote(doc.id, newNote));
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const userDoc = doc(db, `${uid}/journal/notes/${note.id}`);

        if (!note.url) {
            delete note.url
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await updateDoc(userDoc, noteToFirestore);
        dispatch(refreshNote(note));
        Swal.fire('Saved', note.title, 'success')
    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const userDoc = doc(db, `${uid}/journal/notes/${id}`);
        await deleteDoc(userDoc);
        dispatch(deleteNote(id));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: [
        ...notes
    ]
})

export const refreshNote = (note) => ({
    type: types.noteUpdated,
    payload: {
        ...note
    }
})

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const cleanNotesOnLogout = () => ({
    type: types.notesLogoutCleaning
})
