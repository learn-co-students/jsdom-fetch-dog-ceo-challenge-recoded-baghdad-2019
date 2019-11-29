console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
    search()
})

function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => displayImages(json.message))
}
function displayImages(imagesArray) {
    imagesArray.map(imgLink => {
        let img = document.createElement('img')
        img.src = imgLink
        document.getElementById("dog-image-container").appendChild(img)
    })
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => displayBreeds(json.message))
}

function displayBreeds(breedsObject) {
    let ul = document.getElementById("dog-breeds");
    Object.keys(breedsObject).map(breed => {
        let li = document.createElement('li');
        li.innerText = breed
        li.onclick = function () {
            this.style.color = "#8b0000"
        }
        document.getElementById("dog-breeds").appendChild(li);
    })
}

function search() {
    let select = document.getElementById("breed-dropdown")
    select.onchange = function () {
        let selectedValue = select.value;
        console.log("selectedValue " + selectedValue)
        let ul = document.getElementById("dog-breeds")
        let li = ul.getElementsByTagName("li")
        
        for (let i = 0; i < li.length; i++) {
            if (selectedValue === li[i].innerText.charAt(0) && selectedValue||selectedValue == "none") {
                li[i].style.display = ""
            } else {
                li[i].style.display = "none"
            }

        }
    }
}