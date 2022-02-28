import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

  const [categories, setCategories] = useState(['Rick and Morty']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} categories={categories}/>


      <ol>
        {
          categories.map((category, i) => (
            <GifGrid 
              category={category} 
              key={category}
              
              />
          ))
        }
      </ol>

    </div>
  )
}

export default GifExpertApp