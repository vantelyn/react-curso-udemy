

export const fileUpload = async ( file ) => {

    const cloudName = 'ddiyblwur';
    const action = 'image/upload';
    const upload_preset = 'react-journal';
    const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${action}`;
    const formData = new FormData();

    formData.append('upload_preset', upload_preset);
    formData.append('file', file );

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}