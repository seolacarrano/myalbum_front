//const $ul = $("ul");
//const $button = $("#createbutton");
const $images = $(".images")
const $newnote = $(".newnote")
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

//get notes from api and populate selector input
const getNote = async () => {
  const response = await fetch ('http://localhost:3000/note')
  const data = await response.json()

  //populate DOM with notes
  data.forEach((note) => {
    const $ul = $("<ul>").text(`${note.title}''${note.note}`)
    $newnote.append($ul)
  })
}

//add a new image
const addImage = async (event) => {
  $images.innerHTML = ''
  imageData.forEach((image) => {
    if (!image.url) return

    $images.attr('src', image.url)
    //imageNode.addClass('image') for css

    //imageNode.on('click', () => { editModal(gif) }) for edit 

   // $images.appendChild(imageNode)
  })}

  $submit.on('click', (e) => {
    // submits the post request to create a new picture
    const newImage = {
        title : $('#imagetitle').val(),
          url : $('#url').val()
    }
  
    fetch('http://localhost:3000/image', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newImage)
      })
      .then(resp => resp.json())
      .then(resp => {
        addImage(resp)        
      })
      $images.empty()
      getImage()
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

getImage()
getNote()
//$submit.on('click', addImage)
