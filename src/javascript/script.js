'use strict';

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 0.644 },
        zoom: 2
    });
}