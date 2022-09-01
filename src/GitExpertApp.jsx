import { useState} from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( nuevaCategoria ) => {

        if (categories.includes(nuevaCategoria)) return;

        setCategories([ ...categories, nuevaCategoria ])
    }

    return (
      <>
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory={ onAddCategory } />
        <button name="btnAgregarCategoria" onClick={ onAddCategory }>Agregar</button>
            { 
                categories.map( category  => (
                    <GifGrid 
                        key={ category }
                        category = { category }
                    />
                ))
            }
      </>
    )
  }
  