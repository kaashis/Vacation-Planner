let firstEntry = true;
let location1;
let destinationName, description;
let photoUrl =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

const displayFormData_container = document.createElement("div");

document.querySelector("#form_area").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  destinationName = evt.target.destinationName.value;
  location1 = evt.target.Location.value;
  description = evt.target.Description.value;

  if (firstEntry) {
    document.querySelector(".displayResults").innerHTML='<h3>MyWishList</h3>';
    firstEntry = false;
  }

  findPhoto(destinationName);  
}

 function findPhoto(destinationName) {
  const API =
    `https://api.unsplash.com/search/photos?client_id=3814IBx6Yii34H-j7DnEUh9_b-1VFYvmNgLRzSrg548&query=${destinationName}`;

  fetch(API)
    .then((response) => response.json())
    .then((data) => display(data)); 

    // const res = await axios.get(API);
    // return res.data;
}

function display(data) {
    
  if(data.total!==0){
      photoUrl = data.results[0].urls.small;
  }

  displayFormData_container.innerHTML += `<p><img src=${photoUrl}></p><p>${destinationName}</p> 
        <p>${location1}</p> 
        <p>${description}</p>
        <p><input type="button" id="editButton" value="Edit" onclick="edit()"><input type="button" id="removeButton" value="Remove"></div>`;
 document.querySelector(".displayResults").appendChild(displayFormData_container);

 document.querySelector("#form_area").reset();
 
 addToList(destinationName);
 //console.log(photoUrl);
}

function edit(evt) {
  console.log("I'm edititing");
}
function removeButton(evt) {}

//1. When your page loads, show the destinations that are in your Database

const API_BASE_URL = "https://mydestinations.herokuapp.com/";

fetch(API_BASE_URL)
.then(res => res.json())
.then(data => displayDestinations(data) );

function displayDestinations(dests){
  let initialDisplay= document.querySelector("#header");
  let defaultDisplay = document.createElement("div");

  dests.forEach(element => {
    defaultDisplay.innerHTML += `<p><img src=${element.photo}></p>
                                 <p>${element.name}</p> 
                                 <p>${element.location}</p>
                                 <p></p>`;
  initialDisplay.appendChild(defaultDisplay);
  });
  //initialDisplay.appendChild(defaultDisplay);
}

function addToList(){

}