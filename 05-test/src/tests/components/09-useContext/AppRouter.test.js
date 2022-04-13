import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en el componente <AppRouter />', () => { 

    test('debe mostrar el componente correctamente', () => { 

        const wrapper = mount(
            <UserContext.Provider value={{
                user: {
                    name: 'Pimpollo',
                    email: 'notengo@gmail.com'
                }
            }}>
                <AppRouter />
            </UserContext.Provider>
            );
        expect( wrapper ).toMatchSnapshot();

    });

});