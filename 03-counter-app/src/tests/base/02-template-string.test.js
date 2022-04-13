import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => { 

    test('getSaludo debe retornar Hola Fernando!', () => { 

        //1. Arrange
        const nombre = 'Fernando';

        //2. Act
        const saludo = getSaludo( nombre );
        console.log(saludo);

        //3. Assert
        expect( saludo ).toBe( 'Hola ' + nombre +'!');

     })

     //getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre

     test('getSaludo debe retornar Hola Carlos!', () => {

        // 1. Arrange

        // 2. Act
        const saludo = getSaludo();

        // 3. Assert
        expect(saludo).toBe('Hola Carlos!');

     })

 })