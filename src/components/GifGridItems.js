import React,{useEffect} from 'react'

function GifGridItems({id,title,url}) {
  
    return (
    <div className='Card animate__animated animate__fadeIn animate__delay-1s'>

        <img src={url} alt={title}></img>
        <p>{title}</p>

    </div>
  )
}

export default GifGridItems