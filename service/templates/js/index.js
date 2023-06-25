var goldIcon = L.icon({
  iconUrl: "/service/assets/parking-sign.png",
  iconSize: [30, 43],
  iconAnchor: [15, 33],
  popupAnchor: [-3, -76],
});

var parking = L.icon({
  iconUrl: "/service/assets/location.png",
  iconSize: [23, 37],
  iconAnchor: [15, 43],
  popupAnchor: [-3, -76],
});

var camera = L.icon({
  iconUrl: "/service/assets/security-camera.png",
  iconSize: [15, 23],
  iconAnchor: [15, 43],
  popupAnchor: [-3, -76],
});

let parkings = [
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.831264855671293, 45.24180006929586],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.836396856430298, 45.24275289721146],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83594518323008, 45.2426393166856],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.833568521864862, 45.24466858786565],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.836568922411544, 45.24522132454433],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.838526172947553, 45.24444900604888],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.837934696136983, 45.240420664876666],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.838289582223467, 45.24054182216068],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.840182308016722, 45.241087026741724],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841257720399256, 45.243275364705596],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841268474522337, 45.24322993293984],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841311491018075, 45.243192073107906],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.84132224514201, 45.243161785224316],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.830417563583836, 45.243782683616274],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.830546613070226, 45.24390383373088],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.830654154308775, 45.244002268008586],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.832611404844727, 45.24360852987391],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.8315252383382, 45.24271503706103],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83482675435178, 45.24602391891375],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83316386610855, 45.241633976891904],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.834435101167486, 45.24193831008188],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841020098772105, 45.237337334369386],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841198071680196, 45.23737314106589],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.84142689466651, 45.23749846418417],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.841752337388726, 45.237585596409474],
      type: "Point",
    },
    id: 24,
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83275199317245, 45.238588171013305],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.833031664885254, 45.23812269214753],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.833718131817136, 45.237227529764624],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.82779417644292, 45.240217317014896],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.828862013892376, 45.23828381987835],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.825836474453155, 45.23957282527965],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.825887323855, 45.239107354480296],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.82614157086641, 45.23880300612626],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.82626869437263, 45.23831962597913],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.82825182106481, 45.2364934860872],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.828506068076194, 45.2364576788363],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.828455218673326, 45.23661881128922],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83242147205675, 45.23767511271845],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.832599444964842, 45.23774672566398],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83267571906913, 45.237496079960124],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.838091180418616, 45.23880300612626],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.837633535797693, 45.239322187630904],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.84261677722867, 45.242437177033224],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.842260831411522, 45.24315324240797],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83425205054135, 45.24077229015023],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.832065526240626, 45.240790192419354],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.832243499148717, 45.2408438991923],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.836819944839846, 45.241685298594945],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83709961653787, 45.240808094601846],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83450629701707, 45.236261444731014],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83432832410901, 45.23678064945821],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83476054402942, 45.2361898299136],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83343845956864, 45.23627934842139],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.827845025310125, 45.23601079247558],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.827768751205838, 45.23633305945813],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.82733653128639, 45.23669113174009],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.838548824504784, 45.238015979563414],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.838752222113357, 45.237711625364284],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83895561972281, 45.23731775280402],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.836718246019245, 45.2348470353771],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.835726682674135, 45.23520511702287],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.832675718532528, 45.23574223526052],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.8333367607639, 45.235903369741436],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83898104442426, 45.243046539272456],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [19.83773523406677, 45.24267060537019],
      type: "Point",
    },
  },
];

