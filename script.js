/*const getImages = async () => {
    const response = await fetch('http://localhost:3000/image')
    const images = await response.json()
    console.log(images)
}

const showPizzas = 
getImages()*/

//set url so it uses deployed api 
const deployedURL = "https://seolasecondproject.herokuapp.com"
const URL = deployedRUL ? deployedURL : "http://localhost:3000"

//global variables
const $nameInput = $("#createinput")

//get image from api and populate selector input
const getImage = async () => {
    const response = await fetch(`${URL}/image`);
    const data = await response.json();
    data.forEach((image) => {
        const $option = $("<option>").attr("value", image._id).text(image.title);
        $imageSelect.append($option);
        const $option2 = $("<option>").attr("value", image._id).text(image.title);
        $imageEditSelect.append($option2);
    })
}