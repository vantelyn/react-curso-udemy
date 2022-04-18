import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';

describe('Pruebas con el helper fileUpload', () => {

    cloudinary.config({
        cloud_name: 'ddiyblwur',
        api_key: '697463636934787',
        api_secret: '7EDa-Qm3aE_YKh7mfGIUOrjKtDc',
        secure: true
    });

    test('debe de cargar una imagen y devolver el URL ', async ( done ) => {

        const img = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await img.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // Borrar imagen por ID

        const segments = url.split('/');
        const imgId = segments [segments.length -1].replace('.png','');

        cloudinary.v2.api.delete_resources(imgId, {}, ()=>{
            done();
        });
    });

    test('debe de cargar una imagen y devolver el URL ', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});