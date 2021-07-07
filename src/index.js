console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            let data = json.message;
            for (let element of data) {
                let myImage = document.createElement("li");
                myImage.innerHTML = `<img src='${element}'>`;
                document.getElementById("dog-image-container").appendChild(myImage);
            }
        })
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function (res) { return res.json() })
        .then(function (json) {
            let dogBreed = Object.keys(json.message);
            for (let element of dogBreed) {
                let names = document.createElement("li");
                names.innerHTML = element;
                //console.log(names)
                document.getElementById("dog-breeds").appendChild(names);
            }

            let dogList = document.querySelectorAll('#dog-breeds li');
            for (let i = 0; i < dogList.length; i++) {
                dogList[i].addEventListener('click', function () {
                    dogList[i].style.color = "red";
                })
            }
            let dropdown = document.getElementById('breed-dropdown');
            dropdown.addEventListener("change", function (e) {
                let option = dropdown.value;
                let matched = dogBreed.filter(eve => eve[0] === option);
                document.getElementById("dog-breeds").innerHTML = ""
                for (let element of matched) {
                    let names = document.createElement("li");
                    names.innerHTML = element;
                    //console.log(names)
                    document.getElementById("dog-breeds").appendChild(names);
                }

            });
        });
})
