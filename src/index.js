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
    console.log(breeds)
    let breedList
    for (breed in breeds){
      breedList = document.createElement("li")
      
      breedList.innerHTML = `<li id="${breed}">${breed}</li>`
      dogBreeds.appendChild(breedList)
//============================CHALLENGE 3=============================  
  
    }}).then(function(){
      let african = document.getElementById("african")
      console.log(african)
      african.addEventListener('click', function(){
        african.style.color = "blue";
      })
    })

})

// let african

function listFilter(e){
}

window.addEventListener('change', function(){
  let breedDropdown = document.querySelector('#breed-dropdown')
  breedList = document.querySelector("#dog-breeds")
  let filterLetter
  console.log(breeds)
  switch (breedDropdown.value){
    case 'a':
      breedList.innerHTML = ""
      for ()
      break;
    case 'b':
      console.log('b');
      break;
    case 'c':
      console.log('c');
      break;
    case 'd':
      console.log('d');
      break;
  }
})