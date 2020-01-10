$(document).ready(function(){
 for (var i=0; i<obj.length; i++){   
    createCard(i);
 }
});

var obj = JSON.parse(localStorage.getItem("mainObject"));

function createCard(i){
    var card = $(`
    <div class="hikeCard">
    <div class="image">
    <img src="${obj[i].imgMedium}" alt="Image" class="hikeImage" />
    </div>
    <div class="hikeTitle"><span class="cardTitles">Title:</span> ${obj[i].name}</div>
    <div class="hikeDuration"><span class="cardTitles">Hike Length:</span> ${obj[i].length} Miles </div>
    <div class="hikeDetails">
    <span class="cardTitles">Rating: </span>${obj[i].stars} (${obj[i].starVotes}) &nbsp;&nbsp;&nbsp;
    <span class="cardTitles">Difficulty:</span> ${obj[i].difficulty} &nbsp;&nbsp;&nbsp;
    <span class="cardTitles">Elevation:</span> ${obj[i].ascent} ft
    <br><span class="cardTitles">Details:</span> ${obj[i].summary}
    <br><span class="cardTitles">Conditions:</span> ${obj[i].conditionDetails}
    </div>
  </div>`);
  $("#resultsArea").append(card);

}

function createFilteredCard(i){
  var card = $(`
  <div class="hikeCard">
  <div class="image">
  <img src="${tempobj[i].imgMedium}" alt="Image" class="hikeImage" />
  </div>
  <div class="hikeTitle">Title: ${tempobj[i].name}</div>
  <div class="hikeDuration">Hike Length: ${tempobj[i].length} Miles </div>
  <div class="hikeDetails">
  Rating: ${tempobj[i].stars} (${tempobj[i].starVotes}) &nbsp;&nbsp;&nbsp;
  Difficulty: ${tempobj[i].difficulty} &nbsp;&nbsp;&nbsp;
  Elevation: ${tempobj[i].ascent} ft
  <br>Details: ${tempobj[i].summary}
  <br>Conditions: ${tempobj[i].conditionDetails}
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
          if(tempobj[i].difficulty === "green" || tempobj[i].difficulty === "greenBlue"){
            trails.push(tempobj[i]);
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
        if(tempobj[i].difficulty === "blue" || tempobj[i].difficulty === "blueBlack"){
          trails.push(tempobj[i]);
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
        if(tempobj[i].difficulty === "black"){
          trails.push(tempobj[i]);
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
