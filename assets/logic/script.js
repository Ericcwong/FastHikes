$(document).ready(function() {
  //DEFINE GLOBAL VARIABLES
  //GET VARIABLES FROM THE DOM
  //EVENT LISTENER ON CLICK
  //ASSIGN USER INPUTS TO VARIABLES
  //FUNCTION TO SEND API REQUEST TO MAP API
  //FUNCTION TO CHANGE ADDRESS/ZIP INTO LAT ANG LONG
  //FUNCTION TO SEND API REQUEST TO ALL TRAILS API

  function searchTrail(lat, long){
    
           
            var queryURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=200651467-de1e6529db5dab5088baa201faae4247`;
            console.log(`queryURL: ${queryURL}`);

            $.ajax({
            url: queryURL,
            method: "GET"
                }).then(function(response) {
                    var city = response.results[0].components.city;
                    
                });
            });
  }
  //FUNCTION TO FILTER ALL TRAILS RESULTS BY TIME
  //FUNCTION TO SEND HIKE LOCATIONS TO MAP API
  //FUNCTION TO CALCULATE TIME TO TRAIL AND BACK
  //FUNCTION TO FILTER HIKES BY THOSE THAT MEET TRAVEL TIME
  //FUNCTION TO DISPLAY HIKE RESULTS ON THE RESULTS PAGE
});
