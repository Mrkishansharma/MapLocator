//console.log('hello');
var mapOptions = {
    center: [26.916194, 75.820349],
    zoom: 5
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

//var coordinates =[];
let l1 = [];
let counter = 0;
function getData() {
    clearData();
    let txt = document.getElementById("txt1").value;
    let txtArr = txt.split(',');
    for (let t of txtArr) {
        const data = { username: 'example' };
        fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=${t}`, {
            method: 'GET',
            headers: {
                //'Host': 'api.traveltimeapp.com',
                //'Accept': 'application/json',
                'X-Application-Id': 'ba3142d3',
                'X-Api-Key': '038293dc68ee6657838f85eef3d7ee77',
                'Accept-Language': 'fr-FR'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                let arr1 = data['features'];
                let obj1 = arr1[0];
                let obj2 = obj1['geometry'];
                let arr2 = obj2['coordinates'];
                let lat1 = arr2[0];
                let lan = arr2[1];
                console.log(lat1);
                console.log(lan);
                //coordinates.push({key1:lat,key2:lan});
                //console.log(coordinates);
                counter++;

                if (counter == 1) {
                    var blueIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    });
                    marker2 =new  L.marker([lan, lat1], { icon: blueIcon }).addTo(map);
                    l1.push(marker2);
                }
                if (counter == 2) {
                    var greenIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    });
                    marker2 =new  L.marker([lan, lat1], { icon: greenIcon }).addTo(map);
                    l1.push(marker2);
                }
                if (counter == 3) {
                    var redIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    });
                    marker2 =new  L.marker([lan, lat1], { icon: redIcon }).addTo(map);
                    l1.push(marker2);
                }
                if (counter >= 4) {
                    var yellowIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    });
                    marker2 =new  L.marker([lan, lat1], { icon: yellowIcon }).addTo(map);
                    l1.push(marker2);

                }

                

                marker2
                    .bindPopup(
                        data.features[0].properties.label +
                        " Country Code: " +
                        data.features[0].properties.country_code +
                        " Score: " +
                        data.features[0].properties.score
                    )
                    .openPopup();

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}

function clearData() {
    //console.log('bye');
    for (let l of l1) {
        map.removeLayer(l);
    }
    l1.clearData;
    counter = 0;
    //map.addLayer(layer);
    document.getElementById("txt1").innerHTML = " ";
}