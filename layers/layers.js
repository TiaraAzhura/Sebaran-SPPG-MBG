ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11936500.552831, -811531.555876, 12017296.448192, -762903.861885]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DesaKabBandung_1 = new ol.format.GeoJSON();
var features_DesaKabBandung_1 = format_DesaKabBandung_1.readFeatures(json_DesaKabBandung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKabBandung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKabBandung_1.addFeatures(features_DesaKabBandung_1);
var lyr_DesaKabBandung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKabBandung_1, 
                style: style_DesaKabBandung_1,
                popuplayertitle: 'Desa Kab. Bandung',
                interactive: true,
                title: '<img src="styles/legend/DesaKabBandung_1.png" /> Desa Kab. Bandung'
            });
var format_BufferMBG_2 = new ol.format.GeoJSON();
var features_BufferMBG_2 = format_BufferMBG_2.readFeatures(json_BufferMBG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferMBG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferMBG_2.addFeatures(features_BufferMBG_2);
var lyr_BufferMBG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferMBG_2, 
                style: style_BufferMBG_2,
                popuplayertitle: 'Buffer MBG',
                interactive: true,
                title: '<img src="styles/legend/BufferMBG_2.png" /> Buffer MBG'
            });
var format_KeteranganMBG_3 = new ol.format.GeoJSON();
var features_KeteranganMBG_3 = format_KeteranganMBG_3.readFeatures(json_KeteranganMBG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeteranganMBG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeteranganMBG_3.addFeatures(features_KeteranganMBG_3);
var lyr_KeteranganMBG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeteranganMBG_3, 
                style: style_KeteranganMBG_3,
                popuplayertitle: 'Keterangan MBG',
                interactive: true,
    title: 'Keterangan MBG<br />\
    <img src="styles/legend/KeteranganMBG_3_0.png" /> BAMBIM<br />\
    <img src="styles/legend/KeteranganMBG_3_1.png" /> KOBER<br />\
    <img src="styles/legend/KeteranganMBG_3_2.png" /> MA<br />\
    <img src="styles/legend/KeteranganMBG_3_3.png" /> MI<br />\
    <img src="styles/legend/KeteranganMBG_3_4.png" /> Mts<br />\
    <img src="styles/legend/KeteranganMBG_3_5.png" /> MTs<br />\
    <img src="styles/legend/KeteranganMBG_3_6.png" /> Pontren<br />\
    <img src="styles/legend/KeteranganMBG_3_7.png" /> POS PAUD<br />\
    <img src="styles/legend/KeteranganMBG_3_8.png" /> Posyandu<br />\
    <img src="styles/legend/KeteranganMBG_3_9.png" /> RA<br />\
    <img src="styles/legend/KeteranganMBG_3_10.png" /> SD<br />\
    <img src="styles/legend/KeteranganMBG_3_11.png" /> SLB<br />\
    <img src="styles/legend/KeteranganMBG_3_12.png" /> SMA<br />\
    <img src="styles/legend/KeteranganMBG_3_13.png" /> SMK<br />\
    <img src="styles/legend/KeteranganMBG_3_14.png" /> SMP<br />\
    <img src="styles/legend/KeteranganMBG_3_15.png" /> TK<br />\
    <img src="styles/legend/KeteranganMBG_3_16.png" /> TPA<br />\
    <img src="styles/legend/KeteranganMBG_3_17.png" /> <br />' });
var format_SPPGMBG_4 = new ol.format.GeoJSON();
var features_SPPGMBG_4 = format_SPPGMBG_4.readFeatures(json_SPPGMBG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPPGMBG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPGMBG_4.addFeatures(features_SPPGMBG_4);
var lyr_SPPGMBG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPPGMBG_4, 
                style: style_SPPGMBG_4,
                popuplayertitle: 'SPPG MBG',
                interactive: true,
                title: '<img src="styles/legend/SPPGMBG_4.png" /> SPPG MBG'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DesaKabBandung_1.setVisible(true);lyr_BufferMBG_2.setVisible(true);lyr_KeteranganMBG_3.setVisible(true);lyr_SPPGMBG_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DesaKabBandung_1,lyr_BufferMBG_2,lyr_KeteranganMBG_3,lyr_SPPGMBG_4];
lyr_DesaKabBandung_1.set('fieldAliases', {'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'KAB/KOT': 'KAB/KOT', 'PROVINSI': 'PROVINSI', 'L0': 'L0', });
lyr_BufferMBG_2.set('fieldAliases', {'NAMA SPPG': 'NAMA SPPG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Y': 'Y', 'X': 'X', });
lyr_KeteranganMBG_3.set('fieldAliases', {'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'BALITA': 'BALITA', 'IBU HAMIL': 'IBU HAMIL', 'IBU MENYUS': 'IBU MENYUS', 'Nama': 'Nama', 'Tingkatan': 'Tingkatan', 'Siswa/i': 'Siswa/i', 'Total': 'Total', 'Keterangan': 'Keterangan', 'distance': 'distance', });
lyr_SPPGMBG_4.set('fieldAliases', {'NAMA SPPG': 'NAMA SPPG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DesaKabBandung_1.set('fieldImages', {'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KAB/KOT': 'TextEdit', 'PROVINSI': 'TextEdit', 'L0': 'TextEdit', });
lyr_BufferMBG_2.set('fieldImages', {'NAMA SPPG': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_KeteranganMBG_3.set('fieldImages', {'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'BALITA': 'TextEdit', 'IBU HAMIL': 'TextEdit', 'IBU MENYUS': 'TextEdit', 'Nama': 'TextEdit', 'Tingkatan': 'TextEdit', 'Siswa/i': 'TextEdit', 'Total': 'TextEdit', 'Keterangan': 'TextEdit', 'distance': 'TextEdit', });
lyr_SPPGMBG_4.set('fieldImages', {'NAMA SPPG': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DesaKabBandung_1.set('fieldLabels', {'KELURAHAN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'KAB/KOT': 'hidden field', 'PROVINSI': 'hidden field', 'L0': 'hidden field', });
lyr_BufferMBG_2.set('fieldLabels', {'NAMA SPPG': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_KeteranganMBG_3.set('fieldLabels', {'Desa': 'hidden field', 'Kecamatan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'BALITA': 'inline label - visible with data', 'IBU HAMIL': 'inline label - visible with data', 'IBU MENYUS': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Tingkatan': 'inline label - visible with data', 'Siswa/i': 'inline label - visible with data', 'Total': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'distance': 'inline label - visible with data', });
lyr_SPPGMBG_4.set('fieldLabels', {'NAMA SPPG': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_SPPGMBG_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});