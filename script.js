const $ul = $("ul");
const $button = $("#createbutton");
const $images = $(".images")


//get images from api and populate selector input
const getImage = async () => {
    const response = await fetch ('http://localhost:3000/image')
    const data = await response.json()

    //populate selector with retrieved data
    data.forEach((image) => {
      const imageNode = document.createElement('img')
      imageNode.setAttribute('src', image.url)
      imageNode.classList.add('image')
      
      $images.append(imageNode)
    })
};


//create a new image
const createImage = async (event) => {
    //Create to New Image from Form Data
    const newImage = {
      name: $nameInput.val(),
      url: $urlInput.val(),
    };
  
    //Send request to api to create an image
    const response = await fetch(`${URL}/image`)
    .then(resp=> resp.json())
    .then(resp=> {addPictures(resp)})
    const data = response.json();

    $images.empty()
    getImage()

};
  
//delete image
const deleteImage = async (event) => {
    const response = await fetch(`http://localhost:3000/gifs${event.target.id}`, {
        method: "delete"
      })
    
      //update the dom
      $ul.empty()
      getImage() 
}

getImage()
$button.on('click', createImage)
