var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKabupaten_1 = new ol.format.GeoJSON();
var features_BatasKabupaten_1 = format_BatasKabupaten_1.readFeatures(json_BatasKabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_1.addFeatures(features_BatasKabupaten_1);
var lyr_BatasKabupaten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_1, 
                style: style_BatasKabupaten_1,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_1.png" /> Batas Kabupaten'
            });
var format_BatasKecamatan_2 = new ol.format.GeoJSON();
var features_BatasKecamatan_2 = format_BatasKecamatan_2.readFeatures(json_BatasKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_2.addFeatures(features_BatasKecamatan_2);
var lyr_BatasKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_2, 
                style: style_BatasKecamatan_2,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_2.png" /> Batas Kecamatan'
            });
var format_RuteJenang22shortest_path_3 = new ol.format.GeoJSON();
var features_RuteJenang22shortest_path_3 = format_RuteJenang22shortest_path_3.readFeatures(json_RuteJenang22shortest_path_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenang22shortest_path_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenang22shortest_path_3.addFeatures(features_RuteJenang22shortest_path_3);
var lyr_RuteJenang22shortest_path_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenang22shortest_path_3, 
                style: style_RuteJenang22shortest_path_3,
                popuplayertitle: 'Rute Jenang 22 — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenang22shortest_path_3.png" /> Rute Jenang 22 — shortest_path'
            });
var format_RuteJenangAsiaAminahrute_jenang_asia_aminah_4 = new ol.format.GeoJSON();
var features_RuteJenangAsiaAminahrute_jenang_asia_aminah_4 = format_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.readFeatures(json_RuteJenangAsiaAminahrute_jenang_asia_aminah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangAsiaAminahrute_jenang_asia_aminah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.addFeatures(features_RuteJenangAsiaAminahrute_jenang_asia_aminah_4);
var lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangAsiaAminahrute_jenang_asia_aminah_4, 
                style: style_RuteJenangAsiaAminahrute_jenang_asia_aminah_4,
                popuplayertitle: 'Rute Jenang Asia Aminah — rute_jenang_asia_aminah',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangAsiaAminahrute_jenang_asia_aminah_4.png" /> Rute Jenang Asia Aminah — rute_jenang_asia_aminah'
            });
var format_RuteJenangBintangKurniashortest_path_5 = new ol.format.GeoJSON();
var features_RuteJenangBintangKurniashortest_path_5 = format_RuteJenangBintangKurniashortest_path_5.readFeatures(json_RuteJenangBintangKurniashortest_path_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangBintangKurniashortest_path_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangBintangKurniashortest_path_5.addFeatures(features_RuteJenangBintangKurniashortest_path_5);
var lyr_RuteJenangBintangKurniashortest_path_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangBintangKurniashortest_path_5, 
                style: style_RuteJenangBintangKurniashortest_path_5,
                popuplayertitle: 'Rute Jenang Bintang Kurnia — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangBintangKurniashortest_path_5.png" /> Rute Jenang Bintang Kurnia — shortest_path'
            });
var format_RuteJenangKaromahshortest_path_6 = new ol.format.GeoJSON();
var features_RuteJenangKaromahshortest_path_6 = format_RuteJenangKaromahshortest_path_6.readFeatures(json_RuteJenangKaromahshortest_path_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKaromahshortest_path_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKaromahshortest_path_6.addFeatures(features_RuteJenangKaromahshortest_path_6);
var lyr_RuteJenangKaromahshortest_path_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKaromahshortest_path_6, 
                style: style_RuteJenangKaromahshortest_path_6,
                popuplayertitle: 'Rute Jenang Karomah — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKaromahshortest_path_6.png" /> Rute Jenang Karomah — shortest_path'
            });
var format_RuteJenangKudus1shortest_path_7 = new ol.format.GeoJSON();
var features_RuteJenangKudus1shortest_path_7 = format_RuteJenangKudus1shortest_path_7.readFeatures(json_RuteJenangKudus1shortest_path_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudus1shortest_path_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudus1shortest_path_7.addFeatures(features_RuteJenangKudus1shortest_path_7);
var lyr_RuteJenangKudus1shortest_path_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudus1shortest_path_7, 
                style: style_RuteJenangKudus1shortest_path_7,
                popuplayertitle: 'Rute Jenang Kudus 1 — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudus1shortest_path_7.png" /> Rute Jenang Kudus 1 — shortest_path'
            });
var format_RuteJenangKudusArminashortest_path_8 = new ol.format.GeoJSON();
var features_RuteJenangKudusArminashortest_path_8 = format_RuteJenangKudusArminashortest_path_8.readFeatures(json_RuteJenangKudusArminashortest_path_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudusArminashortest_path_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudusArminashortest_path_8.addFeatures(features_RuteJenangKudusArminashortest_path_8);
var lyr_RuteJenangKudusArminashortest_path_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudusArminashortest_path_8, 
                style: style_RuteJenangKudusArminashortest_path_8,
                popuplayertitle: 'Rute Jenang Kudus Armina — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudusArminashortest_path_8.png" /> Rute Jenang Kudus Armina — shortest_path'
            });
var format_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9 = new ol.format.GeoJSON();
var features_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9 = format_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.readFeatures(json_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.addFeatures(features_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9);
var lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9, 
                style: style_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9,
                popuplayertitle: 'Rute Jenang Kudus Barokah Asli — rute_jenang_kudus_barokah_asli',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.png" /> Rute Jenang Kudus Barokah Asli — rute_jenang_kudus_barokah_asli'
            });
var format_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10 = new ol.format.GeoJSON();
var features_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10 = format_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.readFeatures(json_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.addFeatures(features_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10);
var lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10, 
                style: style_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10,
                popuplayertitle: 'Rute Jenang Kudus Hikmah — rute_jenang_kudus_hikmah',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.png" /> Rute Jenang Kudus Hikmah — rute_jenang_kudus_hikmah'
            });
