// import {heores} from './data/heroes';
// import {heroes, owners} from './data/heroes';
import heroes, {owners} from '../data/heroes';



const getHeroeById = (id) =>{
    return heroes.find((heroe)=>{
        if (heroe.id === id){
            return true;
        }
        else{
            return false;
        }
    });
}

const getHeroeById2 = (id) =>{
    return heroes.find(heroe=>heroe.id=== id);
}

const getHeroeById3 = (id) => heroes.find(heroe=>heroe.id=== id);


// console.log(getHeroeById(1));
// console.log(getHeroeById2(2));
// console.log(getHeroeById3(3));


const getHeroeByOwner = (owner) => heroes.filter(heroe=>heroe.owner === owner);

// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner,
};