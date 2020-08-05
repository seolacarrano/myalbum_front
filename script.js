//hamburger icon https://www.youtube.com/watch?v=1GeSOP7kHuw
const $hamburger = $('.hamburger');
const $links = $('.link');
let show = false;
  
const showMenu = (event) => {
 if (show){
 $links.each(function(index){
  $(this).css('display','none')
  })
  show = false
  }else{
   $links.each(function(index){
   $(this).css('display','block')
   })
  show = true
  }
}
$hamburger.on('click', showMenu)

const deployedURL = null;
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//const $ul = $("ul");
//const $button = $("#createbutton");
const $images = $(".images")
const $newnote = $(".newnote")
const $allnotes = $(".allnotes")
const $submit = $('#submit')
const $save = $('#save')
const editSubmit = $('#submit-edit')

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
      //delete
    $images.append($("<button>").addClass("deletebutton").text("delete").attr("id", image._id).on("click", deleteImage))
    })
};

//get notes from api and populate selector input
const getNote = async () => {
  const response = await fetch ('http://localhost:3000/note')
  const data = await response.json()
  console.log(data);

  //populate DOM with notes
  data.forEach((note) => {
    //console.log(note)
    const $notecontainer = $("<div>")
    const $title = $("<div>").text(`${note.title}`)
    const $note = $("<div>").text(`${note.note}`)
    $notecontainer.append($title, $note)
    if (note.image[0]) {
      const $image = $("<img>").attr("src", `${note.image[0].url}`) 
      $notecontainer.append($image)
    } 
    
  //update
  $notecontainer.append($("<button>").addClass("editnote").text("edit").attr("id", note._id).on("click",editModal))
  $allnotes.append($notecontainer)

    //delete
    $notecontainer.append($("<button>").text("delete").attr("id", note._id).on("click", deleteNote))
    $allnotes.append($notecontainer)
  })

}

//add a new image
/*const addImage = async (event) => {
  $images.innerHTML = ''
  imageData.forEach((image) => {
    if (!image.url) return

    $images.attr('src', image.url)
  })}*/

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
      //.then(resp => {addImage(resp)})
      $newnote.empty()
      getImage()
    
  })

  //add a new note
    $save.on('click', (e) => {
      // submits the post request to create a new picture
      const newNote = {
          title : $('#title').val(),
          note : $('#note').val(),
          //image : $('#savedimage'),
      }
      
      fetch('http://localhost:3000/note', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newNote)
        })
        .then(resp => resp.json())
        
        $allnotes.empty()
        getNote()
    })
 

//delete a note
const deleteNote = async (event) => {
  const response = await fetch(`${URL}/note/${event.target.id}`, {
  method: "delete"
})

//update the dom
$allnotes.empty()
getNote()
}

//delete an image
const deleteImage = async (event) => {
  const response = await fetch(`${URL}/image/${event.target.id}`, {
  method: "delete"
})
$newnote.empty()
getImage()
}

/*
//update an note
const updateNote = async (event) => {
   const $title = 
}*/


//modal update
let currentlyEditing = ''

function editModal (note) {
  // Sets the edit modal to have the data from the gif clicked on
  $('.editnote').modal('open')
  const nameEdit = $('#name-edit')
  const urlEdit = $('#url-edit')

  nameEdit.val(gif.name)
  urlEdit.val(gif.url)

  currentlyEditing = note._id
}
editSubmit.on('click', (e) => {
  // submits the put request to edit a gif
  const name = $('#name-edit').val()
  const url = $('#url-edit').val()

  fetch(`http://localhost:3000/note/${currentlyEditing}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, url })
    })
    .then(resp => resp.json())
    .then(resp => {
      getNote(resp)
      $('#modal-edit').modal('close')
    })
  })


getImage()
getNote()

