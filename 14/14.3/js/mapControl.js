window.initMap = function () {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: slideData[0].coords
        });
    slideData.forEach(e => {
        new google.maps.Marker({
            position: e.coords,
            map: map
        })
    })
}