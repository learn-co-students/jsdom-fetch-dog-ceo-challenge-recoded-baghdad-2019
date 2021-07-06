console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let breeds
window.addEventListener("load", function(){
  let photos
  let imgsContainer = document.getElementById("dog-image-container");
  fetch(imgUrl).then(function(response) {
    return response.json()
  }).then( function (data) {
    photos = data.message
    photos.forEach(function(img){
      let imgElement = document.createElement("img")
      imgElement.src = img
      imgsContainer.appendChild(imgElement)
    })
  })
})
