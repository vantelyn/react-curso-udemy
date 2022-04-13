import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Héroes', () => { 
    
    test('debe de retornar un héroe por ID', () => { 
        

        const id = 1;

        const heroe = getHeroeById( id );
        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual( heroeData );

     })

    test('debe de retornar undefined si el héroe no existe', () => { 
        

        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    })

    test('debe de retornar un arreglo con los héroes de DC', () => { 
        
        const ownerTest = 'DC';

        const heroes = getHeroesByOwner( ownerTest );
        const heroesData = heroes.filter(h => h.owner === ownerTest);

        expect( heroes ).toEqual( heroesData );

    })

    test('debe de retornar un arreglo con los héroes de Marvel', () => { 
        
        const ownerTest = 'Marvel';

        const heroes = getHeroesByOwner( ownerTest );
        
        // expect( heroes ).toHaveLength( 2 );
        expect( heroes.length ).toBe( 2 );

    })

    //  debe de retornar un arreglo con los héroes de DC
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // length = 2


 })