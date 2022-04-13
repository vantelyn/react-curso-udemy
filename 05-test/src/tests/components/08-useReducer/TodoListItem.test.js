import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el componente <TodoListItem />', () => { 

    const handleDelete=jest.fn();
    const handleToggle=jest.fn();

    const wrapper = shallow(<TodoListItem 
        todo={demoTodos[0]}
        index={1}
        handleDelete = { handleDelete }
        handleToggle = { handleToggle } 
    />);

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('debe llamar la función borrar', () => { 

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);


    });

    test('debe llamar la función toggle', () => { 

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('debe mostrar el texto correctamente', () => { 

        const texto = wrapper.find('p').text();
        expect(texto).toBe(`2. ${demoTodos[0].desc}`);

    });

    test('debe mostrar el texto correctamente', () => { 

        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem 
            todo={todo}
            index={1}
            handleDelete = { handleDelete }
            handleToggle = { handleToggle } 
        />);

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    });
    
});