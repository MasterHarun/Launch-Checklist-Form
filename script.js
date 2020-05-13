// Write your JavaScript code here!


let form = document.querySelector('form');
let pilot = document.querySelector("input[name=pilotName]").value;
let coPilot = document.querySelector("input[name=copilotName]").value;
let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
let cargoMass = document.querySelector("input[name=cargoMass]").value;
let pilotStatus = document.getElementById("pilotStatus");
let coPilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let button = document.getElementById("formSubmit");

// alert box when submit event triggered
window.addEventListener("load", function() {
   form.addEventListener("submit", function(event) {
      alert("submit clicked");
   })
})

//needs all input values to be filled
window.addEventListener("load", function() {
         form.addEventListener("submit", function(event) {
            if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("All fields are required!");
            } else if (!isNaN(pilot.value) || !isNaN(coPilot.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               alert("Please enter a valid entry!")
            }

         })
         event.preventDefault();
      }
      //
      let button = document.getElementById("formSubmit"); button.addEventListener("click", function() {
         let input = document.getElementById("pilotName");
      }) window.addEventListener("load", function() {
         this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(json) {
               const div = document.getElementById("missionTarget");
               div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json.name}</li>
            <li>Diameter: ${json.diameter}</li>
            <li>Star: ${json.star}</li>
            <li>Distance from Earth: ${json.distance}</li>
            <li>Number of Moons: ${json.moons}</li>
         </ol>
         <img src="${}">`
            })
         })
      })
      /* This block of code shows how to format the HTML once you fetch some planetary JSON!
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json.name}</li>
         <li>Diameter: ${json.diameter}</li>
         <li>Star: ${json.star}</li>
         <li>Distance from Earth: ${json.distance}</li>
         <li>Number of Moons: ${json.moons}</li>
      </ol>
      <img src="${}">
      */
