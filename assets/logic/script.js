$(document).ready(function() {
  //Get Lat, long, and duration from local memory
  userlat = localStorage.getItem("lat");
  userlong = localStorage.getItem("long");
  userDuration = localStorage.getItem("duration");
  queryURL = `https://www.hikingproject.com/data/get-trails?lat=${userlat}&lon=${userlong}&key=200651467-de1e6529db5dab5088baa201faae4247`;
  var trailStats = [];
  var travelTimes = [];
  var travelDuration = [];
  var totalTime = [];
  var mainData = [];

  console.log(userlat, userlong, userDuration);

  //Call Alltrails API via lat and long
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(dataLoop);

  //loop through the returned hike object and and get lat, long, and length of each hike
  function dataLoop(x) {
    mainData = x.trails;
    y = x.trails;
    console.log(y);
    for (var i = 0; i < y.length; i++) {
      var object = {
        lat: y[i].latitude,
        long: y[i].longitude,
        len: (y[i].length / 3) * 3600
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
    }

    function callback(response) {
      travelDuration =
        response.rows["0"].elements["0"].duration_in_traffic.value;
      travelTimes.push(travelDuration);
      console.log(travelTimes);
      if (travelTimes.length == 10) {
        for (var i = 0; i < travelTimes.length; i++) {
          allTime = trailStats[i].len + travelTimes[i];
          totalTime.push(allTime);
          console.log(totalTime);
          console.log(mainData);
          userDurationSeconds = userDuration * 3600;
          console.log(userDurationSeconds);
          if (totalTime[i] > userDurationSeconds) {
            mainData.splice([i], 1);
          }
        }
      }
      console.log(mainData);
      mainObject = JSON.stringify(mainData);
      localStorage.setItem("mainObject", mainObject);
    }
  }
});

//use returned duration from google, + hike length to filter the returned hikes against the user input duration.

//trim the hike object to only contain the valid hikes.
