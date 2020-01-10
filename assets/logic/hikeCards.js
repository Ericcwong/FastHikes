var obj = JSON.parse(localStorage.getItem("mainObject"));

$(document).ready(function(){
 for (var i=0; i<obj.trails.length; i++){   
    createCard(i);
 }

function createCard(i){
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
        for(var i = 0; i < tempobj.length; i++){
          if(tempobj.trails[i].difficulty === "green" || tempobj.trails[i].difficulty === "greenBlue"){
            trails.push(tempobj.trails[i]);
          }
        }
        tempobj = {trails};
        for (var i=0; i<tempobj.length; i++){   
          createFilteredCard(i);
        }
        if(trails.length === 0 ){
          $("#resultsArea").text("No matches found");
        }
        trails = [];
        tempobj = obj;
    }
    else if(difficulty === "Moderate"){
      for(var i = 0; i < tempobj.length; i++){
        if(tempobj.trails[i].difficulty === "blue" || tempobj.trails[i].difficulty === "blueBlack"){
          trails.push(tempobj.trails[i]);
        }
      }
      tempobj = {trails};
      for (var i=0; i<tempobj.length; i++){   
        createFilteredCard(i);
      }
      if(trails.length === 0 ){
        $("#resultsArea").text("No matches found");
      }
      trails = [];
      tempobj = obj;
    }
    else if(difficulty === "Difficult"){
      for(var i = 0; i < tempobj.length; i++){
        if(tempobj.trails[i].difficulty === "black"){
          trails.push(tempobj.trails[i]);
        }
      }
      if(trails.length === 0 ){
        $("#resultsArea").text("No matches found");
      }
      tempobj = {trails};
      for (var i=0; i<tempobj.length; i++){   
        createFilteredCard(i);
      }
      trails = [];
      tempobj = obj;
    }
})
