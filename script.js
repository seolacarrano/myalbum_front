//const $ul = $("ul");
//const $button = $("#createbutton");
const $images = $(".images")
const $allnotes = $(".allnotes")
const $submit = $('#submit')
const $save = $('#save')

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
    const $title = $("<ul>").text(`${note.title}`)
    const $note = $("<ul>").text(`${note.note}`)
    //const $image = $("<ul>").attr('src', note.image.url)
    const image = document.createElement('img')
    image.setAttribute('src', note.image.url)
    $allnotes.append($title, $note, image)
  })
}

//add a new image
const addImage = async (event) => {
  $images.innerHTML = ''
  imageData.forEach((image) => {
    if (!image.url) return

    $images.attr('src', image.url)
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

// add a new note 
const createNote = async (event) => {
  const newNote = {
    title: $titleInput.val(),
    note: $noteInput.val(),
    image: $images,
  }


const response = await fetch ('http://localhost:3000/note', {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newNote),
})
.then(resp => resp.json())
      .then(resp => {
    response(resp)        
      })

$allnotes.empty()
getNote
}
 
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
$save.on('click', createNote)
