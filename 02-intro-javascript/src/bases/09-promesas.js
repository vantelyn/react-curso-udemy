// PROMESAS
import {getHeroeById, getHeroeByOwner} from './08-imp-exp';

// const promesa = new Promise ((resolve, reject) =>{
//     setTimeout(()=>{
//         // Tarea
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000)
// }); 

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{

    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            // Tarea
            const heroe = getHeroeById(id);
            if(heroe)
                resolve(heroe);
            else
                reject('No se pudo encontrar el héroe');
        }, 2000)
    }); 

    // return promesa;
}

getHeroeByIdAsync(10)
    // .then(heroe =>console.log('Heroe', heroe))
    // .catch(err => console.warn(err));
    .then(console.log)
    .catch(console.warn);