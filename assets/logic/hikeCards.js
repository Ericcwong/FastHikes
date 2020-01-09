$(document).ready(function(){
 for (var i=0; i<obj.trails.length; i++){   
    createCard(i);
 }
});

var obj = {
  "trails": [
  {
  "id": 7000130,
  "name": "Bear Peak Out and Back",
  "type": "Featured Hike",
  "summary": "A must-do hike for Boulder locals and visitors alike!",
  "difficulty": "blueBlack",
  "stars": 4.6,
  "starVotes": 109,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005382_sqsmall_1554312030.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005382_smallMed_1554312030.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg",
  "length": 5.7,
  "ascent": 2541,
  "descent": -2540,
  "high": 8342,
  "low": 6103,
  "longitude": -105.2755,
  "latitude": 39.9787,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Icy - Fresh snowfall. Be sure to bring crampons.",
  "conditionDate": "2019-12-29 21:37:58"
  },
  {
  "id": 7011192,
  "name": "Boulder Skyline Traverse",
  "type": "Featured Hike",
  "summary": "The classic long mountain route in Boulder.",
  "difficulty": "black",
  "stars": 4.7,
  "starVotes": 74,
  "location": "Superior, Colorado",
  "url": "https://www.hikingproject.com/trail/7011192/boulder-skyline-traverse",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7048859_sqsmall_1555540136.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7048859_small_1555540136.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7048859_smallMed_1555540136.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7048859_medium_1555540136.jpg",
  "length": 16.3,
  "ascent": 5409,
  "descent": -5492,
  "high": 8492,
  "low": 5417,
  "longitude": -105.2582,
  "latitude": 39.9388,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Icy",
  "conditionDate": "2019-12-17 11:25:21"
  },
  {
  "id": 7004226,
  "name": "Sunshine Lion's Lair Loop",
  "type": "Featured Hike",
  "summary": "Great Mount Sanitas views are the reward for this gentler loop in Sunshine Canyon.",
  "difficulty": "blue",
  "stars": 4.5,
  "starVotes": 107,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7004226/sunshine-lions-lair-loop",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7039883_medium_1555092747.jpg",
  "length": 5.3,
  "ascent": 1261,
  "descent": -1282,
  "high": 6800,
  "low": 5530,
  "longitude": -105.2979,
  "latitude": 40.02,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Some Mud - lower and middle parts of Sunshine Canyon were muddy and slick, but overall traction wasn't necessary. completely dry on Lion's Lair and descent",
  "conditionDate": "2020-01-05 20:47:44"
  },
  {
  "id": 7011191,
  "name": "Green Mountain via Ranger/Saddle Rock Loop",
  "type": "Featured Hike",
  "summary": "A loop with a variety of terrain, a lot of climbing, and great views of Boulder.",
  "difficulty": "blueBlack",
  "stars": 4.5,
  "starVotes": 78,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7011191/green-mountain-via-rangersaddle-rock-loop",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7003740_sqsmall_1554235436.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7003740_small_1554235436.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7003740_smallMed_1554235436.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7003740_medium_1554235436.jpg",
  "length": 4.9,
  "ascent": 2305,
  "descent": -2277,
  "high": 8099,
  "low": 5806,
  "longitude": -105.2928,
  "latitude": 39.9975,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Icy - Fresh snowfall. Be sure to bring crampons.",
  "conditionDate": "2019-12-29 21:37:36"
  },
  {
  "id": 7004682,
  "name": "Royal Arch Out and Back",
  "type": "Featured Hike",
  "summary": "A classic Boulder hike to a natural arch with great views.",
  "difficulty": "blueBlack",
  "stars": 4.4,
  "starVotes": 146,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7004682/royal-arch-out-and-back",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7002679_sqsmall_1554226731.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7002679_small_1554226731.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7002679_smallMed_1554226731.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7002679_medium_1554226731.jpg",
  "length": 3.3,
  "ascent": 1311,
  "descent": -1312,
  "high": 6917,
  "low": 5691,
  "longitude": -105.283,
  "latitude": 39.9997,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Icy - Fresh snowfall. Be sure to bring crampons.",
  "conditionDate": "2019-12-29 21:37:58"
  },
  {
  "id": 7002439,
  "name": "Walker Ranch",
  "type": "Featured Hike",
  "summary": "An awesome and challenging hike near Boulder with great scenery.",
  "difficulty": "blueBlack",
  "stars": 4.5,
  "starVotes": 121,
  "location": "Coal Creek, Colorado",
  "url": "https://www.hikingproject.com/trail/7002439/walker-ranch",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7039625_sqsmall_1555092312.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7039625_small_1555092312.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7039625_smallMed_1555092312.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7039625_medium_1555092312.jpg",
  "length": 7.6,
  "ascent": 1594,
  "descent": -1585,
  "high": 7335,
  "low": 6439,
  "longitude": -105.3378,
  "latitude": 39.9511,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Dry, Muddy, Snowy, Icy",
  "conditionDate": "2019-11-24 16:15:01"
  },
  {
  "id": 7000000,
  "name": "Mount Sanitas Loop",
  "type": "Featured Hike",
  "summary": "Very popular and scenic loop right from the edge of town.",
  "difficulty": "blueBlack",
  "stars": 4.2,
  "starVotes": 104,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7039883_medium_1555092747.jpg",
  "length": 3.2,
  "ascent": 1281,
  "descent": -1280,
  "high": 6780,
  "low": 5521,
  "longitude": -105.2977,
  "latitude": 40.0202,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Snowy, Icy - Fresh snowfall. Be sure to bring crampons.",
  "conditionDate": "2019-12-29 21:37:58"
  },
  {
  "id": 7001019,
  "name": "Betasso Preserve",
  "type": "Featured Hike",
  "summary": "This hike is easily accessible from Boulder and offers amazing singletrack with beautiful views.",
  "difficulty": "blue",
  "stars": 4.1,
  "starVotes": 60,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7001019/betasso-preserve",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7029200_sqsmall_1554920151.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7029200_small_1554920151.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7029200_smallMed_1554920151.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7029200_medium_1554920151.jpg",
  "length": 6.7,
  "ascent": 776,
  "descent": -778,
  "high": 6575,
  "low": 6178,
  "longitude": -105.3446,
  "latitude": 40.0164,
  "conditionStatus": "Minor Issues",
  "conditionDetails": "Mostly Dry, Icy - The trail is mostly dry. Only ice left are in shady areas.",
  "conditionDate": "2020-01-05 10:14:56"
  },
  {
  "id": 7017569,
  "name": "Marshall Mesa to Spring Brook Loop",
  "type": "Featured Hike",
  "summary": "Some of the best trails that Boulder has to offer with a variety of options that never get old.",
  "difficulty": "blue",
  "stars": 4.3,
  "starVotes": 26,
  "location": "Superior, Colorado",
  "url": "https://www.hikingproject.com/trail/7017569/marshall-mesa-to-spring-brook-loop",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7002458_sqsmall_1554226116.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7002458_small_1554226116.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7002458_smallMed_1554226116.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7002458_medium_1554226116.jpg",
  "length": 11.1,
  "ascent": 893,
  "descent": -893,
  "high": 6236,
  "low": 5567,
  "longitude": -105.2313,
  "latitude": 39.9527,
  "conditionStatus": "Bad / Closed",
  "conditionDetails": "",
  "conditionDate": "2020-01-01 12:48:21"
  },
  {
  "id": 7005887,
  "name": "Sugarloaf Mountain",
  "type": "Featured Hike",
  "summary": "The best bang-for-your-buck view trail in Boulder County.",
  "difficulty": "blue",
  "stars": 4.4,
  "starVotes": 19,
  "location": "Boulder, Colorado",
  "url": "https://www.hikingproject.com/trail/7005887/sugarloaf-mountain",
  "imgSqSmall": "https://cdn-files.apstatic.com/hike/7031490_sqsmall_1554931128.jpg",
  "imgSmall": "https://cdn-files.apstatic.com/hike/7031490_small_1554931128.jpg",
  "imgSmallMed": "https://cdn-files.apstatic.com/hike/7031490_smallMed_1554931128.jpg",
  "imgMedium": "https://cdn-files.apstatic.com/hike/7031490_medium_1554931128.jpg",
  "length": 1.4,
  "ascent": 432,
  "descent": -432,
  "high": 8892,
  "low": 8460,
  "longitude": -105.4251,
  "latitude": 40.0255,
  "conditionStatus": "Unknown",
  "conditionDetails": null,
  "conditionDate": "1970-01-01 00:00:00"
  }
  ],
  "success": 1
  }

