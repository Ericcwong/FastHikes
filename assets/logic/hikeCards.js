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
]}

function createCard(i){
    var rating = obj.trails[i].stars * 20;
    var card = $(`
    <div class="hikeCard">
    <div class="image">
    <img src="${obj.trails[i].imgMedium}" alt="Image" class="hikeImage" />
    </div>
    <div class="hikeTitle"><span class="cardTitles">Title:</span> ${obj.trails[i].name}</div>
    <div class="hikeDuration"><span class="cardTitles">Hike Length:</span> ${obj.trails[i].length} Miles </div>
    <div class="hikeDetails">
    <span class="cardTitles">Rating: </span>${obj.trails[i].stars} (${obj.trails[i].starVotes}) &nbsp;&nbsp;&nbsp;
    <span class="cardTitles">Difficulty:</span> ${obj.trails[i].difficulty} &nbsp;&nbsp;&nbsp;
    <span class="cardTitles">Elevation:</span> ${obj.trails[i].ascent} ft
    <br><span class="cardTitles">Details:</span> ${obj.trails[i].summary}
    <br><span class="cardTitles">Conditions:</span> ${obj.trails[i].conditionDetails}
    </div>
  </div>`);
  $("#resultsArea").append(card);

}
function cardInfo(){

}
