import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => { 

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn()

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe agregar un toDo', () => { 

        const wrapper = mount(<TodoApp />);

        const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');
        
        act(()=>{
            handleAddTodo(demoTodos[0]);
            // handleAddTodo(demoTodos[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe(`TodoApp ( 1 )`);
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        // expect( localStorage.setItem ).toHaveBeenCalledWith({});
    });

    test('debe de eliminar un todo', () => { 

        const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');
        const handleDelete = wrapper.find('TodoList').prop('handleDelete');

        act(()=>{
            handleAddTodo(demoTodos[0]);
            handleDelete(demoTodos[0].id);
        });

        
        expect( wrapper.find('h1').text().trim() ).toBe(`TodoApp ( 0 )`);

    })



});