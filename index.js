
const usersList = document.querySelector("div#users_list")
const specificUserLi = document.querySelector("div.specific_user")

const imagesContainer = document.querySelector("div.images_container")
const imageCardPlaceHolder = document.querySelector(".image_card")

const userCardDiv = document.querySelector("div.user.card")
const userWhosImagesYoureViewing = document.querySelector("div#username")
const bio = document.querySelector("div#bio")
const profilePicHolder = document.querySelector("div#profile_pic_holder")

const userId = 1 // Only working with Beemo's account right now


fetch("http://localhost:3000/images")
.then(res => res.json())
.then(imageArrays => {
    imageCardPlaceHolder.innerText = "";
    imageArrays.forEach(array => {
        imageToHTML(array)
    })
})

let imageToHTML = (image) => {
    let imageCardLi = document.createElement("li")
        imageCardLi.classList.add("image_card")
    let imageImg = document.createElement("img")
        imageImg.src = image.url
        imageImg.alt = "image here"
        imageImg.classList.add("image-avatar")
    let imageDescription = document.createElement("p")
        imageDescription.innerText = image.description
    let repostButton = document.createElement("button")
        repostButton.classList.add("repost-btn")
        repostButton.innerText = "repost"
    
    imageCardLi.append(imageImg, imageDescription, repostButton)
    imagesContainer.append(imageCardLi)

    repostButton.addEventListener("click", (evt) => {

        fetch(`http://localhost:3000/reposts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                image_id: image.id
            })
        })
        .then(res => res.json())
        .then(console.log)
    })
}

fetch("http://localhost:3000/users")
.then(res => res.json())
.then(userArrays => {
    imageCardPlaceHolder.innerText = ""
    let firstUser = userArrays[0]
    userToHTML(firstUser)
})


let userToHTML = (user) => {
    // debugger
    userWhosImagesYoureViewing.innerText = `Username: ${user.username}`
    bio.innerText = `Bio: ${user.bio}`
    profilePicHolder.innerText = ""
    profilePic = document.createElement("img")
        profilePic.classList.add("profile_pic")
        profilePic.alt = `${user.username}'s Picture`
        profilePic.src = user.profile_pic_url
    
    profilePicHolder.append(profilePic)
}


fetch("http://localhost:3000/users")
.then(res => res.json())
.then(userArrays => {
    specificUserLi.innerText = ""
    userArrays.forEach(user => {
        userToLi(user)
    })
})

let userToLi = (user) => {
    let usersListLi = document.createElement("li")
        usersListLi.classList.add("usernameLi")
        usersListLi.innerText = user.username
    usersList.append(usersListLi)

    usersListLi.addEventListener("click", (evt) => {
        userToHTML(user)
    })
}

// Helper methods turns each image instance to HTML element
// Repost button helper method... click event listener
    // Fetch request, POST, for new Repost instance
// Make default login user first user (Beemo)
    // User.id will just be Beemo's id
