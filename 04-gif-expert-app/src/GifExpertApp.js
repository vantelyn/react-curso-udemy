import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ( { defaultCats = [] } )=>{

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCats );

    const handleReset = () => setCategories([]);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <button onClick={ handleReset }>Reset</button>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>

        </>
    );

}

export default GifExpertApp;