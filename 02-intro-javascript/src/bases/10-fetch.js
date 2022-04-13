const apiKey = 'STD0YdVrZv1J0998gUZ3pKBsWEcKe4Q2';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp =>resp.json())
    // .then(console.log)
    .then(({data})=>{
        const {url} = data.images.original;
        // console.log(url);

        const img = document.createElement('img');
        img.src=url;

        document.body.append(img);
    })
    .catch(console.warn);