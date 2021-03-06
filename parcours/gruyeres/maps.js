var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map = new ga.Map({
  target: 'map',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 17,
    center: [595834, 117193]
  }),
});

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'https://www.xavieralexandre.org/parcours/cambioula/cambioula.kml',
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
map.addLayer(vector);
