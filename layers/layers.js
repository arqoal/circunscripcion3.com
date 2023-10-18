ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32619").setExtent([317549.570644, 2146169.216416, 331252.350927, 2153330.376856]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUBBARRIOSCIRC3_1 = new ol.format.GeoJSON();
var features_SUBBARRIOSCIRC3_1 = format_SUBBARRIOSCIRC3_1.readFeatures(json_SUBBARRIOSCIRC3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_SUBBARRIOSCIRC3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBBARRIOSCIRC3_1.addFeatures(features_SUBBARRIOSCIRC3_1);
var lyr_SUBBARRIOSCIRC3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBBARRIOSCIRC3_1, 
                style: style_SUBBARRIOSCIRC3_1,
                interactive: true,
    title: 'SUB BARRIOS CIRC3<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_0.png" /> Zona Monumental<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_1.png" /> Zamarrilla<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_2.png" /> Villa Progreso I<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_3.png" /> Villa OlImpica<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_4.png" /> Villa Noa<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_5.png" /> Villa Jagua<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_6.png" /> Villa de los Imperios<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_7.png" /> Villa de los Hidalgos<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_8.png" /> Vietnam<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_9.png" /> Urbanización Villa Olga<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_10.png" /> Urbanización Sara<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_11.png" /> Urbanización La Zurza III<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_12.png" /> Urbanización La Zurza II<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_13.png" /> Urbanización La Zurza I<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_14.png" /> Urbanización La Trinitaria<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_15.png" /> Urbanización La Rosa<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_16.png" /> Urbanización La Lotería<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_17.png" /> Urbanización Gutiérrez<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_18.png" /> Urbanización Fern1ndez<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_19.png" /> Urbanización El Portal<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_20.png" /> Urb. Villa María<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_21.png" /> Urb. Villa Elena<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_22.png" /> Urb. Villa del Norte<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_23.png" /> Urb. Quintas de Pontezuela<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_24.png" /> Urb. Pinos Villa Olga<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_25.png" /> Urb. Monumental<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_26.png" /> Urb. Monte Verde<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_27.png" /> Urb. Los Samanes<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_28.png" /> Urb. Los Laureles<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_29.png" /> Urb. Los Girasoles<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_30.png" /> Urb. Los Álamos<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_31.png" /> Urb. Limonal Abajo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_32.png" /> Urb. La Española<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_33.png" /> Urb. La Catalina<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_34.png" /> Urb. La Arboleda<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_35.png" /> Urb. Jardines del Yaque<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_36.png" /> Urb. Jardines del Este<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_37.png" /> Urb. Fernando Valerio<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_38.png" /> Urb. El Embrujo III 1era Etapa<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_39.png" /> Urb. Arroyo Hondo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_40.png" /> San José<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_41.png" /> Sabaneta de las Palomas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_42.png" /> Rincón Largo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_43.png" /> Residencial Jaidy<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_44.png" /> Residencial Iris<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_45.png" /> Residencial Amapola<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_46.png" /> Res. Vista Linda<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_47.png" /> Res. Villa Sorángel<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_48.png" /> Res. Villa Magisterial<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_49.png" /> Res. Vargas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_50.png" /> Res. Valle Verde II<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_51.png" /> Res. Valle Verde I<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_52.png" /> Res. Praderas del Norte<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_53.png" /> Res. Pontezuela<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_54.png" /> Res. Nicole<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_55.png" /> Res. Cerros de Doña Julia<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_56.png" /> Reparto Universitario<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_57.png" /> Reparto Tavares Oeste<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_58.png" /> Reparto Tavares Este<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_59.png" /> Reparto Santiago Apóstol<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_60.png" /> Reparto Panorama<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_61.png" /> Reparto Kokette<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_62.png" /> Reparto Imperial<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_63.png" /> Reparto Ilusión<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_64.png" /> Reparto Haché<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_65.png" /> Reparto del Este<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_66.png" /> Rep. Flamboyán<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_67.png" /> Quintas de Rincón Largo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_68.png" /> Quebrada Honda<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_69.png" /> Primavera<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_70.png" /> Pontezuela al Medio<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_71.png" /> Pontezuela Abajo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_72.png" /> Pekín<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_73.png" /> Nuevo Amanecer<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_74.png" /> Nibaje<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_75.png" /> Monte Adentro Abajo o Las Aromas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_76.png" /> Marilópez<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_77.png" /> Margen del rÍo Yaque del Norte<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_78.png" /> Los Robles<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_79.png" /> Los Quemados<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_80.png" /> Los Prados<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_81.png" /> Los Pepines<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_82.png" /> Los Jazmines<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_83.png" /> Los Hidalgos<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_84.png" /> Los Guandules<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_85.png" /> Los Colegios<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_86.png" /> Los Cirises<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_87.png" /> Los Cajuiles<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_88.png" /> Los Ángeles<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_89.png" /> Llanos de Gurabo II<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_90.png" /> Las tres cruces<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_91.png" /> Las Praderas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_92.png" /> Las Hortensias<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_93.png" /> Las Dianas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_94.png" /> Las Damas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_95.png" /> Las Carmelitas<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_96.png" /> La Rosaleda<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_97.png" /> La Rinconada<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_98.png" /> La Noriega<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_99.png" /> La Moraleja<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_100.png" /> La Mina<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_101.png" /> La Junta<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_102.png" /> La Islita<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_103.png" /> La Flor<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_104.png" /> La Fardiquera<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_105.png" /> La Esmeralda<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_106.png" /> La Cartonera<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_107.png" /> Kilómetro 6 1/2 (antiguo Kilómetro 7)<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_108.png" /> Kilómetro 5 1/2 (antiguo Kilómetro 6 1/2)<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_109.png" /> Kilómetro 4 1/2 (antiguo Kilómetro 6)<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_110.png" /> Jardines Dorado<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_111.png" /> Hoya del Caimito<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_112.png" /> Hato Mayor<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_113.png" /> Ensanche Ortega<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_114.png" /> Embrujo III 2da Etapa<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_115.png" /> El Retiro<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_116.png" /> El Papayo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_117.png" /> El Ensueño<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_118.png" /> El Embrujo II<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_119.png" /> El Embrujo I<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_120.png" /> El Dorado II<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_121.png" /> El Dorado I<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_122.png" /> El Despertar<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_123.png" /> Don Pedro Arriba (Monte Peña)<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_124.png" /> Don Pedro Abajo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_125.png" /> Cristo Rey<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_126.png" /> Corea<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_127.png" /> Conani<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_128.png" /> Colinas del Sur<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_129.png" /> Club de Los Militares<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_130.png" /> Cerros del Castillo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_131.png" /> Centro Histórico<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_132.png" /> Centro Ciudad Norte<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_133.png" /> Campus Universitario (PUCMM)<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_134.png" /> Camboya<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_135.png" /> Brisas del Este<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_136.png" /> Barrio Obrero<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_137.png" /> Barrio Los Militares<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_138.png" /> Barrio Lindo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_139.png" /> Arroyo Hondo Arriba<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_140.png" /> Arroyo Hondo Abajo<br />\
    <img src="styles/legend/SUBBARRIOSCIRC3_1_141.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_SUBBARRIOSCIRC3_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SUBBARRIOSCIRC3_1];
lyr_SUBBARRIOSCIRC3_1.set('fieldAliases', {'Nombre': 'Nombre', 'Sector': 'Sector', });
lyr_SUBBARRIOSCIRC3_1.set('fieldImages', {'Nombre': 'TextEdit', 'Sector': 'TextEdit', });
lyr_SUBBARRIOSCIRC3_1.set('fieldLabels', {'Nombre': 'inline label', 'Sector': 'inline label', });
lyr_SUBBARRIOSCIRC3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});