const { shallow } = require("enzyme");
const { TodoList } = require("../../../components/08-useReducer/TodoList");
const { demoTodos } = require("../../fixtures/demoTodos");

describe('', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    test('debe mostrarse correctamente', () => { 

        const wrapper = shallow(
            <TodoList
                todos ={ demoTodos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe tener dos <TodoListItem />', () => { 

        const wrapper = shallow(
            <TodoList
                todos ={ demoTodos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        );

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        expect( typeof wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toBe('function');
        expect( typeof wrapper.find('TodoListItem').at(0).prop('handleToggle') ).toBe('function');

    });

});