var format_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11 = new ol.format.GeoJSON();
var features_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11 = format_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.readFeatures(json_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.addFeatures(features_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11);
var lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11, 
                style: style_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11,
                popuplayertitle: 'Rute Jenang Kudus Mak Yati — rute_jenang_kudus_mak_yati',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.png" /> Rute Jenang Kudus Mak Yati — rute_jenang_kudus_mak_yati'
            });
var format_RuteJenangKudusMenarashortest_path_12 = new ol.format.GeoJSON();
var features_RuteJenangKudusMenarashortest_path_12 = format_RuteJenangKudusMenarashortest_path_12.readFeatures(json_RuteJenangKudusMenarashortest_path_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangKudusMenarashortest_path_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangKudusMenarashortest_path_12.addFeatures(features_RuteJenangKudusMenarashortest_path_12);
var lyr_RuteJenangKudusMenarashortest_path_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangKudusMenarashortest_path_12, 
                style: style_RuteJenangKudusMenarashortest_path_12,
                popuplayertitle: 'Rute Jenang Kudus Menara — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangKudusMenarashortest_path_12.png" /> Rute Jenang Kudus Menara — shortest_path'
            });
var format_RuteJenangMarlinashortest_path_13 = new ol.format.GeoJSON();
var features_RuteJenangMarlinashortest_path_13 = format_RuteJenangMarlinashortest_path_13.readFeatures(json_RuteJenangMarlinashortest_path_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangMarlinashortest_path_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangMarlinashortest_path_13.addFeatures(features_RuteJenangMarlinashortest_path_13);
var lyr_RuteJenangMarlinashortest_path_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangMarlinashortest_path_13, 
                style: style_RuteJenangMarlinashortest_path_13,
                popuplayertitle: 'Rute Jenang Marlina — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangMarlinashortest_path_13.png" /> Rute Jenang Marlina — shortest_path'
            });
var format_RuteJenangMubarokshortest_path_14 = new ol.format.GeoJSON();
var features_RuteJenangMubarokshortest_path_14 = format_RuteJenangMubarokshortest_path_14.readFeatures(json_RuteJenangMubarokshortest_path_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangMubarokshortest_path_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangMubarokshortest_path_14.addFeatures(features_RuteJenangMubarokshortest_path_14);
var lyr_RuteJenangMubarokshortest_path_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangMubarokshortest_path_14, 
                style: style_RuteJenangMubarokshortest_path_14,
                popuplayertitle: 'Rute Jenang Mubarok — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangMubarokshortest_path_14.png" /> Rute Jenang Mubarok — shortest_path'
            });
var format_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15 = new ol.format.GeoJSON();
var features_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15 = format_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.readFeatures(json_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.addFeatures(features_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15);
var lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15, 
                style: style_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15,
                popuplayertitle: 'Rute Jenang Rasa Abadi Kudus — rute_jenang_rasa_abadi_kudus',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.png" /> Rute Jenang Rasa Abadi Kudus — rute_jenang_rasa_abadi_kudus'
            });
var format_RuteJenangYasminshortest_path_16 = new ol.format.GeoJSON();
var features_RuteJenangYasminshortest_path_16 = format_RuteJenangYasminshortest_path_16.readFeatures(json_RuteJenangYasminshortest_path_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteJenangYasminshortest_path_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteJenangYasminshortest_path_16.addFeatures(features_RuteJenangYasminshortest_path_16);
var lyr_RuteJenangYasminshortest_path_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteJenangYasminshortest_path_16, 
                style: style_RuteJenangYasminshortest_path_16,
                popuplayertitle: 'Rute Jenang Yasmin — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteJenangYasminshortest_path_16.png" /> Rute Jenang Yasmin — shortest_path'
            });
var format_RutePusatJenangMataharirute_pusat_jenang_matahari_17 = new ol.format.GeoJSON();
var features_RutePusatJenangMataharirute_pusat_jenang_matahari_17 = format_RutePusatJenangMataharirute_pusat_jenang_matahari_17.readFeatures(json_RutePusatJenangMataharirute_pusat_jenang_matahari_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutePusatJenangMataharirute_pusat_jenang_matahari_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutePusatJenangMataharirute_pusat_jenang_matahari_17.addFeatures(features_RutePusatJenangMataharirute_pusat_jenang_matahari_17);
var lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutePusatJenangMataharirute_pusat_jenang_matahari_17, 
                style: style_RutePusatJenangMataharirute_pusat_jenang_matahari_17,
                popuplayertitle: 'Rute Pusat Jenang Matahari — rute_pusat_jenang_matahari',
                interactive: true,
                title: '<img src="styles/legend/RutePusatJenangMataharirute_pusat_jenang_matahari_17.png" /> Rute Pusat Jenang Matahari — rute_pusat_jenang_matahari'
            });
var format_Kelapakelapa_18 = new ol.format.GeoJSON();
var features_Kelapakelapa_18 = format_Kelapakelapa_18.readFeatures(json_Kelapakelapa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelapakelapa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelapakelapa_18.addFeatures(features_Kelapakelapa_18);
var lyr_Kelapakelapa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelapakelapa_18, 
                style: style_Kelapakelapa_18,
                popuplayertitle: 'Kelapa — kelapa',
                interactive: true,
    title: 'Kelapa — kelapa<br />\
    <img src="styles/legend/Kelapakelapa_18_0.png" /> Rendah<br />\
    <img src="styles/legend/Kelapakelapa_18_1.png" /> Sedang<br />\
    <img src="styles/legend/Kelapakelapa_18_2.png" /> Tinggi<br />' });
