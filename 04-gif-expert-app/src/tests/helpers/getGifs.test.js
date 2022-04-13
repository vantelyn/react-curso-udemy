import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en el componente getGifs', () => {

    test('Debe devolver 10 elementos', async() => {

        const category = 'One PUnch';
        const gifs = await getGifs(category);        
        
        expect(gifs.length).toBe( 10 );

    });

})