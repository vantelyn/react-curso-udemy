import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas componente todoReducer', () => {


    test('devuelve el estado inicial si no se le especifica acción', () => { 

        const state = todoReducer(demoTodos, {});
        expect(state).toBe(demoTodos);

    });

    
    test('debe agregar el toDo(action.payload) al initialState', () => {

        const action = {
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: 'Descripción del todo...',
                done: false
            }
        };

        const state = todoReducer(demoTodos, action);
        expect(state).toEqual([...demoTodos, action.payload]);
        expect(state.length).toBe(3);

    });

    test('debe eliminar el toDo por el numero id especificado', () => {

        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state[0].desc).toBe('Aprender Mongo');

    });

    
    test('debe cambiar el estado(toDo.done) del toDo', () => {

        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);

    });

});