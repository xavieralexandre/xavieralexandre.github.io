var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_lavey = new ga.Map({
  target: 'map_lavey',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 6,
    center: [568870, 117257]
  }),
});

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.xavieralexandre.org/parcours/lavey-morcles.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map_lavey.addLayer(vector);