var format_DemandKelapademand_kelapa_19 = new ol.format.GeoJSON();
var features_DemandKelapademand_kelapa_19 = format_DemandKelapademand_kelapa_19.readFeatures(json_DemandKelapademand_kelapa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemandKelapademand_kelapa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandKelapademand_kelapa_19.addFeatures(features_DemandKelapademand_kelapa_19);
var lyr_DemandKelapademand_kelapa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandKelapademand_kelapa_19, 
                style: style_DemandKelapademand_kelapa_19,
                popuplayertitle: 'Demand Kelapa — demand_kelapa',
                interactive: true,
                title: '<img src="styles/legend/DemandKelapademand_kelapa_19.png" /> Demand Kelapa — demand_kelapa'
            });
var format_SupplyKelapatitik_supply_kelapa_20 = new ol.format.GeoJSON();
var features_SupplyKelapatitik_supply_kelapa_20 = format_SupplyKelapatitik_supply_kelapa_20.readFeatures(json_SupplyKelapatitik_supply_kelapa_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupplyKelapatitik_supply_kelapa_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupplyKelapatitik_supply_kelapa_20.addFeatures(features_SupplyKelapatitik_supply_kelapa_20);
var lyr_SupplyKelapatitik_supply_kelapa_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupplyKelapatitik_supply_kelapa_20, 
                style: style_SupplyKelapatitik_supply_kelapa_20,
                popuplayertitle: 'Supply Kelapa — titik_supply_kelapa',
                interactive: true,
                title: '<img src="styles/legend/SupplyKelapatitik_supply_kelapa_20.png" /> Supply Kelapa — titik_supply_kelapa'
            });
var format_RuteKopiMuriaAffaniKajarshortest_path_21 = new ol.format.GeoJSON();
var features_RuteKopiMuriaAffaniKajarshortest_path_21 = format_RuteKopiMuriaAffaniKajarshortest_path_21.readFeatures(json_RuteKopiMuriaAffaniKajarshortest_path_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaAffaniKajarshortest_path_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaAffaniKajarshortest_path_21.addFeatures(features_RuteKopiMuriaAffaniKajarshortest_path_21);
var lyr_RuteKopiMuriaAffaniKajarshortest_path_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaAffaniKajarshortest_path_21, 
                style: style_RuteKopiMuriaAffaniKajarshortest_path_21,
                popuplayertitle: 'Rute Kopi Muria Affani Kajar — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaAffaniKajarshortest_path_21.png" /> Rute Kopi Muria Affani Kajar — shortest_path'
            });
var format_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22 = new ol.format.GeoJSON();
var features_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22 = format_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.readFeatures(json_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.addFeatures(features_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22);
var lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22, 
                style: style_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22,
                popuplayertitle: 'Rute Kopi Muria Anarkopi — rute_kopi_muria_anarkopi',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.png" /> Rute Kopi Muria Anarkopi — rute_kopi_muria_anarkopi'
            });
var format_RuteKopiMuriaDewi29shortest_path_23 = new ol.format.GeoJSON();
var features_RuteKopiMuriaDewi29shortest_path_23 = format_RuteKopiMuriaDewi29shortest_path_23.readFeatures(json_RuteKopiMuriaDewi29shortest_path_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaDewi29shortest_path_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaDewi29shortest_path_23.addFeatures(features_RuteKopiMuriaDewi29shortest_path_23);
var lyr_RuteKopiMuriaDewi29shortest_path_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaDewi29shortest_path_23, 
                style: style_RuteKopiMuriaDewi29shortest_path_23,
                popuplayertitle: 'Rute Kopi Muria Dewi 29 — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaDewi29shortest_path_23.png" /> Rute Kopi Muria Dewi 29 — shortest_path'
            });
var format_RuteKopiMuriaIthengshortest_path_24 = new ol.format.GeoJSON();
var features_RuteKopiMuriaIthengshortest_path_24 = format_RuteKopiMuriaIthengshortest_path_24.readFeatures(json_RuteKopiMuriaIthengshortest_path_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaIthengshortest_path_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaIthengshortest_path_24.addFeatures(features_RuteKopiMuriaIthengshortest_path_24);
var lyr_RuteKopiMuriaIthengshortest_path_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaIthengshortest_path_24, 
                style: style_RuteKopiMuriaIthengshortest_path_24,
                popuplayertitle: 'Rute Kopi Muria Itheng — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaIthengshortest_path_24.png" /> Rute Kopi Muria Itheng — shortest_path'
            });
var format_RuteKopiMuriaMuracorute_kopi_muria_muraco_25 = new ol.format.GeoJSON();
var features_RuteKopiMuriaMuracorute_kopi_muria_muraco_25 = format_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.readFeatures(json_RuteKopiMuriaMuracorute_kopi_muria_muraco_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaMuracorute_kopi_muria_muraco_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.addFeatures(features_RuteKopiMuriaMuracorute_kopi_muria_muraco_25);
var lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaMuracorute_kopi_muria_muraco_25, 
                style: style_RuteKopiMuriaMuracorute_kopi_muria_muraco_25,
                popuplayertitle: 'Rute Kopi Muria Muraco — rute_kopi_muria_muraco',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaMuracorute_kopi_muria_muraco_25.png" /> Rute Kopi Muria Muraco — rute_kopi_muria_muraco'
            });
var format_RuteKopiMuriaNimatshortest_path_26 = new ol.format.GeoJSON();
var features_RuteKopiMuriaNimatshortest_path_26 = format_RuteKopiMuriaNimatshortest_path_26.readFeatures(json_RuteKopiMuriaNimatshortest_path_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaNimatshortest_path_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaNimatshortest_path_26.addFeatures(features_RuteKopiMuriaNimatshortest_path_26);
var lyr_RuteKopiMuriaNimatshortest_path_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaNimatshortest_path_26, 
                style: style_RuteKopiMuriaNimatshortest_path_26,
                popuplayertitle: 'Rute Kopi Muria Ni\'mat — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaNimatshortest_path_26.png" /> Rute Kopi Muria Ni\'mat — shortest_path'
            });
