import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => { 

    test('getUser debe retornar un objeto', () => { 
        
        // 1. Arrange
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        // 2. Act
        const user = getUser();
        
        // 3. Asert
        // expect( user ).toBe( userTest );  //toBe no se debe de usar en objetos
        expect( user ).toEqual( userTest );

     })

    //  getUsuarioActivo debe de retornar un objeto
    
    test('getUsuarioActivo debe de retornar un objeto', () => { 
        const nombre = 'Juan';
        const userTest = {
            uid: 'ABC567',
            username: nombre,
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);  
     })

})