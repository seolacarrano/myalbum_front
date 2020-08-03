/*const getImages = async () => {
    const response = await fetch('http://localhost:3000/image')
    const images = await response.json()
    console.log(images)
}

const showPizzas = 
getImages()

//set url so it uses deployed api 
const deployedURL = "https://seolasecondproject.herokuapp.com"
const URL = deployedURL ? deployedURL : "http://localhost:3000"*/

//variable
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

// Stores which item to edit/delete when the edit modal is up
let currentlyEditing = ''

function addPictures (gifData) {
    // Adds all of the gifs to the dom
    gifs.innerHTML = ''
    gifData.forEach(image => {
      if (!image.url) return
  
      const imageNode = document.createElement('img')
      imageNode.setAttribute('src', image.url)
      imageNode.classList.add('image')
  
      imageNode.addEventListener('click', () => { editModal(image) })
  
      gifs.appendChild(imageNode)
    })
  }

  fetch('localhost:3000/image')
  .then(resp=> resp.json())
  .then(reesp=> {addPictures(res)})

  $('.modal').modal()









/*
//global variables
const $nameInput = $("#createinput");
const $imageSelect = $("#createselect");
const $button = $("#createbutton");
const $nameEditInput = $("#editinput");
const $imageEditSelect = $("#editselect");
const $editButton = $("#editbutton");
const $ul = $("ul");

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


//GET ALL images
const getImages = async () => {
    //gets the rats
    const response = await fetch(`${URL}/image`);
    const data = await response.json();
    console.log(data);
  
    //populate DOM with rats
    data.forEach((image) => {
      //create the li
      const $li = $("<li>").text(`${image.title}`
      );
      //add a delete button for each rat
      $li.append($("<button>").text("delete").attr("id", image._id).on("click", deleteImage))
      $ul.append($li);
    });
  };

//CREATE A RAT
const createRat = async (event) => {
    //Create to New Rat from Form Data
    const newRat = {
      name: $nameInput.val(),
      pizza: $pizzaSelect.val(),
    };
  
    //Send request to api to create rat
    const response = await fetch(`${URL}/rat`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRat),
    })
    const data = response.json();
  
    //update the DOM
    $ul.empty()
    getRats()
  };
  
  //Delete a Rat
  const deleteRat = async (event) => {
    //make request to delete rat
    const response = await fetch(`${URL}/rat/${event.target.id}`, {
      method: "delete"
    })
  
    //update the dom
    $ul.empty()
    getRats()
  }
  ////////////////////////////////
  // Main Application Logic
  ////////////////////////////////
  // Start executing below
  
  //Get the pizza for selector
  //getImage();
  //initially get existing rats*/

  