let currentLocation = document.getElementById("location");
document.body.appendChild(currentLocation);

function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            resolve();
        } else {
            reject();
        }
    })
}
getLocation()
    .then(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            currentLocation.innerHTML = `Latitude; ${lat} 
           <br>
           Longitude; ${long}`
        })
    })
    .catch(() => {
        currentLocation.innerHTML = "Geolocation is not supported by this browser."
    })