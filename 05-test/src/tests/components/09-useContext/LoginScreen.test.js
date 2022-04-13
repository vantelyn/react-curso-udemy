import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en el componente <LoginScreen />', () => { 

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe llamar el método setUser al hacer click en el botón', () => {
        const click = wrapper.find( 'button' ).prop( 'onClick' );
        click();
        
        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'Fernando'
        });
    });

});