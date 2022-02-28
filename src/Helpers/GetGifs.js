


export const getGif = async(category) => {
    const Url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=I0goWslK39mDyMFf85sfHGMf5fnhiI4H`;
    const resp = await fetch(Url);
    const { data } = await resp.json();
    console.log(encodeURI(category))

    const gifs = data.map(gif => {

        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        }
    })


    return gifs;
}