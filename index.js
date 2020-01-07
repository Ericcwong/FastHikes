$("#geoloc-btn").on("click", function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(showPosition){
            var lat = showPosition.coords.latitude;
            var long = showPosition.coords.longitude;
            localStorage.setItem("lat", lat);
            localStorage.setItem("long", long);
            var queryURL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=bd7510ab6530475cbd7652e1b7b4f5da`;
            console.log(`queryURL: ${queryURL}`);

            $.ajax({
            url: queryURL,
            method: "GET"
                }).then(function(response) {
                    var city = response.results[0].components.city;
                    $("#location-input").val(city);
                });
            });
    } else {
    console.log("geoLocation not supported on browser")
    }
});

$("#input-form").on("submit", function(event){
    event.preventDefault();
    var location = $("#location-input").val();
    var duration = $("#duration-input").val();
    localStorage.setItem("location", location);
    localStorage.setItem("duration", duration);
});