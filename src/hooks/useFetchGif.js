import { useEffect, useState } from "react"
import { getGif } from "../Helpers/GetGifs";



export const useEffectGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true,
    });

    useEffect(() => {
        getGif(category)
            .then(imgs => {



                setState({
                    data: imgs,
                    loading: false,
                })


            })

    }, [category])

    return state
}