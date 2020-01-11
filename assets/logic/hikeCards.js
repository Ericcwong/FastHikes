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
  var tempobj;

  console.log(userlat, userlong, userDuration);
  //test comment
  //Call Alltrails API via lat and long
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(dataLoop);

  //loop through the returned hike object and and get lat, long, and length of each hike
  function dataLoop(x) {
    console.log(x);
    mainData = x;

    y = x.trails;
    for (var i = 0; i < y.length; i++) {
      var object = {
        lat: y[i].latitude,
        long: y[i].longitude,
        len: (y[i].length / 3) * 3600
      };
      trailStats.push(object);
    }
    // console.log(trailStats);
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
        userDurationSeconds = userDuration * 3600;
        console.log(userDurationSeconds);

        for (i = 0; i < travelTimes.length; i++) {
          allTime = trailStats[i].len + travelTimes[i];
          totalTime.push(allTime);
        }
        console.log(totalTime);
        for (i = totalTime.length - 1; i >= 0; --i) {
          if (totalTime[i] > userDurationSeconds) {
            mainData.trails.splice(i, 1);
          }
        }
        console.log(mainData);
        init(mainData);
      }
    }
  }

  var obj;

  function init(dataFromApi) {
    obj = dataFromApi;
    console.log(obj);
    tempobj = obj;
    // obj = JSON.parse(localStorage.getItem("mainObject"));
    for (var i = 0; i < obj.trails.length; i++) {
      createCard(i);
    }
  }
  
  function createCard(i){
        var image = obj.trails[i].imgMedium;
        var name = obj.trails[i].name;
        var length = obj.trails[i].length;
        var stars = obj.trails[i].stars;
        var votes = obj.trails[i].starVotes;
        var difficulty = obj.trails[i].difficulty;
        var ascent = obj.trails[i].ascent;
        var summary = obj.trails[i].summary;
        var condition = obj.trails[i].conditionDetails;
        var cardDataArray = [image, name, length, stars, votes, difficulty, ascent, summary, condition];

        function doesExist(){
          for( var i = 0; i < cardDataArray.length; i++){
            if(cardDataArray[0] === ""){
              cardDataArray[0] = "assets/images/NoImage.jpg";
            }
            if(cardDataArray[i] === null || cardDataArray[i] === ""){
              cardDataArray[i] = "No data";
            }
          }
        }
  
        doesExist();
        var card = $(`
        <div class="hikeCard">
        <div class="image">
        <img src="${cardDataArray[0]}" alt="Image" class="hikeImage" />
        </div>
        <div class="hikeTitle"><span class="cardTitles">Title:</span> ${cardDataArray[1]}</div>
        <div class="hikeDuration"><span class="cardTitles">Hike Length:</span> ${cardDataArray[2]} Miles </div>
        <div class="hikeDetails">
        <span class="cardTitles">Rating: </span>${cardDataArray[3]}/5.0 (${cardDataArray[4]} votes) &nbsp;&nbsp;&nbsp;
        <span class="cardTitles">Difficulty:</span> ${cardDataArray[5]} &nbsp;&nbsp;&nbsp;
        <span class="cardTitles">Elevation:</span> ${cardDataArray[6]} ft
        <br><span class="cardTitles">Details:</span> ${cardDataArray[7]}
        <br><span class="cardTitles">Conditions:</span> ${cardDataArray[8]}
        </div>
        </div>`);
      $("#resultsArea").append(card);
      }
});

function createFilteredCard(i){
  var card = $(`
  <div class="hikeCard">
  <div class="image">
  <img src="${tempobj.trails[i].imgMedium}" alt="Image" class="hikeImage" />
  </div>
  <div class="hikeTitle">Title: ${tempobj.trails[i].name}</div>
  <div class="hikeDuration">Hike Length: ${tempobj.trails[i].length} Miles </div>
  <div class="hikeDetails">
  Rating: ${tempobj.trails[i].stars} (${tempobj.trails[i].starVotes}) &nbsp;&nbsp;&nbsp;
  Difficulty: ${tempobj.trails[i].difficulty} &nbsp;&nbsp;&nbsp;
  Elevation: ${tempobj.trails[i].ascent} ft
  <br>Details: ${tempobj.trails[i].summary}
  <br>Conditions: ${tempobj.trails[i].conditionDetails}
  </div>
</div>`);
    $("#resultsArea").append(card);
  }
});
//filtering logic

var trails = [];
// var tempobj = obj;

$("#filterBtn").on("click", function() {
  $("#resultsArea").empty();
  var difficulty = $("#difficultyFilter").val();
  var elevation = $("#elevationFilter").val();
  var rating = $("#ratingFilter").val();
  var length = $("#lengthFilter").val();
  // console.log(difficulty);
  // console.log(elevation);
  // console.log(rating);
  // console.log(length);
  //Run function to repopulate cards with these parameters.
  if (difficulty === "Easy") {
    for (var i = 0; i < tempobj.length; i++) {
      if (
        tempobj.trails[i].difficulty === "green" ||
        tempobj.trails[i].difficulty === "greenBlue"
      ) {
        trails.push(tempobj.trails[i]);
      }
    }
    tempobj = { trails };
    for (var i = 0; i < tempobj.length; i++) {
      createFilteredCard(i);
    }
    if (trails.length === 0) {
      $("#resultsArea").text("No matches found");
    }
    trails = [];
    tempobj = obj;
  } else if (difficulty === "Moderate") {
    for (var i = 0; i < tempobj.length; i++) {
      if (
        tempobj.trails[i].difficulty === "blue" ||
        tempobj.trails[i].difficulty === "blueBlack"
      ) {
        trails.push(tempobj.trails[i]);
      }
    }
    tempobj = { trails };
    for (var i = 0; i < tempobj.length; i++) {
      createFilteredCard(i);
    }
    if (trails.length === 0) {
      $("#resultsArea").text("No matches found");
    }
    trails = [];
    tempobj = obj;
  } else if (difficulty === "Difficult") {
    for (var i = 0; i < tempobj.length; i++) {
      if (tempobj.trails[i].difficulty === "black") {
        trails.push(tempobj.trails[i]);
      }
    }
<<<<<<< HEAD
})

$(".footer").text(moment().format("YYYY"));
=======
    if (trails.length === 0) {
      $("#resultsArea").text("No matches found");
    }
    tempobj = { trails };
    for (var i = 0; i < tempobj.length; i++) {
      createFilteredCard(i);
    }
    trails = [];
    tempobj = obj;
  }
});
>>>>>>> c7875b3674be921b5033c29eed2aa8bc5bdba353
