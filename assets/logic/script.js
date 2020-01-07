$(document).ready(function() {
  //Get Lat, long, and duration from local memory
  userlat = localStorage.getItem("lat");
  userlong = localStorage.getItem("long");
  userDuration = localStorage.getItem("duration");
  var trailStats = [];
  var travelTimes = [];

  var travelHours = "";

  console.log(userlat, userlong, userDuration);

  //Call Alltrails API via lat and long
  queryURL = `https://www.hikingproject.com/data/get-trails?lat=${userlat}&lon=${userlong}&key=200651467-de1e6529db5dab5088baa201faae4247`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.trails;
    console.log(results);
    //loop through the returned hike object and and get lat, long, and length of each hike

    for (var i = 0; i < results.length; i++) {
      var object = {
        lat: results[i].latitude,
        long: results[i].longitude,
        length: results[i].length
      };
      trailStats.push(object);
    }
    console.log(trailStats);
    //call travelmatrix API against each returned hike with origin as user input lat and long and destination as hike lat long

    //Google JS API Stuff
    for (var i = 0; i < trailStats.length; i++) {
      var origin1 = new google.maps.LatLng(userlat, userlong);
      var destinationB = new google.maps.LatLng(
        trailStats[i].lat,
        trailStats[i].long
      );

      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin1],
          destinations: [destinationB],
          travelMode: "DRIVING",
          drivingOptions: {
            departureTime: new Date(Date.now()),
            trafficModel: "optimistic"
          },
          unitSystem: google.maps.UnitSystem.IMPERIAL,
          avoidHighways: false,
          avoidTolls: false
        },
        callback
      );

      function callback(response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        //console.log(response);
        // console.log(status);
        travelDuration =
          response.rows["0"].elements["0"].duration_in_traffic.value;
        //travelHours = travelDuration * 3600;
        console.log(travelDuration);
      }
      console.log(travelDuration);
      var trailTime = trailStats[i].length;
      console.log(trailTime);
      var totalTime = travelHours + trailTime;

      travelTimes.push(totalTime);
      console.log(totalTime);
    }
    console.log(travelTimes);
  });
});

//use returned duration from google, + hike length to filter the returned hikes against the user input duration.

//trim the hike object to only contain the valid hikes.
