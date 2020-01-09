$(document).ready(function() {
  //Get Lat, long, and duration from local memory
  userlat = localStorage.getItem("lat");
  userlong = localStorage.getItem("long");
  userDuration = localStorage.getItem("duration");
  var trailStats = [];
  var travelTimes = [];
  var travelDuration;

  var travelHours = 0;

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
        len: results[i].length
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
        travelDuration =
          response.rows["0"].elements["0"].duration_in_traffic.value;
        //travelHours = (travelDuration / 3600).toPrecision(2);
        //console.log(travelDuration);
        travelTimes.push(travelDuration);
      }
    }
    console.log(travelTimes);
    console.log((trailStats[0].len / 3) * 3600 + travelTimes[0]);
  });
});

//use returned duration from google, + hike length to filter the returned hikes against the user input duration.

//trim the hike object to only contain the valid hikes.
