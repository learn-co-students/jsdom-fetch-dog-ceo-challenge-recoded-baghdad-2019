console.log('%c HI', 'color: firebrick')
    //CHALLENGE1

window.onload = function() {
    let imgContainer = document.getElementById('dog-image-container');
    let breedslist = document.getElementById('dog-breeds');

    function listBreeds(breeds) {
        breedslist.innerHTML = ""
        for (const breed of breeds) {
            let breedItem = document.createElement('li');
            breedItem.innerHTML = breed;
            breedslist.appendChild(breedItem);
        }
    }
    let listArr = document.querySelectorAll('#dog-breeds li');
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let imgArr = json.message;
            for (const element of imgArr) {
                let imgs = document.createElement('img');
                imgs.src = element;
                imgs.style.width = "150px"
                imgContainer.appendChild(imgs);
            }
        })
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {

            let breedArr = Object.keys(json.message);
            listBreeds(breedArr)
            let options = document.querySelector('#breed-dropdown');
            options.addEventListener("change", function(e) {
                let letter = options.value;
                let filteredList = breedArr.filter(b => b[0] === letter)
                console.log(filteredList);
                listBreeds(filteredList);

            })



            for (let i = 0; i < listArr.length; i++) {
                listArr[i].addEventListener('click', function() {
                    listArr[i].style.color = "blue";
                })
            }
        })
};



//CHALLENGE2