var format_RuteKopiMuriaOtentikshortest_path_27 = new ol.format.GeoJSON();
var features_RuteKopiMuriaOtentikshortest_path_27 = format_RuteKopiMuriaOtentikshortest_path_27.readFeatures(json_RuteKopiMuriaOtentikshortest_path_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaOtentikshortest_path_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaOtentikshortest_path_27.addFeatures(features_RuteKopiMuriaOtentikshortest_path_27);
var lyr_RuteKopiMuriaOtentikshortest_path_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaOtentikshortest_path_27, 
                style: style_RuteKopiMuriaOtentikshortest_path_27,
                popuplayertitle: 'Rute Kopi Muria Otentik — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaOtentikshortest_path_27.png" /> Rute Kopi Muria Otentik — shortest_path'
            });
var format_RuteKopiMuriaWilhelminashortest_path_28 = new ol.format.GeoJSON();
var features_RuteKopiMuriaWilhelminashortest_path_28 = format_RuteKopiMuriaWilhelminashortest_path_28.readFeatures(json_RuteKopiMuriaWilhelminashortest_path_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaWilhelminashortest_path_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaWilhelminashortest_path_28.addFeatures(features_RuteKopiMuriaWilhelminashortest_path_28);
var lyr_RuteKopiMuriaWilhelminashortest_path_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaWilhelminashortest_path_28, 
                style: style_RuteKopiMuriaWilhelminashortest_path_28,
                popuplayertitle: 'Rute Kopi Muria Wilhelmina — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaWilhelminashortest_path_28.png" /> Rute Kopi Muria Wilhelmina — shortest_path'
            });
var format_RuteKopiMuriaZaynarute_kopi_muria_zayna_29 = new ol.format.GeoJSON();
var features_RuteKopiMuriaZaynarute_kopi_muria_zayna_29 = format_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.readFeatures(json_RuteKopiMuriaZaynarute_kopi_muria_zayna_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKopiMuriaZaynarute_kopi_muria_zayna_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.addFeatures(features_RuteKopiMuriaZaynarute_kopi_muria_zayna_29);
var lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKopiMuriaZaynarute_kopi_muria_zayna_29, 
                style: style_RuteKopiMuriaZaynarute_kopi_muria_zayna_29,
                popuplayertitle: 'Rute Kopi Muria Zayna — rute_kopi_muria_zayna',
                interactive: true,
                title: '<img src="styles/legend/RuteKopiMuriaZaynarute_kopi_muria_zayna_29.png" /> Rute Kopi Muria Zayna — rute_kopi_muria_zayna'
            });
var format_Kopikopi_30 = new ol.format.GeoJSON();
var features_Kopikopi_30 = format_Kopikopi_30.readFeatures(json_Kopikopi_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kopikopi_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kopikopi_30.addFeatures(features_Kopikopi_30);
var lyr_Kopikopi_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kopikopi_30, 
                style: style_Kopikopi_30,
                popuplayertitle: 'Kopi — kopi',
                interactive: true,
    title: 'Kopi — kopi<br />\
    <img src="styles/legend/Kopikopi_30_0.png" /> Rendah<br />\
    <img src="styles/legend/Kopikopi_30_1.png" /> Tinggi<br />' });
var format_DemandKopi_31 = new ol.format.GeoJSON();
var features_DemandKopi_31 = format_DemandKopi_31.readFeatures(json_DemandKopi_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemandKopi_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandKopi_31.addFeatures(features_DemandKopi_31);
var lyr_DemandKopi_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandKopi_31, 
                style: style_DemandKopi_31,
                popuplayertitle: 'Demand Kopi',
                interactive: true,
                title: '<img src="styles/legend/DemandKopi_31.png" /> Demand Kopi'
            });
var format_SupplyKopi_32 = new ol.format.GeoJSON();
var features_SupplyKopi_32 = format_SupplyKopi_32.readFeatures(json_SupplyKopi_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupplyKopi_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupplyKopi_32.addFeatures(features_SupplyKopi_32);
var lyr_SupplyKopi_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupplyKopi_32, 
                style: style_SupplyKopi_32,
                popuplayertitle: 'Supply Kopi',
                interactive: true,
                title: '<img src="styles/legend/SupplyKopi_32.png" /> Supply Kopi'
            });
var format_RuteAgenTebuPakMujiKudusshortest_path_33 = new ol.format.GeoJSON();
var features_RuteAgenTebuPakMujiKudusshortest_path_33 = format_RuteAgenTebuPakMujiKudusshortest_path_33.readFeatures(json_RuteAgenTebuPakMujiKudusshortest_path_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteAgenTebuPakMujiKudusshortest_path_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteAgenTebuPakMujiKudusshortest_path_33.addFeatures(features_RuteAgenTebuPakMujiKudusshortest_path_33);
var lyr_RuteAgenTebuPakMujiKudusshortest_path_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteAgenTebuPakMujiKudusshortest_path_33, 
                style: style_RuteAgenTebuPakMujiKudusshortest_path_33,
                popuplayertitle: 'Rute Agen Tebu Pak Muji Kudus — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteAgenTebuPakMujiKudusshortest_path_33.png" /> Rute Agen Tebu Pak Muji Kudus — shortest_path'
            });
