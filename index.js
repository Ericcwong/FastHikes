$("#geoloc-btn").on("click", function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(showPosition){
            var lat = showPosition.coords.latitude;
            var long = showPosition.coords.longitude;
            localStorage.setItem("lat", lat);
            localStorage.setItem("long", long);
            $("#location-input").val(`${lat}, ${long}`);
        });
    } else {
    console.log("geoLocation not supported on browser")
    }
});

$("#submit-btn").on("click", function(event){
    event.preventDefault();
    var location = $("#location-input").val();
    var duration = $("#duration-input").val();
    localStorage.setItem("location", location);
    localStorage.setItem("duration", duration);
});