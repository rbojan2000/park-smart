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

var data = [
  {
    lat: 45.238672,
    lng: 19.832145,
    value: 0.7,
  },
  {
    lat: 45.241594,
    lng: 19.842548,
    value: 0.5,
  },
  {
    lat: 45.239961,
    lng: 19.836702,
    value: 0.6,
  },
  {
    lat: 45.255965,
    lng: 19.808412,
    value: 0.3,
  },
  {
    lat: 45.276738,
    lng: 19.801256,
    value: 0.7,
  },
  {
    lat: 45.265748,
    lng: 19.841586,
    value: 0.7,
  },
  {
    lat: 45.232789,
    lng: 19.81294,
    value: 0.4,
  },
];

let cfg = {
  radius: 100,
  useLocalExtrema: true,
  valueField: "value",
  gradient: {
    0.0: "green",
    0.5: "yellow",
    1.0: "red",
  },
  max: 1.0,
  maxOpacity: 0.3,
  //blur: 20, // Set the blur radius
};
let heatmapLayer = new HeatmapOverlay(cfg);
heatmapLayer.setData({
  min: 0.0,
  max: 1.0,
  data: data,
});
// Add the heatmap layer to the map

// Create the map
var map = L.map("map", { zoomControl: false }).setView([45.2671, 19.8335], 13);

heatmapLayer.addTo(map);

let parking_info = {
  ratings: [5, 3, 4, 5, 5],
  free_duration: "15min",
};

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

var profileButton = document.getElementById("profile-button");
// Add click event listener to the profile button