var format_RuteKebonTeburute_kebon_tebu_34 = new ol.format.GeoJSON();
var features_RuteKebonTeburute_kebon_tebu_34 = format_RuteKebonTeburute_kebon_tebu_34.readFeatures(json_RuteKebonTeburute_kebon_tebu_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKebonTeburute_kebon_tebu_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKebonTeburute_kebon_tebu_34.addFeatures(features_RuteKebonTeburute_kebon_tebu_34);
var lyr_RuteKebonTeburute_kebon_tebu_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKebonTeburute_kebon_tebu_34, 
                style: style_RuteKebonTeburute_kebon_tebu_34,
                popuplayertitle: 'Rute Kebon Tebu — rute_kebon_tebu',
                interactive: true,
                title: '<img src="styles/legend/RuteKebonTeburute_kebon_tebu_34.png" /> Rute Kebon Tebu — rute_kebon_tebu'
            });
var format_RuteRumahGulaKudusrute_rumah_gula_kudus_35 = new ol.format.GeoJSON();
var features_RuteRumahGulaKudusrute_rumah_gula_kudus_35 = format_RuteRumahGulaKudusrute_rumah_gula_kudus_35.readFeatures(json_RuteRumahGulaKudusrute_rumah_gula_kudus_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteRumahGulaKudusrute_rumah_gula_kudus_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteRumahGulaKudusrute_rumah_gula_kudus_35.addFeatures(features_RuteRumahGulaKudusrute_rumah_gula_kudus_35);
var lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteRumahGulaKudusrute_rumah_gula_kudus_35, 
                style: style_RuteRumahGulaKudusrute_rumah_gula_kudus_35,
                popuplayertitle: 'Rute Rumah Gula Kudus — rute_rumah_gula_kudus',
                interactive: true,
                title: '<img src="styles/legend/RuteRumahGulaKudusrute_rumah_gula_kudus_35.png" /> Rute Rumah Gula Kudus — rute_rumah_gula_kudus'
            });
var format_RuteSirupCapManggisrute_sirup_cap_manggis_36 = new ol.format.GeoJSON();
var features_RuteSirupCapManggisrute_sirup_cap_manggis_36 = format_RuteSirupCapManggisrute_sirup_cap_manggis_36.readFeatures(json_RuteSirupCapManggisrute_sirup_cap_manggis_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupCapManggisrute_sirup_cap_manggis_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupCapManggisrute_sirup_cap_manggis_36.addFeatures(features_RuteSirupCapManggisrute_sirup_cap_manggis_36);
var lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupCapManggisrute_sirup_cap_manggis_36, 
                style: style_RuteSirupCapManggisrute_sirup_cap_manggis_36,
                popuplayertitle: 'Rute Sirup Cap Manggis — rute_sirup_cap_manggis',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupCapManggisrute_sirup_cap_manggis_36.png" /> Rute Sirup Cap Manggis — rute_sirup_cap_manggis'
            });
var format_RuteSirupMuriaAgungrute_sirup_muria_agung_37 = new ol.format.GeoJSON();
var features_RuteSirupMuriaAgungrute_sirup_muria_agung_37 = format_RuteSirupMuriaAgungrute_sirup_muria_agung_37.readFeatures(json_RuteSirupMuriaAgungrute_sirup_muria_agung_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupMuriaAgungrute_sirup_muria_agung_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupMuriaAgungrute_sirup_muria_agung_37.addFeatures(features_RuteSirupMuriaAgungrute_sirup_muria_agung_37);
var lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupMuriaAgungrute_sirup_muria_agung_37, 
                style: style_RuteSirupMuriaAgungrute_sirup_muria_agung_37,
                popuplayertitle: 'Rute Sirup Muria Agung — rute_sirup_muria_agung',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupMuriaAgungrute_sirup_muria_agung_37.png" /> Rute Sirup Muria Agung — rute_sirup_muria_agung'
            });
var format_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38 = new ol.format.GeoJSON();
var features_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38 = format_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.readFeatures(json_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.addFeatures(features_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38);
var lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38, 
                style: style_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38,
                popuplayertitle: 'Rute Sirup Parijotho Alammu — rute_sirup_parijotho_alammu',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.png" /> Rute Sirup Parijotho Alammu — rute_sirup_parijotho_alammu'
            });
var format_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39 = new ol.format.GeoJSON();
var features_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39 = format_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.readFeatures(json_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.addFeatures(features_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39);
var lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39, 
                style: style_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39,
                popuplayertitle: 'Rute Sirup Parijotho Meethos — rute_sirup_parijoto_meethos',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.png" /> Rute Sirup Parijotho Meethos — rute_sirup_parijoto_meethos'
            });
var format_RuteSirupPopirute_sirup_popi_40 = new ol.format.GeoJSON();
var features_RuteSirupPopirute_sirup_popi_40 = format_RuteSirupPopirute_sirup_popi_40.readFeatures(json_RuteSirupPopirute_sirup_popi_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupPopirute_sirup_popi_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupPopirute_sirup_popi_40.addFeatures(features_RuteSirupPopirute_sirup_popi_40);
var lyr_RuteSirupPopirute_sirup_popi_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupPopirute_sirup_popi_40, 
                style: style_RuteSirupPopirute_sirup_popi_40,
                popuplayertitle: 'Rute Sirup Popi — rute_sirup_popi',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupPopirute_sirup_popi_40.png" /> Rute Sirup Popi — rute_sirup_popi'
            });
var format_RuteSirupYogasDelimarute_sirup_yogas_delima_41 = new ol.format.GeoJSON();
var features_RuteSirupYogasDelimarute_sirup_yogas_delima_41 = format_RuteSirupYogasDelimarute_sirup_yogas_delima_41.readFeatures(json_RuteSirupYogasDelimarute_sirup_yogas_delima_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSirupYogasDelimarute_sirup_yogas_delima_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSirupYogasDelimarute_sirup_yogas_delima_41.addFeatures(features_RuteSirupYogasDelimarute_sirup_yogas_delima_41);
var lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSirupYogasDelimarute_sirup_yogas_delima_41, 
                style: style_RuteSirupYogasDelimarute_sirup_yogas_delima_41,
                popuplayertitle: 'Rute Sirup Yogas Delima — rute_sirup_yogas_delima',
                interactive: true,
                title: '<img src="styles/legend/RuteSirupYogasDelimarute_sirup_yogas_delima_41.png" /> Rute Sirup Yogas Delima — rute_sirup_yogas_delima'
            });
