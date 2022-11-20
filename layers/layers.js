var wms_layers = [];


        var lyr_googleearth_0 = new ol.layer.Tile({
            'title': 'google earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_mukim_mlk_1 = new ol.format.GeoJSON();
var features_mukim_mlk_1 = format_mukim_mlk_1.readFeatures(json_mukim_mlk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mukim_mlk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mukim_mlk_1.addFeatures(features_mukim_mlk_1);
var lyr_mukim_mlk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mukim_mlk_1, 
                style: style_mukim_mlk_1,
                interactive: false,
                title: '<img src="styles/legend/mukim_mlk_1.png" /> mukim_mlk'
            });
var format_district_mlk_2 = new ol.format.GeoJSON();
var features_district_mlk_2 = format_district_mlk_2.readFeatures(json_district_mlk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_district_mlk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_mlk_2.addFeatures(features_district_mlk_2);
var lyr_district_mlk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_district_mlk_2, 
                style: style_district_mlk_2,
                interactive: false,
                title: '<img src="styles/legend/district_mlk_2.png" /> district_mlk'
            });
var format_PulaudanPantai_3 = new ol.format.GeoJSON();
var features_PulaudanPantai_3 = format_PulaudanPantai_3.readFeatures(json_PulaudanPantai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PulaudanPantai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PulaudanPantai_3.addFeatures(features_PulaudanPantai_3);
var lyr_PulaudanPantai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PulaudanPantai_3, 
                style: style_PulaudanPantai_3,
                interactive: true,
                title: '<img src="styles/legend/PulaudanPantai_3.png" /> Pulau dan Pantai'
            });
var format_TempatIbadah_4 = new ol.format.GeoJSON();
var features_TempatIbadah_4 = format_TempatIbadah_4.readFeatures(json_TempatIbadah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_4.addFeatures(features_TempatIbadah_4);
var lyr_TempatIbadah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatIbadah_4, 
                style: style_TempatIbadah_4,
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_4.png" /> Tempat Ibadah'
            });
var format_TempatBersejarah_5 = new ol.format.GeoJSON();
var features_TempatBersejarah_5 = format_TempatBersejarah_5.readFeatures(json_TempatBersejarah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatBersejarah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatBersejarah_5.addFeatures(features_TempatBersejarah_5);
var lyr_TempatBersejarah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatBersejarah_5, 
                style: style_TempatBersejarah_5,
                interactive: true,
                title: '<img src="styles/legend/TempatBersejarah_5.png" /> Tempat Bersejarah'
            });
var format_Muzium_6 = new ol.format.GeoJSON();
var features_Muzium_6 = format_Muzium_6.readFeatures(json_Muzium_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muzium_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muzium_6.addFeatures(features_Muzium_6);
var lyr_Muzium_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muzium_6, 
                style: style_Muzium_6,
                interactive: true,
                title: '<img src="styles/legend/Muzium_6.png" /> Muzium'
            });
var format_TempatMenarik_7 = new ol.format.GeoJSON();
var features_TempatMenarik_7 = format_TempatMenarik_7.readFeatures(json_TempatMenarik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatMenarik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMenarik_7.addFeatures(features_TempatMenarik_7);
var lyr_TempatMenarik_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatMenarik_7, 
                style: style_TempatMenarik_7,
                interactive: true,
                title: '<img src="styles/legend/TempatMenarik_7.png" /> Tempat Menarik'
            });
var format_TempatMakanan_8 = new ol.format.GeoJSON();
var features_TempatMakanan_8 = format_TempatMakanan_8.readFeatures(json_TempatMakanan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatMakanan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakanan_8.addFeatures(features_TempatMakanan_8);
var lyr_TempatMakanan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatMakanan_8, 
                style: style_TempatMakanan_8,
                interactive: true,
                title: '<img src="styles/legend/TempatMakanan_8.png" /> Tempat Makanan'
            });

lyr_googleearth_0.setVisible(true);lyr_mukim_mlk_1.setVisible(true);lyr_district_mlk_2.setVisible(true);lyr_PulaudanPantai_3.setVisible(true);lyr_TempatIbadah_4.setVisible(true);lyr_TempatBersejarah_5.setVisible(true);lyr_Muzium_6.setVisible(true);lyr_TempatMenarik_7.setVisible(true);lyr_TempatMakanan_8.setVisible(true);
var layersList = [lyr_googleearth_0,lyr_mukim_mlk_1,lyr_district_mlk_2,lyr_PulaudanPantai_3,lyr_TempatIbadah_4,lyr_TempatBersejarah_5,lyr_Muzium_6,lyr_TempatMenarik_7,lyr_TempatMakanan_8];
lyr_mukim_mlk_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MUKIM': 'MUKIM', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'MUKIM_CODE': 'MUKIM_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Photo': 'Photo', });
lyr_district_mlk_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PulaudanPantai_3.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'link gmap': 'link gmap', '360?': '360?', });
lyr_TempatIbadah_4.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'build on': 'build on', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'ticket': 'ticket', 'link gmap': 'link gmap', '360': '360', });
lyr_TempatBersejarah_5.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'build on': 'build on', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'ticket': 'ticket', 'link gmap': 'link gmap', '360': '360', });
lyr_Muzium_6.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'ticket': 'ticket', 'link gmap': 'link gmap', '360': '360', });
lyr_TempatMenarik_7.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'build on': 'build on', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'ticket': 'ticket', 'link gmap': 'link gmap', '360': '360', });
lyr_TempatMakanan_8.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'link gmap': 'link gmap', '360': '360', });
lyr_mukim_mlk_1.set('fieldImages', {'OBJECTID': 'Range', 'MUKIM': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE_CODE': 'TextEdit', 'DISTR_CODE': 'TextEdit', 'MUKIM_CODE': 'TextEdit', 'FCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Photo': 'TextEdit', });
lyr_district_mlk_2.set('fieldImages', {'OBJECTID': 'Range', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE_CODE': 'TextEdit', 'DISTR_CODE': 'TextEdit', 'FCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PulaudanPantai_3.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'link gmap': 'TextEdit', '360?': 'TextEdit', });
lyr_TempatIbadah_4.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'build on': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'ticket': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_TempatBersejarah_5.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'build on': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'ticket': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_Muzium_6.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'ticket': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_TempatMenarik_7.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'build on': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'ticket': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_TempatMakanan_8.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_mukim_mlk_1.set('fieldLabels', {'OBJECTID': 'no label', 'MUKIM': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'MUKIM_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Photo': 'no label', });
lyr_district_mlk_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PulaudanPantai_3.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'link gmap': 'header label', '360?': 'header label', });
lyr_TempatIbadah_4.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'build on': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'ticket': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_TempatBersejarah_5.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'build on': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'ticket': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_Muzium_6.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'ticket': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_TempatMenarik_7.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'build on': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'ticket': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_TempatMakanan_8.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_TempatMakanan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});