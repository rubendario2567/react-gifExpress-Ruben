import React from 'react'
import { useState } from 'react'

export const AddCategory = ( { onAddCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( newValue ) => {
        setInputValue(newValue);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length <= 2) return;
        
        onAddCategory( inputValue.trim() )
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder='Buscar gifs'
                value = { inputValue }
                onChange = { (event) => onInputChange( event.target.value ) }
            />
        </form>
    )
}
