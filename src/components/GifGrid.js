import React from 'react'
import { useEffectGifs } from '../hooks/useFetchGif'
import GifGridItems from './GifGridItems';

function GifGrid({ category }) {

  const {data:images,loading} = useEffectGifs(category);

  console.log(loading)

  return (

    <>
      <h3>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>Cargando...</p> }

      <div className="card-grid">


        {
          images.map(img => (
            <GifGridItems
              key={img.id}
              {...img}
            />

          ))
        }

      </div>

      

    </>
  )
}

export default GifGrid