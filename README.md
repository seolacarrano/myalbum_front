# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description
This is a note-taking app that a user can add, edit, and delete memo. This project is built using CSS, HTML and JavaScript jQuery and responsive to different devices such as mobile, tablet, and desktop. This project is connected to project2_back.

## User Stories 
- Users can create a new note
- Users can add pictures to their note 
- Users can edit their note
- Users can delete their note 

## Google Sheet
[Google Sheet](https://docs.google.com/spreadsheets/d/1PyCkPZeIBSzU58bRY3UI4p7iiJOjNmuEtmBo9yVgr8A/edit?usp=sharing) 

## Wireframes
- [Mobile](https://res.cloudinary.com/dqduwnrb1/image/upload/v1596301578/mobile_oh5wjq.png)
- [Tablet](https://res.cloudinary.com/dqduwnrb1/image/upload/v1596301578/tablet_srjzxq.png)
- [Desktop](https://res.cloudinary.com/dqduwnrb1/image/upload/v1596301578/desktop_rt0aet.png)


## Time/Priority Matrix 

[Frontend Matrix](https://docs.google.com/presentation/d/1MZxvIWCe_ydok3TORKdv5tulbhNnx0QdxQD70BjMKbI/edit?usp=sharing) 


#### MVP (examples)
- Create Frontend project (jQuery)
- Create function to request data and populate dom
- Create function to create new data
- Create function to delete data
- Create function to edit data
- Create function to update item
- Build UI incorporating functions 
- Make hanburger menu 
- Make it responsive to different screen sizes (mobile, tablet, and desktop)
- Deploy API and frontend application 

#### PostMVP 

- Make hover effect
- Change fonts 
- Documentation

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create function to request data and populate dom | H | 3hrs | 9hrs | 9hrs|
| Create function to create new data | H | 2hrs | 6hrs | 6hrs |
| Create function to delete data | H | 2hrs | 0.5hr | 0.5hr |
| Create function to edit data | M | 2hrs | 6hrs | 6hrs |
| Build UI incorporating functions  | H | 3hrs | 3hrs | 3hrs |
| Make hanburger menu  | M | 2hrs | 1.5hr | 1.5hr|
| Make it responsive to different screen sizes  | M | 1.5hrs | 0.5hr | 0.5hr|
| Deploy API and frontend application   | L | 3hrs | 2hrs | 2hrs|
| Total | H | 21.5hrs| 29hrs | 29hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make hover effect | L | 1hr | -hr | -hr|
| Documentation  | L | 3hrs | 1hr | 1hr|
| Total | H | 4.5hrs| 1hr | 1hr |

## Additional Libraries
 - [jQuery](https://jquery.com/)

## Code Snippet

This code adds an image to a new note div. I almost gave up on this part because I had no idea how to do it but I made it with help from other people!

```
//get image src 
      $images.append($("<button>").addClass("getimagesrc").text("add").attr("id", image._id).on("click", (event) => {
      $imageAddInput.val(image._id)
      $addButton.attr("id", image._id)
      }))
 
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

$addButton.on("click", addImageToNote)

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

```

## Issues and Resolutions
 **ERROR**: When I saved a new note, the added picture didn't show up.
 **RESOLUTION**: I was grabbing a wrong id, so I fixed the problem by using the right id.
```
 const newNote = {
          title : $('#title').val(),
          note : $('#note').val(),
		  image : $('#savedimage').val() //wrong id
          image : $('#image.validate').val() || [], //correct id
      }
```
## backend repo
 - [backend](https://github.com/seolacarrano/project2_back)
 
## Previous Project Worksheet
 - [portfolio project](https://github.com/seolacarrano/seola_firstproject/blob/master/README.md)
 


