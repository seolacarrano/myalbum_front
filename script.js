const $ul = $("ul");
const $button = $("#createbutton");
const $images = $(".images")
const $submit = $('#submit')

//get images from api and populate selector input
const getImage = async () => {
    const response = await fetch ('http://localhost:3000/image')
    const data = await response.json()

    //populate selector with retrieved data
    data.forEach((image) => {
      const imageNode = document.createElement('img')
      imageNode.setAttribute('src', image.url)
      //imageNode.classList.add('image')
      
      $images.append(imageNode)
    })
};


//add a new image
const addImage = async (imageData) => {
  //$images.empty()
  imageData.forEach((image) => {
    if (!image.url) return

    const imageNode = $('<img>')
    imageNode.attr('src', image.url)
    //imageNode.addClass('image') for css

    //imageNode.on('click', () => { editModal(gif) }) for edit 

    $images.append(imageNode)
  })
}

$submit.on('click', (e) => {
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
        addImage(resp)
        
      })
      $images.empty()
        getImage()
  })
  
    //Send request to api to create an image
    /*const response = await fetch(`http://localhost:3000/image`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createImage),
      })
      const data = response.json();
    
      //update the DOM
      $images.empty()
      getImage()
    };*/
 fetch('http://localhost:3000/image')
  .then(resp => resp.json())
  .then(resp => {
    // gets the initial data
    addImage(resp)
  })
    
  /*
//delete image
const deleteImage = async (event) => {
    const response = await fetch(`http://localhost:3000/gifs${event.target.id}`, {
        method: "delete"
      })
    
      //update the dom
      $ul.empty()
      getImage() 
}*/

//getImage()
//$button.on('click', addImage)