let features = [
  {
    type: "Feature",
    properties: {
      cid: 1,
      adj: "10 2 n 4",
    },
    geometry: {
      coordinates: [19.836595218147664, 45.24259758530704],
      type: "Point",
    },
    id: 0,
  },
  {
    type: "Feature",
    properties: {
      cid: 2,
      adj: "1 3 n 5",
    },
    geometry: {
      coordinates: [19.84146644958932, 45.24386973938951],
      type: "Point",
    },
    id: 1,
  },
  {
    type: "Feature",
    properties: {
      cid: 3,
      adj: "2 n n 6",
    },
    geometry: {
      coordinates: [19.847099364697954, 45.245241638493155],
      type: "Point",
    },
    id: 2,
  },
  {
    type: "Feature",
    properties: {
      cid: 4,
      adj: "11 5 1 7",
    },
    geometry: {
      coordinates: [19.83793835995627, 45.24025420644588],
      type: "Point",
    },
    id: 3,
  },
  {
    type: "Feature",
    properties: {
      cid: 5,
      adj: "4 6 2 8",
    },
    geometry: {
      coordinates: [19.842721023552684, 45.241663610045435],
      type: "Point",
    },
    id: 4,
  },
  {
    type: "Feature",
    properties: {
      cid: 6,
      adj: "5 n 3 9",
    },
    geometry: {
      coordinates: [19.847609968563432, 45.24248678535491],
      type: "Point",
    },
    id: 5,
  },
  {
    type: "Feature",
    properties: {
      cid: 7,
      adj: "12 8 4 n",
    },
    geometry: {
      coordinates: [19.83970971684289, 45.23722324664422],
      type: "Point",
    },
    id: 6,
  },
  {
    type: "Feature",
    properties: {
      cid: 8,
      adj: "7 9 5 n",
    },
    geometry: {
      coordinates: [19.84449238044064, 45.23843315533631],
      type: "Point",
    },
    id: 7,
  },
  {
    type: "Feature",
    properties: {
      cid: 9,
      adj: "8 n 6 n",
    },
    geometry: {
      coordinates: [19.8481236620606, 45.23918153956885],
      type: "Point",
    },
    id: 8,
  },
  {
    type: "Feature",
    properties: {
      cid: 10,
      adj: "n 1 n 11",
    },
    geometry: {
      coordinates: [19.831032313246226, 45.24138863057564],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {
      cid: 11,
      adj: "n 4 10 12",
    },
    geometry: {
      coordinates: [19.832464300463585, 45.23873129645955],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {
      cid: 12,
      adj: "n 7 11 n",
    },
    geometry: {
      coordinates: [19.8341797018183, 45.23571669979091],
      type: "Point",
    },
    id: 11,
  },
];

let premium_parking_lots = [
  {
    type: "Feature",
    properties: {
      cid: 12,
      adj: "n 7 11 n",
    },
    geometry: {
      coordinates: [19.843929743215572, 45.24002579920913],
      type: "Point",
    },
    id: 1,
  },
  {
    type: "Feature",
    properties: {
      cid: 12,
      adj: "n 7 11 n",
    },
    geometry: {
      coordinates: [19.838583746118363, 45.23888217967523],
      type: "Point",
    },
    id: 1,
  },
];

// Create the map
var map = L.map("map", { zoomControl: false }).setView([45.2671, 19.8335], 13);

var myIcon = L.icon({
  iconUrl:
    "https://w7.pngwing.com/pngs/989/503/png-transparent-closed-circuit-television-surveillance-wireless-security-camera-web-camera-angle-electronics-vehicle-thumbnail.png",
  iconSize: [15, 15],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

let parking_info = {
  ratings: [5, 3, 4, 5, 5],
  free_duration: "15min",
};

features.forEach((element) => {
  L.marker(element.geometry.coordinates.reverse(), { icon: camera }).addTo(map);
});

parkings.forEach((element) => {
  L.marker(element.geometry.coordinates.reverse(), { icon: parking })
    .addTo(map)
    .bindPopup(
      "<b>Rating: " +
        parking_info.ratings.reduce((a, b) => a + b, 0) /
          parking_info.ratings.length +
        "<br>" +
        "Free duration: " +
        parking_info.free_duration +
        "<b><br>"
    )
    .openPopup();
});

premium_parking_lots.forEach((element) => {
  L.marker(element.geometry.coordinates.reverse(), { icon: goldIcon }).addTo(
    map
  );
});

// Add the tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// Search button click event
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  var searchInput = document.getElementById("search-input").value;
  // Perform your search logic here
  console.log("Search query:", searchInput);
});
