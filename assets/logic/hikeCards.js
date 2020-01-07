$(document).ready(function(){
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
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
]}

function createCard(){
    var card = $(`
    <div class="hikeCard">
    <div class="image">
    <img src="${obj.trails[0].imgMedium}" alt="Image" class="hikeImage" />
    </div>
    <div class="hikeTitle">Title: ${obj.trails[0].name}</div>
    <div class="hikeDuration">Hike Length: ${obj.trails[0].length} Miles </div>
    <div class="hikeDetails">
    Rating: ${obj.trails[0].stars} (${obj.trails[0].starVotes})
    Difficulty: ${obj.trails[0].difficulty}
    Elevation: ${obj.trails[0].ascent} ft
    <br>Details: ${obj.trails[0].summary}
  
    </div>
  </div>`);
  $("#resultsArea").append(card);
}
function cardInfo(){

}
