console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let breeds

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
  let dogBreeds= document.getElementById("dog-breeds")
  fetch(breedUrl).then(function(response){
    return response.json()
  }).then(function(data){
    breeds = data.message
    let breedList
    for (breed in breeds){
      breedList = document.createElement("li")
      
      breedList.innerHTML = `<li id="${breed}">${breed}</li>`
      dogBreeds.appendChild(breedList)
//============================CHALLENGE 3=============================  
  
    }}).then(function(){
      let african = document.getElementById("african")
      african.addEventListener('click', function(){
        african.style.color = "blue";
      })
    })

})

// let african

function listFilter(e){
    breedList.innerHTML = ""
    for (breed in breeds){
      if (breed[0] == e){
      newElement = document.createElement('li')
      newElement.innerHTML = `<li id="${breed}">${breed}</li>`
      breedList.appendChild(newElement)
    }}
}

window.addEventListener('change', function(){
  let breedDropdown = document.querySelector('#breed-dropdown')
  breedList = document.querySelector("#dog-breeds")
  let filterLetter
  switch (breedDropdown.value){
    case 'a':
      listFilter(breedDropdown.value)
      break;
    case 'b':
      listFilter(breedDropdown.value)
      break;
    case 'c':
      listFilter(breedDropdown.value)
      break;
    case 'd':
      listFilter(breedDropdown.value)
      break;
  }
})