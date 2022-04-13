import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
// import { useForm } from "../../../hooks/useForm";
// jest.mock("../../../hooks/useForm");

describe('Pruebas en <TodoAdd />', () => { 
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo = { handleAddTodo }
        />
    );        

    test('debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('NO debe de llamar handleAddTodo', () => { 

        const formSubmit = wrapper.find('form').prop('onSubmit');
        //     formSubmit({
        //         preventDefault: ()=>{}
        //     });
        formSubmit({preventDefault(){}});

        // expect( handleAddTodo ).not.toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });

    test('SI debe de llamar handleAddTodo', () => {

        const handleInputChange = wrapper.find('input').prop('onChange');
        const value = 'Hola mundo puto';
        
        // wrapper.find('input').simulate('change',{
        //     target: {
        //         name: 'description',
        //         value: 'Holaaaaa'
        //     }
        // })

        handleInputChange({
            target: {
                name: 'description',
                value
            }
        });


        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( wrapper.find( 'input' ).prop('value') ).toBe('');

    });

})