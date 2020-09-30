
const usersList = document.querySelector("div#users_list")

const imagesContainer = document.querySelector("div.list-container")
const imageCard = document.querySelector(".image.card")

const userWhosImagesYoureViewing = document.querySelector("div#username")
const bio = document.querySelector("div#bio")


fetch("http://localhost:3000/images")
.then(res => res.json())
.then(imageArrays => {
    imageArrays.forEach(array => {
        imageToHTML(array)
    })
})

let imageToHTML = (image) => {
    let imageCardDiv = document.createElement("div")
        imageCardDiv.classList.add("card")
    let imageImg = document.createElement("img")
        imageImg.src = image.url
        imageImg.alt = "image here"
        imageImg.classList.add("image-avatar")
    let imageDescription = document.createElement("p")
        imageDescription.innerText = image.description
    let shareButton = document.createElement("button")
        shareButton.classList.add("share-btn")
        shareButton.innerText = "repost"
    
}

// Helper methods turns each image instance to HTML element
// Share button helper method... click event listener
    // Fetch request, POST, for new Share instance
// Make default login user first user (Beemo)
    // User.id will just be Beemo's id
