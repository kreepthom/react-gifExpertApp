import PropTypes from 'prop-types';
import React, { useState } from 'react'


function AddCategory({ setCategories, categories }) {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handelSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories([ inputValue,...categories]);
            setInputValue('')
        }

    }

    return (
        <div>
            <form onSubmit={handelSubmit}>

                <input
                    type='text'
                    placeholder='searching what do you want'
                    value={inputValue}
                    onChange={handleOnChange}

                />

            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired

}

export default AddCategory