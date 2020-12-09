var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_athens_1 = new ol.format.GeoJSON();
var features_athens_1 = format_athens_1.readFeatures(json_athens_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_athens_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_athens_1.addFeatures(features_athens_1);
var lyr_athens_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_athens_1, 
                style: style_athens_1,
                interactive: true,
    title: 'athens<br />\
    <img src="styles/legend/athens_1_0.png" /> -12,6 - -6,9 <br />\
    <img src="styles/legend/athens_1_1.png" /> -6,9 - -2,3 <br />\
    <img src="styles/legend/athens_1_2.png" /> -2,3 - 2,3 <br />\
    <img src="styles/legend/athens_1_3.png" /> 2,3 - 6,9 <br />\
    <img src="styles/legend/athens_1_4.png" /> 6,9 - 11,4 <br />'
        });
var format_ref_2 = new ol.format.GeoJSON();
var features_ref_2 = format_ref_2.readFeatures(json_ref_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ref_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ref_2.addFeatures(features_ref_2);
var lyr_ref_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ref_2, 
                style: style_ref_2,
                interactive: false,
                title: '<img src="styles/legend/ref_2.png" /> ref'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_athens_1.setVisible(true);lyr_ref_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_athens_1,lyr_ref_2];
lyr_athens_1.set('fieldAliases', {'point id': 'point id', 'x': 'x', 'y': 'y', 'longitude': 'longitude', 'latitude': 'latitude', 'height (m)': 'height (m)', 'deformation rate (mm/y)': 'deformation rate (mm/y)', 'standard deviation of the residual phase (rad)': 'standard deviation of the residual phase (rad)', 'estimated height uncertainty (m)': 'estimated height uncertainty (m)', 'estimated deformation rate uncertainty (mm/y)': 'estimated deformation rate uncertainty (mm/y)', });
lyr_ref_2.set('fieldAliases', {'id': 'id', });
lyr_athens_1.set('fieldImages', {'point id': 'Range', 'x': 'Range', 'y': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'height (m)': 'TextEdit', 'deformation rate (mm/y)': '', 'standard deviation of the residual phase (rad)': 'TextEdit', 'estimated height uncertainty (m)': 'TextEdit', 'estimated deformation rate uncertainty (mm/y)': '', });
lyr_ref_2.set('fieldImages', {'id': 'TextEdit', });
lyr_athens_1.set('fieldLabels', {'point id': 'inline label', 'x': 'inline label', 'y': 'inline label', 'longitude': 'inline label', 'latitude': 'inline label', 'height (m)': 'inline label', 'deformation rate (mm/y)': 'inline label', 'standard deviation of the residual phase (rad)': 'inline label', 'estimated height uncertainty (m)': 'inline label', 'estimated deformation rate uncertainty (mm/y)': 'inline label', });
lyr_ref_2.set('fieldLabels', {'id': 'no label', });
lyr_ref_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});