function createCard(i){
    var card = $(`
    <div class="hikeCard">
    <div class="image">
    <img src="${obj.trails[i].imgMedium}" alt="Image" class="hikeImage" />
    </div>
    <div class="hikeTitle">Title: ${obj.trails[i].name}</div>
    <div class="hikeDuration">Hike Length: ${obj.trails[i].length} Miles </div>
    <div class="hikeDetails">
    Rating: ${obj.trails[i].stars} (${obj.trails[i].starVotes}) &nbsp;&nbsp;&nbsp;
    Difficulty: ${obj.trails[i].difficulty} &nbsp;&nbsp;&nbsp;
    Elevation: ${obj.trails[i].ascent} ft
    <br>Details: ${obj.trails[i].summary}
    <br>Conditions: ${obj.trails[i].conditionDetails}
    </div>
  </div>`);
  $("#resultsArea").append(card);
}

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

//filtering logic

var trails = [];
var tempobj = obj;

$("#filterBtn").on("click", function(){
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
    if(difficulty === "Easy"){
        for(var i = 0; i < tempobj.trails.length; i++){
          if(tempobj.trails[i].difficulty === "green" || tempobj.trails[i].difficulty === "greenBlue"){
            trails.push(tempobj.trails[i]);
          }
        }
        tempobj = {trails};
        for (var i=0; i<tempobj.trails.length; i++){   
          createFilteredCard(i);
        }
        if(trails.length === 0 ){
          $("#resultsArea").text("No matches found");
        }
        trails = [];
        tempobj = obj;
    }
    else if(difficulty === "Moderate"){
      for(var i = 0; i < tempobj.trails.length; i++){
        if(tempobj.trails[i].difficulty === "blue" || tempobj.trails[i].difficulty === "blueBlack"){
          trails.push(tempobj.trails[i]);
        }
      }
      tempobj = {trails};
      for (var i=0; i<tempobj.trails.length; i++){   
        createFilteredCard(i);
      }
      if(trails.length === 0 ){
        $("#resultsArea").text("No matches found");
      }
      trails = [];
      tempobj = obj;
    }
    else if(difficulty === "Difficult"){
      for(var i = 0; i < tempobj.trails.length; i++){
        if(tempobj.trails[i].difficulty === "black"){
          trails.push(tempobj.trails[i]);
        }
      }
      if(trails.length === 0 ){
        $("#resultsArea").text("No matches found");
      }
      tempobj = {trails};
      for (var i=0; i<tempobj.trails.length; i++){   
        createFilteredCard(i);
      }
      trails = [];
      tempobj = obj;
    }
})
