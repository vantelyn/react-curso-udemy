import Swal from 'sweetalert2'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signInWithPopup, 
    updateProfile 
} from 'firebase/auth';

import { auth, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        dispatch( startLoading() );
        signInWithEmailAndPassword( auth, email, password )
            .then( ( { user } ) => {
                dispatch( 
                    login( user.uid, user.displayName ) 
                );
                dispatch( finishLoading() );
            })
            .catch( e => {
                dispatch( finishLoading() );
                Swal.fire('Error', e.code, 'error');
            });        
    }
}

export const startEmailRegister = ( email, password, name ) => {
    return ( dispatch ) => {
        createUserWithEmailAndPassword( auth, email, password )
            .then( async ({ user }) => {
                await updateProfile(user, {displayName: name});
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                Swal.fire('Error', e.code, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        signInWithPopup( auth, googleAuthProvider )
            .then( ({ user }) => {
                console.log(user)
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await auth.signOut();
        dispatch( logout() );
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const logout = () => ({
    type: types.logout
})