var format_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42 = new ol.format.GeoJSON();
var features_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42 = format_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.readFeatures(json_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.addFeatures(features_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42);
var lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42, 
                style: style_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42,
                popuplayertitle: 'Rute Suplyer Tebu Ijo dan Mesin Tebu Ijo — shortest_path',
                interactive: true,
                title: '<img src="styles/legend/RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.png" /> Rute Suplyer Tebu Ijo dan Mesin Tebu Ijo — shortest_path'
            });
var format_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43 = new ol.format.GeoJSON();
var features_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43 = format_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.readFeatures(json_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.addFeatures(features_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43);
var lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43, 
                style: style_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43,
                popuplayertitle: 'Rute Agen Tebu Ijo Kudus Bapak Zidi — rute_agen_tebu_ijo_kudus_bapak_zidi',
                interactive: true,
                title: '<img src="styles/legend/RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.png" /> Rute Agen Tebu Ijo Kudus Bapak Zidi — rute_agen_tebu_ijo_kudus_bapak_zidi'
            });
var format_Tebutebu_44 = new ol.format.GeoJSON();
var features_Tebutebu_44 = format_Tebutebu_44.readFeatures(json_Tebutebu_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tebutebu_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tebutebu_44.addFeatures(features_Tebutebu_44);
var lyr_Tebutebu_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tebutebu_44, 
                style: style_Tebutebu_44,
                popuplayertitle: 'Tebu — tebu',
                interactive: true,
    title: 'Tebu — tebu<br />\
    <img src="styles/legend/Tebutebu_44_0.png" /> Rendah<br />\
    <img src="styles/legend/Tebutebu_44_1.png" /> Sedang<br />\
    <img src="styles/legend/Tebutebu_44_2.png" /> Tinggi<br />' });
var format_TitikDemandTebu_45 = new ol.format.GeoJSON();
var features_TitikDemandTebu_45 = format_TitikDemandTebu_45.readFeatures(json_TitikDemandTebu_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikDemandTebu_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikDemandTebu_45.addFeatures(features_TitikDemandTebu_45);
var lyr_TitikDemandTebu_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikDemandTebu_45, 
                style: style_TitikDemandTebu_45,
                popuplayertitle: 'Titik Demand Tebu',
                interactive: true,
    title: 'Titik Demand Tebu<br />\
    <img src="styles/legend/TitikDemandTebu_45_0.png" /> Gula Jawa dan Gula Merah<br />\
    <img src="styles/legend/TitikDemandTebu_45_1.png" /> Sirup<br />\
    <img src="styles/legend/TitikDemandTebu_45_2.png" /> Tebu<br />' });
var format_TitikSuplyTebu_46 = new ol.format.GeoJSON();
var features_TitikSuplyTebu_46 = format_TitikSuplyTebu_46.readFeatures(json_TitikSuplyTebu_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSuplyTebu_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSuplyTebu_46.addFeatures(features_TitikSuplyTebu_46);
var lyr_TitikSuplyTebu_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSuplyTebu_46, 
                style: style_TitikSuplyTebu_46,
                popuplayertitle: 'Titik Suply Tebu',
                interactive: true,
                title: '<img src="styles/legend/TitikSuplyTebu_46.png" /> Titik Suply Tebu'
            });
var format_JaringanJalanKudus_47 = new ol.format.GeoJSON();
var features_JaringanJalanKudus_47 = format_JaringanJalanKudus_47.readFeatures(json_JaringanJalanKudus_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKudus_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKudus_47.addFeatures(features_JaringanJalanKudus_47);
var lyr_JaringanJalanKudus_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKudus_47, 
                style: style_JaringanJalanKudus_47,
                popuplayertitle: 'Jaringan Jalan Kudus',
                interactive: true,
    title: 'Jaringan Jalan Kudus<br />\
    <img src="styles/legend/JaringanJalanKudus_47_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalanKudus_47_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalanKudus_47_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalanKudus_47_3.png" /> Jalan Lingkungan<br />' });
var group_RencanaSupplyDemandTebu = new ol.layer.Group({
                                layers: [lyr_Tebutebu_44,lyr_TitikDemandTebu_45,lyr_TitikSuplyTebu_46,],
                                fold: "open",
                                title: 'Rencana Supply-Demand Tebu'});
var group_RuteTebu = new ol.layer.Group({
                                layers: [lyr_RuteAgenTebuPakMujiKudusshortest_path_33,lyr_RuteKebonTeburute_kebon_tebu_34,lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35,lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36,lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37,lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38,lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39,lyr_RuteSirupPopirute_sirup_popi_40,lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41,lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42,lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43,],
                                fold: "open",
                                title: 'Rute Tebu'});
var group_RencanaSupplyDemandKopi = new ol.layer.Group({
                                layers: [lyr_Kopikopi_30,lyr_DemandKopi_31,lyr_SupplyKopi_32,],
                                fold: "open",
                                title: 'Rencana Supply-Demand Kopi'});
var group_RuteKopi = new ol.layer.Group({
                                layers: [lyr_RuteKopiMuriaAffaniKajarshortest_path_21,lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22,lyr_RuteKopiMuriaDewi29shortest_path_23,lyr_RuteKopiMuriaIthengshortest_path_24,lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25,lyr_RuteKopiMuriaNimatshortest_path_26,lyr_RuteKopiMuriaOtentikshortest_path_27,lyr_RuteKopiMuriaWilhelminashortest_path_28,lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29,],
                                fold: "open",
                                title: 'Rute Kopi'});
