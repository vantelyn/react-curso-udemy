const getImagenPromesa = () =>{
    return new Promise ((resolve, reject) =>{
        resolve('Hay data')
    })
}

const getImagenPromesa2 = () => new Promise (resolve => resolve('Hay data'))

const getImagenPromesa3 = async() =>{
    return 'Hay data';
}

getImagenPromesa().then(console.log);



const getImagenPromesa4 = async() =>{
    try{
        const apiKey = 'STD0YdVrZv1J0998gUZ3pKBsWEcKe4Q2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    }
    catch(error){
        // manejo del error
        console.error(error);
    }
    
}

getImagenPromesa4();