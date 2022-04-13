// action = {
//     type: 'add',
//     payload: {
//         id: new Date().getTime(),
//         desc: 'Descripción del todo...',
//         done: false
//     }
// };

// action = {
//     type: 'delete',
//     payload: 123456789      //ide del ToDo a eliminar
// };

// action = {
//     type: 'toggle',
//     payload: 123456789      //ide del ToDo a cambiar
// };

export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {

        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); // 123123123

        case 'toggle': 
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'toggle-old':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:
            return state;
    }


}