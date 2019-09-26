console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener("load", function(){
  let imgs
  let imgsContainer = document.getElementById("dog-image-container");
  fetch(imgUrl).then(function(response) {
    return response.json()
  }).then( function (data) {
    imgs = data.message
    imgs.forEach(function(img){
      let imgElement = document.createElement("img")
      imgElement.src = img
      imgsContainer.appendChild(imgElement)
    })
  })
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
window.addEventListener('load', function(){
  let breeds
  let dogBreeds= document.getElementById("dog-breeds")
  fetch(breedUrl).then(function(response){
    return response.json()
  }).then(function(data){
    breeds = data.message
    console.log(breeds)
    let breedList
    for (breed in breeds){
    breedList = document.createElement("li")
    
    breedList.innerHTML = `<li id="${breed}">${breed}</li>`
    dogBreeds.appendChild(breedList)
//============================CHALLENGE 3=============================  
  
    }}).then(function(e){
      african = document.getElementById("african")
      console.log(african)
      african.addEventListener('click', function(){
        african.style.color = "blue";
      })
    })

})

let african