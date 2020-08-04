//set url so it uses deployed api 
//const deployedURL = "https://seolasecondproject.herokuapp.com"
//const URL = deployedURL ? deployedURL : "http://localhost:3000"

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
      
      $ul.append(imageNode)
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

    $ul.empty()
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










/*
//variable
const images = document.querySelector('.images')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')



function addPictures (imageData) {
    // Adds all of the gifs to the dom
    images.innerHTML = ''
    imageData.forEach(image => {
      if (!image.url) return
  
      const imageNode = $('<img>')
      imageNode.attr('src', image.url)
      imageNode.addClass('image')
  
      imageNode.on('click', () => { editModal(image) })
  
      gifs.append(imageNode)
    })
  }

  fetch('http://localhost:3000/image')
  .then(resp=> resp.json())
  .then(resp=> {addPictures(resp)})


  submit.addEventListener('click', (e) => {
    // submits the post request to create a new picture
    const name = $('#name').val()
    const url = $('#url').val()
  
    fetch('http://localhost:3000/image', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, url })
      })
      .then(resp => resp.json())
      .then(resp => {
        addPictures(resp)
        $('#modal-create').modal('close')
      })
  })
  

  //$('.modal').modal()
*/







