const deployedURL =  "https://seolasecondproject.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//global variables
const $images = $(".images")
const $newnote = $(".newnote")
const $allnotes = $(".allnotes")
const $submit = $('#submit')
const $save = $('#save')
const editSubmit = $('#submit-edit')
const $titleEditInput = $(".titleeditinput");
const $noteEditInput = $(".noteeditinput");
const $editButton = $(".editbutton");
const $addButton = $("<button>")
const $imageAddInput = $("#image");


//GET IMAGES from api and populate selector input
const getImage = async () => {
    const response = await fetch (`${URL}/image`)
    const data = await response.json()

    //populate selector with retrieved data
    data.forEach((image) => {
      const $imageNode = $("<img>").attr('src', image.url).addClass("singleimage")
      $images.append($imageNode)

      
    //get image src to add to a new note - related function below
    $images.append($("<button>").addClass("getimagesrc").text("add").attr("id", image._id).on("click", (event) => {
    $imageAddInput.val(image._id)
    $addButton.attr("id", image._id)
    }))
 
    //delete image
    const deleteImage = async (event) => {
    const response = await fetch(`${URL}/image/${event.target.id}`, {
    method: "delete"
    })

    $images.empty()
    getImage()
    }


    $images.append($("<button>").addClass("deletebutton").text("delete").attr("id", image._id).on("click", deleteImage))
    })
    
};

//GET NOTES from api and populate selector input
const getNote = async () => {
  console.log(URL)
  const response = await fetch (`${URL}/note`)
  const data = await response.json()
  console.log(data);

  //populate DOM with notes
  data.forEach((note) => {
    //console.log(note)
    const $notecontainer = $("<div>").addClass("notecontainer")
    const $title = $("<div>").text(`${note.title}`).addClass("notetitle")
    const $note = $("<div>").text(`${note.note}`).addClass("body")
    $notecontainer.append($title, $note)
    if (note.image) {
    const $image = $("<img>").attr("src", `${note.image.url}`) 
    $notecontainer.append($image)}
   
   
    //UPDATE NOTE
    $notecontainer.append($("<button>").addClass("editnotebt").text("edit").on("click", (event) => {
      $titleEditInput.val(note.title)
      $noteEditInput.val(note.note)
      $editButton.attr("id", note._id)
    }))
    
    //DELETE NOTE
    const deleteNote = async (event) => {
    const response = await fetch(`${URL}/note/${event.target.id}`, {
      method: "delete"
    })
     //update the dom
    $allnotes.empty()
    getNote()}

    $notecontainer.append($("<button>").addClass("deletenotebt").text("delete").attr("id", note._id).on("click", deleteNote))
    $allnotes.append($notecontainer)
      
  })

}

//CREATE IMAGES
$submit.on('click', async (e) => {
 // submits the post request to create a new picture
 const newImage = {
 title : $('#imagetitle').val(),
 url : $('#url').val()
 }
  
const response = await fetch(`${URL}/image`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(newImage)
})
        
const data = await response.json()
$images.empty()
getImage()    
})


//CREATE NOTES
$save.on('click', async (e) => {
  // submits the post request to create a new picture
  const newNote = {
  title : $('#title').val(),
  note : $('#note').val(),
  image : $('#image.validate').val() || [],
  }
  
  const response = await fetch(`${URL}/note`, 
  {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(newNote)
  })

  const data = await response.json()        
  $allnotes.empty()
  getNote()
})

//UPDATE NOTE
const updateNote = async (event) => {
  //Logging the event object
  console.log(event)
  //Create Updated Note Object
  const updatedNote = {
    title: $titleEditInput.val(),
    note: $noteEditInput.val(),
    
  }
  //make put request
  const response = await fetch(`${URL}/note/${event.target.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedNote)
  })
  //update the dom
  $allnotes.empty();
  getNote();
}


//ADD IMAGE TO NEW NOTE
const addImageToNote = async (event) => {
  const addedImage = {
    title : $('#imagetitle').val(),
    url: $imageAddInput.val()
  }

  const response = await fetch(`${URL}/image/${event.target.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(addedImage)
  })
  //update the dom
  $allnotes.empty();
  getNote();
}


getImage()
getNote()
//add update function to edit submit button
$editButton.on("click", updateNote)
$addButton.on("click", addImageToNote)



//hamburger icon 
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