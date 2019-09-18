console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", function(event) {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(function(response) {
  return response.json();
}).then(function(json) {
  let list;
  for (let i = 0; i < 4; i++) {
  list = document.createElement("li"); 
  list.innerHTML = `<img src='${json["message"][i]}'>`;
  document.getElementById("dog-breeds").appendChild(list); 
}
  
    
  
});
 
  
  
  

  });