var group_RencanaSupplyDemandKelapa = new ol.layer.Group({
                                layers: [lyr_Kelapakelapa_18,lyr_DemandKelapademand_kelapa_19,lyr_SupplyKelapatitik_supply_kelapa_20,],
                                fold: "open",
                                title: 'Rencana Supply-Demand Kelapa'});
var group_RuteKelapa = new ol.layer.Group({
                                layers: [lyr_RuteJenang22shortest_path_3,lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4,lyr_RuteJenangBintangKurniashortest_path_5,lyr_RuteJenangKaromahshortest_path_6,lyr_RuteJenangKudus1shortest_path_7,lyr_RuteJenangKudusArminashortest_path_8,lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9,lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10,lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11,lyr_RuteJenangKudusMenarashortest_path_12,lyr_RuteJenangMarlinashortest_path_13,lyr_RuteJenangMubarokshortest_path_14,lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15,lyr_RuteJenangYasminshortest_path_16,lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17,],
                                fold: "open",
                                title: 'Rute Kelapa'});
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasKabupaten_1,lyr_BatasKecamatan_2,],
                                fold: "open",
                                title: 'Batas Administrasi'});

lyr_GoogleHybrid_0.setVisible(true);lyr_BatasKabupaten_1.setVisible(true);lyr_BatasKecamatan_2.setVisible(true);lyr_RuteJenang22shortest_path_3.setVisible(true);lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.setVisible(true);lyr_RuteJenangBintangKurniashortest_path_5.setVisible(true);lyr_RuteJenangKaromahshortest_path_6.setVisible(true);lyr_RuteJenangKudus1shortest_path_7.setVisible(true);lyr_RuteJenangKudusArminashortest_path_8.setVisible(true);lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.setVisible(true);lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.setVisible(true);lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.setVisible(true);lyr_RuteJenangKudusMenarashortest_path_12.setVisible(true);lyr_RuteJenangMarlinashortest_path_13.setVisible(true);lyr_RuteJenangMubarokshortest_path_14.setVisible(true);lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.setVisible(true);lyr_RuteJenangYasminshortest_path_16.setVisible(true);lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17.setVisible(true);lyr_Kelapakelapa_18.setVisible(true);lyr_DemandKelapademand_kelapa_19.setVisible(true);lyr_SupplyKelapatitik_supply_kelapa_20.setVisible(true);lyr_RuteKopiMuriaAffaniKajarshortest_path_21.setVisible(true);lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.setVisible(true);lyr_RuteKopiMuriaDewi29shortest_path_23.setVisible(true);lyr_RuteKopiMuriaIthengshortest_path_24.setVisible(true);lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.setVisible(true);lyr_RuteKopiMuriaNimatshortest_path_26.setVisible(true);lyr_RuteKopiMuriaOtentikshortest_path_27.setVisible(true);lyr_RuteKopiMuriaWilhelminashortest_path_28.setVisible(true);lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.setVisible(true);lyr_Kopikopi_30.setVisible(true);lyr_DemandKopi_31.setVisible(true);lyr_SupplyKopi_32.setVisible(true);lyr_RuteAgenTebuPakMujiKudusshortest_path_33.setVisible(true);lyr_RuteKebonTeburute_kebon_tebu_34.setVisible(true);lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35.setVisible(true);lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36.setVisible(true);lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37.setVisible(true);lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.setVisible(true);lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.setVisible(true);lyr_RuteSirupPopirute_sirup_popi_40.setVisible(true);lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41.setVisible(true);lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.setVisible(true);lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.setVisible(true);lyr_Tebutebu_44.setVisible(true);lyr_TitikDemandTebu_45.setVisible(true);lyr_TitikSuplyTebu_46.setVisible(true);lyr_JaringanJalanKudus_47.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_BatasAdministrasi,group_RuteKelapa,group_RencanaSupplyDemandKelapa,group_RuteKopi,group_RencanaSupplyDemandKopi,group_RuteTebu,group_RencanaSupplyDemandTebu,lyr_JaringanJalanKudus_47];
lyr_BatasKabupaten_1.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_BatasKecamatan_2.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_RuteJenang22shortest_path_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangBintangKurniashortest_path_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKaromahshortest_path_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudus1shortest_path_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudusArminashortest_path_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangKudusMenarashortest_path_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangMarlinashortest_path_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangMubarokshortest_path_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteJenangYasminshortest_path_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Kelapakelapa_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', });
lyr_DemandKelapademand_kelapa_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'KLASIF': 'KLASIF', 'JENIS': 'JENIS', 'ALAMAT': 'ALAMAT', 'JAM': 'JAM', 'CP': 'CP', 'GAMBAR': 'GAMBAR', 'layer': 'layer', 'path': 'path', 'RATING': 'RATING', });
lyr_SupplyKelapatitik_supply_kelapa_20.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', });
lyr_RuteKopiMuriaAffaniKajarshortest_path_21.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaDewi29shortest_path_23.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaIthengshortest_path_24.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaNimatshortest_path_26.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaOtentikshortest_path_27.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaWilhelminashortest_path_28.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Kopikopi_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ton': 'Ton', });
lyr_DemandKopi_31.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'KLASIF': 'KLASIF', 'JENIS': 'JENIS', 'ALAMAT': 'ALAMAT', 'JAM': 'JAM', 'CP': 'CP', 'GAMBAR': 'GAMBAR', 'layer': 'layer', 'path': 'path', 'RATING': 'RATING', });
lyr_SupplyKopi_32.set('fieldAliases', {'fid': 'fid', 'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', });
lyr_RuteAgenTebuPakMujiKudusshortest_path_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteKebonTeburute_kebon_tebu_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupPopirute_sirup_popi_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Tebutebu_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Ket': 'Ket', 'Ton': 'Ton', });
lyr_TitikDemandTebu_45.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'KLASIF': 'KLASIF', 'JENIS': 'JENIS', 'ALAMAT': 'ALAMAT', 'JAM': 'JAM', 'CP': 'CP', 'GAMBAR': 'GAMBAR', 'layer': 'layer', 'path': 'path', 'RATING': 'RATING', });
lyr_TitikSuplyTebu_46.set('fieldAliases', {'fid': 'fid', });
lyr_JaringanJalanKudus_47.set('fieldAliases', {'name': 'Jaringan Jalan', 'NAMRJL': 'Jaringan Jalan', 'Jaringan J': 'Jaringan Jalan', });
lyr_BatasKabupaten_1.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_BatasKecamatan_2.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_RuteJenang22shortest_path_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangBintangKurniashortest_path_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKaromahshortest_path_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudus1shortest_path_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudusArminashortest_path_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangKudusMenarashortest_path_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangMarlinashortest_path_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangMubarokshortest_path_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteJenangYasminshortest_path_16.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', 'start': '', 'end': '', 'cost': '', });
lyr_Kelapakelapa_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', });
lyr_DemandKelapademand_kelapa_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'RATING': 'TextEdit', });
lyr_SupplyKelapatitik_supply_kelapa_20.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'Ton': 'TextEdit', });
lyr_RuteKopiMuriaAffaniKajarshortest_path_21.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaDewi29shortest_path_23.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaIthengshortest_path_24.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaNimatshortest_path_26.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaOtentikshortest_path_27.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaWilhelminashortest_path_28.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.set('fieldImages', {'fid': '', 'NAMA_DESA': '', 'NAMA_KEC': '', 'SupplyKopi': '', 'start': '', 'end': '', 'cost': '', });
lyr_Kopikopi_30.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ton': '', });
lyr_DemandKopi_31.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'RATING': 'TextEdit', });
lyr_SupplyKopi_32.set('fieldImages', {'fid': 'TextEdit', 'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'SupplyKopi': 'TextEdit', });
lyr_RuteAgenTebuPakMujiKudusshortest_path_33.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteKebonTeburute_kebon_tebu_34.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupPopirute_sirup_popi_40.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'start': '', 'end': '', 'cost': '', });
lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Tebutebu_44.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'Ket': '', 'Ton': '', });
lyr_TitikDemandTebu_45.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'RATING': 'TextEdit', });
lyr_TitikSuplyTebu_46.set('fieldImages', {'fid': 'TextEdit', });
lyr_JaringanJalanKudus_47.set('fieldImages', {'name': 'TextEdit', 'NAMRJL': 'TextEdit', 'Jaringan J': 'TextEdit', });
lyr_BatasKabupaten_1.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_BatasKecamatan_2.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_RuteJenang22shortest_path_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangAsiaAminahrute_jenang_asia_aminah_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangBintangKurniashortest_path_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKaromahshortest_path_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudus1shortest_path_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudusArminashortest_path_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudusBarokahAslirute_jenang_kudus_barokah_asli_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudusHikmahrute_jenang_kudus_hikmah_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudusMakYatirute_jenang_kudus_mak_yati_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangKudusMenarashortest_path_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangMarlinashortest_path_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangMubarokshortest_path_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangRasaAbadiKudusrute_jenang_rasa_abadi_kudus_15.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteJenangYasminshortest_path_16.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RutePusatJenangMataharirute_pusat_jenang_matahari_17.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Kelapakelapa_18.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', });
lyr_DemandKelapademand_kelapa_19.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'no label', 'layer': 'no label', 'path': 'no label', 'RATING': 'no label', });
lyr_SupplyKelapatitik_supply_kelapa_20.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', });
lyr_RuteKopiMuriaAffaniKajarshortest_path_21.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaAnarkopirute_kopi_muria_anarkopi_22.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaDewi29shortest_path_23.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaIthengshortest_path_24.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaMuracorute_kopi_muria_muraco_25.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaNimatshortest_path_26.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaOtentikshortest_path_27.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaWilhelminashortest_path_28.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKopiMuriaZaynarute_kopi_muria_zayna_29.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Kopikopi_30.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ton': 'no label', });
lyr_DemandKopi_31.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'no label', 'layer': 'no label', 'path': 'no label', 'RATING': 'no label', });
lyr_SupplyKopi_32.set('fieldLabels', {'fid': 'no label', 'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', });
lyr_RuteAgenTebuPakMujiKudusshortest_path_33.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteKebonTeburute_kebon_tebu_34.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteRumahGulaKudusrute_rumah_gula_kudus_35.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupCapManggisrute_sirup_cap_manggis_36.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupMuriaAgungrute_sirup_muria_agung_37.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupParijothoAlammurute_sirup_parijotho_alammu_38.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupParijothoMeethosrute_sirup_parijoto_meethos_39.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupPopirute_sirup_popi_40.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSirupYogasDelimarute_sirup_yogas_delima_41.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteSuplyerTebuIjodanMesinTebuIjoshortest_path_42.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_RuteAgenTebuIjoKudusBapakZidirute_agen_tebu_ijo_kudus_bapak_zidi_43.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Tebutebu_44.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'Ket': 'no label', 'Ton': 'no label', });
lyr_TitikDemandTebu_45.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'no label', 'layer': 'no label', 'path': 'no label', 'RATING': 'no label', });
lyr_TitikSuplyTebu_46.set('fieldLabels', {'fid': 'no label', });
lyr_JaringanJalanKudus_47.set('fieldLabels', {'name': 'no label', 'NAMRJL': 'no label', 'Jaringan J': 'no label', });
lyr_JaringanJalanKudus_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});