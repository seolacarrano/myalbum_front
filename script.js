const getImages = async () => {
    const response = await fetch('http://localhost:3000/image')
    const images = await response.json()
    console.log(images)
}

const showPizzas = 
getImages()