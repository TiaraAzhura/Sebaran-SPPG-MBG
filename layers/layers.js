ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11957450.310545, -799360.194227, 11997415.113683, -775046.347231]);
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
    <img src="styles/legend/KeteranganMBG_3_0.png" /> SPPG DESA ALAMENDAH<br />\
    <img src="styles/legend/KeteranganMBG_3_1.png" /> SPPG DESA ALAMENDAH II<br />\
    <img src="styles/legend/KeteranganMBG_3_2.png" /> SPPG DESA ALAMENDAH III<br />\
    <img src="styles/legend/KeteranganMBG_3_3.png" /> SPPG DESA ANCOLMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_4.png" /> SPPG DESA ANDIR<br />\
    <img src="styles/legend/KeteranganMBG_3_5.png" /> SPPG DESA ANDIR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_6.png" /> SPPG DESA ARJASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_7.png" /> SPPG DESA BABAKAN<br />\
    <img src="styles/legend/KeteranganMBG_3_8.png" /> SPPG DESA BABAKAN PEUTEUY<br />\
    <img src="styles/legend/KeteranganMBG_3_9.png" /> SPPG DESA BABAKAN PEUTEUY 2<br />\
    <img src="styles/legend/KeteranganMBG_3_10.png" /> SPPG DESA BALEENDAH<br />\
    <img src="styles/legend/KeteranganMBG_3_11.png" /> SPPG DESA BALEENDAH 2<br />\
    <img src="styles/legend/KeteranganMBG_3_12.png" /> SPPG DESA BALEENDAH 3<br />\
    <img src="styles/legend/KeteranganMBG_3_13.png" /> SPPG DESA BALEENDAH 4<br />\
    <img src="styles/legend/KeteranganMBG_3_14.png" /> SPPG DESA BALEENDAH 5<br />\
    <img src="styles/legend/KeteranganMBG_3_15.png" /> SPPG DESA BALEENDAH 6<br />\
    <img src="styles/legend/KeteranganMBG_3_16.png" /> SPPG DESA BALEENDAH 7<br />\
    <img src="styles/legend/KeteranganMBG_3_17.png" /> SPPG DESA BALEENDAH 8<br />\
    <img src="styles/legend/KeteranganMBG_3_18.png" /> SPPG DESA BALEENDAH 9<br />\
    <img src="styles/legend/KeteranganMBG_3_19.png" /> SPPG DESA BANDASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_20.png" /> SPPG DESA BANJARAN KULON<br />\
    <img src="styles/legend/KeteranganMBG_3_21.png" /> SPPG DESA BANJARAN KULON 2<br />\
    <img src="styles/legend/KeteranganMBG_3_22.png" /> SPPG DESA BANJARAN KULON 3<br />\
    <img src="styles/legend/KeteranganMBG_3_23.png" /> SPPG DESA BANJARAN KULON 4<br />\
    <img src="styles/legend/KeteranganMBG_3_24.png" /> SPPG DESA BANJARAN WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_25.png" /> SPPG DESA BANJARSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_26.png" /> SPPG DESA BANYUSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_27.png" /> SPPG DESA BAROS<br />\
    <img src="styles/legend/KeteranganMBG_3_28.png" /> SPPG DESA BATUKARUT<br />\
    <img src="styles/legend/KeteranganMBG_3_29.png" /> SPPG DESA BIRU<br />\
    <img src="styles/legend/KeteranganMBG_3_30.png" /> SPPG DESA BIRU 2<br />\
    <img src="styles/legend/KeteranganMBG_3_31.png" /> SPPG DESA BIRU 3<br />\
    <img src="styles/legend/KeteranganMBG_3_32.png" /> SPPG DESA BOJONG<br />\
    <img src="styles/legend/KeteranganMBG_3_33.png" /> SPPG DESA BOJONG MAJALAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_34.png" /> SPPG DESA BOJONGEMAS<br />\
    <img src="styles/legend/KeteranganMBG_3_35.png" /> SPPG DESA BOJONGKUNCI<br />\
    <img src="styles/legend/KeteranganMBG_3_36.png" /> SPPG DESA BOJONGLOA<br />\
    <img src="styles/legend/KeteranganMBG_3_37.png" /> SPPG DESA BOJONGLOA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_38.png" /> SPPG DESA BOJONGMALAKA<br />\
    <img src="styles/legend/KeteranganMBG_3_39.png" /> SPPG DESA BOJONGMALAKA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_40.png" /> SPPG DESA BOJONGMANGGU<br />\
    <img src="styles/legend/KeteranganMBG_3_41.png" /> SPPG DESA BOJONGSALAM<br />\
    <img src="styles/legend/KeteranganMBG_3_42.png" /> SPPG DESA BOJONGSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_43.png" /> SPPG DESA BOJONGSARI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_44.png" /> SPPG DESA BOJONGSOANG<br />\
    <img src="styles/legend/KeteranganMBG_3_45.png" /> SPPG DESA BUAHBATU<br />\
    <img src="styles/legend/KeteranganMBG_3_46.png" /> SPPG DESA BUMIWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_47.png" /> SPPG DESA CAMPAKAMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_48.png" /> SPPG DESA CANGKUANG<br />\
    <img src="styles/legend/KeteranganMBG_3_49.png" /> SPPG DESA CANGKUANG KULON<br />\
    <img src="styles/legend/KeteranganMBG_3_50.png" /> SPPG DESA CANGKUANG KULON 2<br />\
    <img src="styles/legend/KeteranganMBG_3_51.png" /> SPPG DESA CANGKUANG KULON 3<br />\
    <img src="styles/legend/KeteranganMBG_3_52.png" /> SPPG DESA CANGKUANG RANCAEKEK<br />\
    <img src="styles/legend/KeteranganMBG_3_53.png" /> SPPG DESA CANGKUANG WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_54.png" /> SPPG DESA CIAPUS<br />\
    <img src="styles/legend/KeteranganMBG_3_55.png" /> SPPG DESA CIARO<br />\
    <img src="styles/legend/KeteranganMBG_3_56.png" /> SPPG DESA CIBEET<br />\
    <img src="styles/legend/KeteranganMBG_3_57.png" /> SPPG DESA CIBEUNYING<br />\
    <img src="styles/legend/KeteranganMBG_3_58.png" /> SPPG DESA CIBEUREUM<br />\
    <img src="styles/legend/KeteranganMBG_3_59.png" /> SPPG DESA CIBEUREUM 2<br />\
    <img src="styles/legend/KeteranganMBG_3_60.png" /> SPPG DESA CIBIRU HILIR<br />\
    <img src="styles/legend/KeteranganMBG_3_61.png" /> SPPG DESA CIBIRU WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_62.png" /> SPPG DESA CIBIRU WETAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_63.png" /> SPPG DESA CIBODAS<br />\
    <img src="styles/legend/KeteranganMBG_3_64.png" /> SPPG DESA CIBODAS KUTAWARINGIN<br />\
    <img src="styles/legend/KeteranganMBG_3_65.png" /> SPPG DESA CIBODAS RANCAEKEK<br />\
    <img src="styles/legend/KeteranganMBG_3_66.png" /> SPPG DESA CIBURIAL<br />\
    <img src="styles/legend/KeteranganMBG_3_67.png" /> SPPG DESA CICALENGKA KULON<br />\
    <img src="styles/legend/KeteranganMBG_3_68.png" /> SPPG DESA CICALENGKA KULON 2<br />\
    <img src="styles/legend/KeteranganMBG_3_69.png" /> SPPG DESA CICALENGKA WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_70.png" /> SPPG DESA CICALENGKA WETAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_71.png" /> SPPG DESA CIGENTUR<br />\
    <img src="styles/legend/KeteranganMBG_3_72.png" /> SPPG DESA CIGONDEWAH HILIR<br />\
    <img src="styles/legend/KeteranganMBG_3_73.png" /> SPPG DESA CIHANYIR<br />\
    <img src="styles/legend/KeteranganMBG_3_74.png" /> SPPG DESA CIHAWUK<br />\
    <img src="styles/legend/KeteranganMBG_3_75.png" /> SPPG DESA CIHERANG<br />\
    <img src="styles/legend/KeteranganMBG_3_76.png" /> SPPG DESA CIHEULANG<br />\
    <img src="styles/legend/KeteranganMBG_3_77.png" /> SPPG DESA CIHEULANG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_78.png" /> SPPG DESA CIKADUT<br />\
    <img src="styles/legend/KeteranganMBG_3_79.png" /> SPPG DESA CIKALONG<br />\
    <img src="styles/legend/KeteranganMBG_3_80.png" /> SPPG DESA CIKANCUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_81.png" /> SPPG DESA CIKASUNGKA<br />\
    <img src="styles/legend/KeteranganMBG_3_82.png" /> SPPG DESA CIKAWAO<br />\
    <img src="styles/legend/KeteranganMBG_3_83.png" /> SPPG DESA CIKEMBANG<br />\
    <img src="styles/legend/KeteranganMBG_3_84.png" /> SPPG DESA CIKITU<br />\
    <img src="styles/legend/KeteranganMBG_3_85.png" /> SPPG DESA CIKONENG<br />\
    <img src="styles/legend/KeteranganMBG_3_86.png" /> SPPG DESA CIKONENG CIPARAY<br />\
    <img src="styles/legend/KeteranganMBG_3_87.png" /> SPPG DESA CIKUYA<br />\
    <img src="styles/legend/KeteranganMBG_3_88.png" /> SPPG DESA CILAME<br />\
    <img src="styles/legend/KeteranganMBG_3_89.png" /> SPPG DESA CILAMPENI<br />\
    <img src="styles/legend/KeteranganMBG_3_90.png" /> SPPG DESA CILENGKRANG<br />\
    <img src="styles/legend/KeteranganMBG_3_91.png" /> SPPG DESA CILEUNYI KULON<br />\
    <img src="styles/legend/KeteranganMBG_3_92.png" /> SPPG DESA CILEUNYI KULON 2<br />\
    <img src="styles/legend/KeteranganMBG_3_93.png" /> SPPG DESA CILEUNYI WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_94.png" /> SPPG DESA CILEUNYI WETAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_95.png" /> SPPG DESA CILEUNYI WETAN 3<br />\
    <img src="styles/legend/KeteranganMBG_3_96.png" /> SPPG DESA CILULUK<br />\
    <img src="styles/legend/KeteranganMBG_3_97.png" /> SPPG DESA CILUNCAT<br />\
    <img src="styles/legend/KeteranganMBG_3_98.png" /> SPPG DESA CIMAUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_99.png" /> SPPG DESA CIMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_100.png" /> SPPG DESA CIMEKAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_101.png" /> SPPG DESA CIMEKAR 3<br />\
    <img src="styles/legend/KeteranganMBG_3_102.png" /> SPPG DESA CIMENYAN<br />\
    <img src="styles/legend/KeteranganMBG_3_103.png" /> SPPG DESA CINANGGELA<br />\
    <img src="styles/legend/KeteranganMBG_3_104.png" /> SPPG DESA CINGCIN<br />\
    <img src="styles/legend/KeteranganMBG_3_105.png" /> SPPG DESA CINGCIN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_106.png" /> SPPG DESA CINUNUK<br />\
    <img src="styles/legend/KeteranganMBG_3_107.png" /> SPPG DESA CINUNUK 2<br />\
    <img src="styles/legend/KeteranganMBG_3_108.png" /> SPPG DESA CINUNUK 3<br />\
    <img src="styles/legend/KeteranganMBG_3_109.png" /> SPPG DESA CINUNUK 4<br />\
    <img src="styles/legend/KeteranganMBG_3_110.png" /> SPPG DESA CIPAGALO<br />\
    <img src="styles/legend/KeteranganMBG_3_111.png" /> SPPG DESA CIPAGALO 2<br />\
    <img src="styles/legend/KeteranganMBG_3_112.png" /> SPPG DESA CIPAKU<br />\
    <img src="styles/legend/KeteranganMBG_3_113.png" /> SPPG DESA CIPAKU 2<br />\
    <img src="styles/legend/KeteranganMBG_3_114.png" /> SPPG DESA CIPANJALU<br />\
    <img src="styles/legend/KeteranganMBG_3_115.png" /> SPPG DESA CIPARAY<br />\
    <img src="styles/legend/KeteranganMBG_3_116.png" /> SPPG DESA CIPEDES<br />\
    <img src="styles/legend/KeteranganMBG_3_117.png" /> SPPG DESA CIPEDES 2<br />\
    <img src="styles/legend/KeteranganMBG_3_118.png" /> SPPG DESA CIPELAH<br />\
    <img src="styles/legend/KeteranganMBG_3_119.png" /> SPPG DESA CIPEUJEUH<br />\
    <img src="styles/legend/KeteranganMBG_3_120.png" /> SPPG DESA CIPINANG<br />\
    <img src="styles/legend/KeteranganMBG_3_121.png" /> SPPG DESA CIPOREAT<br />\
    <img src="styles/legend/KeteranganMBG_3_122.png" /> SPPG DESA CISONDARI<br />\
    <img src="styles/legend/KeteranganMBG_3_123.png" /> SPPG DESA CITAMAN<br />\
    <img src="styles/legend/KeteranganMBG_3_124.png" /> SPPG DESA CITEUREUP<br />\
    <img src="styles/legend/KeteranganMBG_3_125.png" /> SPPG DESA CITEUREUP 2<br />\
    <img src="styles/legend/KeteranganMBG_3_126.png" /> SPPG DESA CIWIDEY<br />\
    <img src="styles/legend/KeteranganMBG_3_127.png" /> SPPG DESA CIWIDEY II<br />\
    <img src="styles/legend/KeteranganMBG_3_128.png" /> SPPG DESA CUKANGGENTENG<br />\
    <img src="styles/legend/KeteranganMBG_3_129.png" /> SPPG DESA DAMPIT<br />\
    <img src="styles/legend/KeteranganMBG_3_130.png" /> SPPG DESA DAYEUHKOLOT<br />\
    <img src="styles/legend/KeteranganMBG_3_131.png" /> SPPG DESA DRAWATI<br />\
    <img src="styles/legend/KeteranganMBG_3_132.png" /> SPPG DESA DUKUH<br />\
    <img src="styles/legend/KeteranganMBG_3_133.png" /> SPPG DESA GAJAHMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_134.png" /> SPPG DESA GAJAHMEKAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_135.png" /> SPPG DESA GANDASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_136.png" /> SPPG DESA GANDASARI1<br />\
    <img src="styles/legend/KeteranganMBG_3_137.png" /> SPPG DESA GANJARSABAR<br />\
    <img src="styles/legend/KeteranganMBG_3_138.png" /> SPPG DESA GIRIMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_139.png" /> SPPG DESA GIRIMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_140.png" /> SPPG DESA GUNUNGLEUTIK<br />\
    <img src="styles/legend/KeteranganMBG_3_141.png" /> SPPG DESA HAURPUGUR<br />\
    <img src="styles/legend/KeteranganMBG_3_142.png" /> SPPG DESA HAURPUGUR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_143.png" /> SPPG DESA HEGARMANAH<br />\
    <img src="styles/legend/KeteranganMBG_3_144.png" /> SPPG DESA HEGARMANAH1<br />\
    <img src="styles/legend/KeteranganMBG_3_145.png" /> SPPG DESA IBUN<br />\
    <img src="styles/legend/KeteranganMBG_3_146.png" /> SPPG DESA INDRAGIRI<br />\
    <img src="styles/legend/KeteranganMBG_3_147.png" /> SPPG DESA JAGABAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_148.png" /> SPPG DESA JATIENDAH<br />\
    <img src="styles/legend/KeteranganMBG_3_149.png" /> SPPG DESA JATISARI<br />\
    <img src="styles/legend/KeteranganMBG_3_150.png" /> SPPG DESA JATISARI CANGKUANG<br />\
    <img src="styles/legend/KeteranganMBG_3_151.png" /> SPPG DESA JELEGONG<br />\
    <img src="styles/legend/KeteranganMBG_3_152.png" /> SPPG DESA JELEGONG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_153.png" /> SPPG DESA JELEGONG RANCAEKEK<br />\
    <img src="styles/legend/KeteranganMBG_3_154.png" /> SPPG DESA JELEGONG RANCAEKEK 2<br />\
    <img src="styles/legend/KeteranganMBG_3_155.png" /> SPPG DESA JELEKONG<br />\
    <img src="styles/legend/KeteranganMBG_3_156.png" /> SPPG DESA JELEKONG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_157.png" /> SPPG DESA JELEKONG 3<br />\
    <img src="styles/legend/KeteranganMBG_3_158.png" /> SPPG DESA KAMASAN<br />\
    <img src="styles/legend/KeteranganMBG_3_159.png" /> SPPG DESA KARANGTUNGGAL<br />\
    <img src="styles/legend/KeteranganMBG_3_160.png" /> SPPG DESA KARYALAKSANA<br />\
    <img src="styles/legend/KeteranganMBG_3_161.png" /> SPPG DESA KATAPANG<br />\
    <img src="styles/legend/KeteranganMBG_3_162.png" /> SPPG DESA KATAPANG1<br />\
    <img src="styles/legend/KeteranganMBG_3_163.png" /> SPPG DESA KIANGROKE<br />\
    <img src="styles/legend/KeteranganMBG_3_164.png" /> SPPG DESA KOPO<br />\
    <img src="styles/legend/KeteranganMBG_3_165.png" /> SPPG DESA LAGADAR<br />\
    <img src="styles/legend/KeteranganMBG_3_166.png" /> SPPG DESA LAMPEGAN<br />\
    <img src="styles/legend/KeteranganMBG_3_167.png" /> SPPG DESA LANGENSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_168.png" /> SPPG DESA LANGONSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_169.png" /> SPPG DESA LEBAKMUNCANG<br />\
    <img src="styles/legend/KeteranganMBG_3_170.png" /> SPPG DESA LEBAKWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_171.png" /> SPPG DESA LENGKONG<br />\
    <img src="styles/legend/KeteranganMBG_3_172.png" /> SPPG DESA LINGGAR<br />\
    <img src="styles/legend/KeteranganMBG_3_173.png" /> SPPG DESA LOA<br />\
    <img src="styles/legend/KeteranganMBG_3_174.png" /> SPPG DESA MAJALAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_175.png" /> SPPG DESA MAJALAYA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_176.png" /> SPPG DESA MAJASETRA<br />\
    <img src="styles/legend/KeteranganMBG_3_177.png" /> SPPG DESA MAJASETRA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_178.png" /> SPPG DESA MALAKASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_179.png" /> SPPG DESA MALASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_180.png" /> SPPG DESA MANDALAHAJI<br />\
    <img src="styles/legend/KeteranganMBG_3_181.png" /> SPPG DESA MANDALAHAJI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_182.png" /> SPPG DESA MANDALASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_183.png" /> SPPG DESA MANGGAHANG<br />\
    <img src="styles/legend/KeteranganMBG_3_184.png" /> SPPG DESA MANGGAHANG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_185.png" /> SPPG DESA MANGGAHANG 3<br />\
    <img src="styles/legend/KeteranganMBG_3_186.png" /> SPPG DESA MANGGAHANG 4<br />\
    <img src="styles/legend/KeteranganMBG_3_187.png" /> SPPG DESA MANGUNHARJA CIPARAY<br />\
    <img src="styles/legend/KeteranganMBG_3_188.png" /> SPPG DESA MANGUNJAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_189.png" /> SPPG DESA MARGAASIH<br />\
    <img src="styles/legend/KeteranganMBG_3_190.png" /> SPPG DESA MARGAASIH 2<br />\
    <img src="styles/legend/KeteranganMBG_3_191.png" /> SPPG DESA MARGAHAYU SELATAN<br />\
    <img src="styles/legend/KeteranganMBG_3_192.png" /> SPPG DESA MARGAHAYU SELATAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_193.png" /> SPPG DESA MARGAHAYU SELATAN 3<br />\
    <img src="styles/legend/KeteranganMBG_3_194.png" /> SPPG DESA MARGAHAYU TENGAH<br />\
    <img src="styles/legend/KeteranganMBG_3_195.png" /> SPPG DESA MARGAHURIP<br />\
    <img src="styles/legend/KeteranganMBG_3_196.png" /> SPPG DESA MARGALUYU<br />\
    <img src="styles/legend/KeteranganMBG_3_197.png" /> SPPG DESA MARGAMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_198.png" /> SPPG DESA MARGAMUKTI<br />\
    <img src="styles/legend/KeteranganMBG_3_199.png" /> SPPG DESA MARGAMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_200.png" /> SPPG DESA MARGAMULYA PANGALENGAN<br />\
    <img src="styles/legend/KeteranganMBG_3_201.png" /> SPPG DESA MARUYUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_202.png" /> SPPG DESA MARUYUNG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_203.png" /> SPPG DESA MARUYUNG 3<br />\
    <img src="styles/legend/KeteranganMBG_3_204.png" /> SPPG DESA MEKARJAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_205.png" /> SPPG DESA MEKARJAYA ARJASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_206.png" /> SPPG DESA MEKARJAYA PACET<br />\
    <img src="styles/legend/KeteranganMBG_3_207.png" /> SPPG DESA MEKARLAKSANA<br />\
    <img src="styles/legend/KeteranganMBG_3_208.png" /> SPPG DESA MEKARLAKSANA CIPARAY<br />\
    <img src="styles/legend/KeteranganMBG_3_209.png" /> SPPG DESA MEKARMAJU<br />\
    <img src="styles/legend/KeteranganMBG_3_210.png" /> SPPG DESA MEKARMANIK<br />\
    <img src="styles/legend/KeteranganMBG_3_211.png" /> SPPG DESA MEKARPAWITAN<br />\
    <img src="styles/legend/KeteranganMBG_3_212.png" /> SPPG DESA MEKARPAWITAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_213.png" /> SPPG DESA MEKARRAHAYU<br />\
    <img src="styles/legend/KeteranganMBG_3_214.png" /> SPPG DESA MEKARRAHAYU 2<br />\
    <img src="styles/legend/KeteranganMBG_3_215.png" /> SPPG DESA MEKARRAHAYU 3<br />\
    <img src="styles/legend/KeteranganMBG_3_216.png" /> SPPG DESA MEKARSALUYU<br />\
    <img src="styles/legend/KeteranganMBG_3_217.png" /> SPPG DESA MEKARSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_218.png" /> SPPG DESA MEKARSARI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_219.png" /> SPPG DESA MEKARSARI CIMAUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_220.png" /> SPPG DESA MEKARSARI PACET<br />\
    <img src="styles/legend/KeteranganMBG_3_221.png" /> SPPG DESA MEKARWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_222.png" /> SPPG DESA NAGRAK<br />\
    <img src="styles/legend/KeteranganMBG_3_223.png" /> SPPG DESA NAGRAK PACET<br />\
    <img src="styles/legend/KeteranganMBG_3_224.png" /> SPPG DESA NAGREG<br />\
    <img src="styles/legend/KeteranganMBG_3_225.png" /> SPPG DESA NAGREG KENDAN<br />\
    <img src="styles/legend/KeteranganMBG_3_226.png" /> SPPG DESA NAGROG<br />\
    <img src="styles/legend/KeteranganMBG_3_227.png" /> SPPG DESA NANJUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_228.png" /> SPPG DESA NANJUNG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_229.png" /> SPPG DESA NANJUNG MEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_230.png" /> SPPG DESA NEGLASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_231.png" /> SPPG DESA NEGLASARI IBUN<br />\
    <img src="styles/legend/KeteranganMBG_3_232.png" /> SPPG DESA NEGLASARI MAJALAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_233.png" /> SPPG DESA NEGLAWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_234.png" /> SPPG DESA PADAMUKTI<br />\
    <img src="styles/legend/KeteranganMBG_3_235.png" /> SPPG DESA PADAMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_236.png" /> SPPG DESA PADASUKA<br />\
    <img src="styles/legend/KeteranganMBG_3_237.png" /> SPPG DESA PADASUKA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_238.png" /> SPPG DESA PADASUKA KUTAWARINGIN<br />\
    <img src="styles/legend/KeteranganMBG_3_239.png" /> SPPG DESA PADAULUN<br />\
    <img src="styles/legend/KeteranganMBG_3_240.png" /> SPPG DESA PADAULUN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_241.png" /> SPPG DESA PAKUTANDANG<br />\
    <img src="styles/legend/KeteranganMBG_3_242.png" /> SPPG DESA PAKUTANDANG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_243.png" /> SPPG DESA PAMEKARAN<br />\
    <img src="styles/legend/KeteranganMBG_3_244.png" /> SPPG DESA PAMEKARAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_245.png" /> SPPG DESA PAMEKARAN 3<br />\
    <img src="styles/legend/KeteranganMBG_3_246.png" /> SPPG DESA PAMEUNTASAN<br />\
    <img src="styles/legend/KeteranganMBG_3_247.png" /> SPPG DESA PANANJUNG<br />\
    <img src="styles/legend/KeteranganMBG_3_248.png" /> SPPG DESA PANENJOAN<br />\
    <img src="styles/legend/KeteranganMBG_3_249.png" /> SPPG DESA PANGALENGAN<br />\
    <img src="styles/legend/KeteranganMBG_3_250.png" /> SPPG DESA PANGALENGAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_251.png" /> SPPG DESA PANGALENGAN 3<br />\
    <img src="styles/legend/KeteranganMBG_3_252.png" /> SPPG DESA PANGAUBAN<br />\
    <img src="styles/legend/KeteranganMBG_3_253.png" /> SPPG DESA PANGAUBAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_254.png" /> SPPG DESA PANGAUBAN PACET<br />\
    <img src="styles/legend/KeteranganMBG_3_255.png" /> SPPG DESA PANGGUH<br />\
    <img src="styles/legend/KeteranganMBG_3_256.png" /> SPPG DESA PANUNDAAN<br />\
    <img src="styles/legend/KeteranganMBG_3_257.png" /> SPPG DESA PANUNDAAN II<br />\
    <img src="styles/legend/KeteranganMBG_3_258.png" /> SPPG DESA PANYADAP<br />\
    <img src="styles/legend/KeteranganMBG_3_259.png" /> SPPG DESA PANYADAP1<br />\
    <img src="styles/legend/KeteranganMBG_3_260.png" /> SPPG DESA PANYIRAPAN<br />\
    <img src="styles/legend/KeteranganMBG_3_261.png" /> SPPG DESA PANYOCOKAN<br />\
    <img src="styles/legend/KeteranganMBG_3_262.png" /> SPPG DESA PANYOCOKAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_263.png" /> SPPG DESA PARUNGSERAB<br />\
    <img src="styles/legend/KeteranganMBG_3_264.png" /> SPPG DESA PASAWAHAN<br />\
    <img src="styles/legend/KeteranganMBG_3_265.png" /> SPPG DESA PASIRHUNI<br />\
    <img src="styles/legend/KeteranganMBG_3_266.png" /> SPPG DESA PASIRJAMBU<br />\
    <img src="styles/legend/KeteranganMBG_3_267.png" /> SPPG DESA PATENGAN<br />\
    <img src="styles/legend/KeteranganMBG_3_268.png" /> SPPG DESA PATROLSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_269.png" /> SPPG DESA PINGGIRSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_270.png" /> SPPG DESA PULOSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_271.png" /> SPPG DESA RAHAYU<br />\
    <img src="styles/legend/KeteranganMBG_3_272.png" /> SPPG DESA RAHAYU 2<br />\
    <img src="styles/legend/KeteranganMBG_3_273.png" /> SPPG DESA RANCAEKEK KENCANA<br />\
    <img src="styles/legend/KeteranganMBG_3_274.png" /> SPPG DESA RANCAEKEK KULON<br />\
    <img src="styles/legend/KeteranganMBG_3_275.png" /> SPPG DESA RANCAEKEK WETAN<br />\
    <img src="styles/legend/KeteranganMBG_3_276.png" /> SPPG DESA RANCAEKEK WETAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_277.png" /> SPPG DESA RANCAEKEK WETAN 3<br />\
    <img src="styles/legend/KeteranganMBG_3_278.png" /> SPPG DESA RANCAKASUMBA<br />\
    <img src="styles/legend/KeteranganMBG_3_279.png" /> SPPG DESA RANCAKOLE<br />\
    <img src="styles/legend/KeteranganMBG_3_280.png" /> SPPG DESA RANCAMANYAR<br />\
    <img src="styles/legend/KeteranganMBG_3_281.png" /> SPPG DESA RANCAMANYAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_282.png" /> SPPG DESA RANCAMANYAR 3<br />\
    <img src="styles/legend/KeteranganMBG_3_283.png" /> SPPG DESA RANCAMANYAR 4<br />\
    <img src="styles/legend/KeteranganMBG_3_284.png" /> SPPG DESA RANCAMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_285.png" /> SPPG DESA RANCATUNGKU<br />\
    <img src="styles/legend/KeteranganMBG_3_286.png" /> SPPG DESA RAWABOGO<br />\
    <img src="styles/legend/KeteranganMBG_3_287.png" /> SPPG DESA RESMI TINGAL<br />\
    <img src="styles/legend/KeteranganMBG_3_288.png" /> SPPG DESA SADU<br />\
    <img src="styles/legend/KeteranganMBG_3_289.png" /> SPPG DESA SAGARACIPTA<br />\
    <img src="styles/legend/KeteranganMBG_3_290.png" /> SPPG DESA SANGKANHURIP<br />\
    <img src="styles/legend/KeteranganMBG_3_291.png" /> SPPG DESA SANGKANHURIP1<br />\
    <img src="styles/legend/KeteranganMBG_3_292.png" /> SPPG DESA SARIMAHI<br />\
    <img src="styles/legend/KeteranganMBG_3_293.png" /> SPPG DESA SAYATI<br />\
    <img src="styles/legend/KeteranganMBG_3_294.png" /> SPPG DESA SAYATI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_295.png" /> SPPG DESA SAYATI 3<br />\
    <img src="styles/legend/KeteranganMBG_3_296.png" /> SPPG DESA SEKARWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_297.png" /> SPPG DESA SERANGMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_298.png" /> SPPG DESA SERANGMEKAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_299.png" /> SPPG DESA SINDANGLAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_300.png" /> SPPG DESA SINDANGPANON<br />\
    <img src="styles/legend/KeteranganMBG_3_301.png" /> SPPG DESA SINDANGPANON 2<br />\
    <img src="styles/legend/KeteranganMBG_3_302.png" /> SPPG DESA SINDANGSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_303.png" /> SPPG DESA SINDANGSARI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_304.png" /> SPPG DESA SOLOKANJERUK<br />\
    <img src="styles/legend/KeteranganMBG_3_305.png" /> SPPG DESA SOLOKANJERUK1<br />\
    <img src="styles/legend/KeteranganMBG_3_306.png" /> SPPG DESA SOREANG<br />\
    <img src="styles/legend/KeteranganMBG_3_307.png" /> SPPG DESA SOREANG 2<br />\
    <img src="styles/legend/KeteranganMBG_3_308.png" /> SPPG DESA SOREANG 3<br />\
    <img src="styles/legend/KeteranganMBG_3_309.png" /> SPPG DESA SRIRAHAYU<br />\
    <img src="styles/legend/KeteranganMBG_3_310.png" /> SPPG DESA SRIRAHAYU1<br />\
    <img src="styles/legend/KeteranganMBG_3_311.png" /> SPPG DESA SUDI<br />\
    <img src="styles/legend/KeteranganMBG_3_312.png" /> SPPG DESA SUGIHMUKTI<br />\
    <img src="styles/legend/KeteranganMBG_3_313.png" /> SPPG DESA SUKALUYU<br />\
    <img src="styles/legend/KeteranganMBG_3_314.png" /> SPPG DESA SUKAMAJU<br />\
    <img src="styles/legend/KeteranganMBG_3_315.png" /> SPPG DESA SUKAMAJU MAJALAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_316.png" /> SPPG DESA SUKAMANAH PANGALENGAN<br />\
    <img src="styles/legend/KeteranganMBG_3_317.png" /> SPPG DESA SUKAMANAH PANGALENGAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_318.png" /> SPPG DESA SUKAMANAH PASEH<br />\
    <img src="styles/legend/KeteranganMBG_3_319.png" /> SPPG DESA SUKAMANAH RANCAEKEK<br />\
    <img src="styles/legend/KeteranganMBG_3_320.png" /> SPPG DESA SUKAMANTRI<br />\
    <img src="styles/legend/KeteranganMBG_3_321.png" /> SPPG DESA SUKAMENAK<br />\
    <img src="styles/legend/KeteranganMBG_3_322.png" /> SPPG DESA SUKAMENAK 2<br />\
    <img src="styles/legend/KeteranganMBG_3_323.png" /> SPPG DESA SUKAMUKTI<br />\
    <img src="styles/legend/KeteranganMBG_3_324.png" /> SPPG DESA SUKAMUKTI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_325.png" /> SPPG DESA SUKAMUKTI MAJALAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_326.png" /> SPPG DESA SUKAMUKTI MAJALAYA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_327.png" /> SPPG DESA SUKAMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_328.png" /> SPPG DESA SUKAMULYA KUTAWARINGIN<br />\
    <img src="styles/legend/KeteranganMBG_3_329.png" /> SPPG DESA SUKANAGARA<br />\
    <img src="styles/legend/KeteranganMBG_3_330.png" /> SPPG DESA SUKAPURA<br />\
    <img src="styles/legend/KeteranganMBG_3_331.png" /> SPPG DESA SUKAPURA KERTASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_332.png" /> SPPG DESA SUKASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_333.png" /> SPPG DESA SUKASARI1<br />\
    <img src="styles/legend/KeteranganMBG_3_334.png" /> SPPG DESA SUKASARI2<br />\
    <img src="styles/legend/KeteranganMBG_3_335.png" /> SPPG DESA SUKAWENING<br />\
    <img src="styles/legend/KeteranganMBG_3_336.png" /> SPPG DESA SULAIMAN<br />\
    <img src="styles/legend/KeteranganMBG_3_337.png" /> SPPG DESA SULAIMAN 2<br />\
    <img src="styles/legend/KeteranganMBG_3_338.png" /> SPPG DESA SUMBERSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_339.png" /> SPPG DESA SUMBERSARI 2<br />\
    <img src="styles/legend/KeteranganMBG_3_340.png" /> SPPG DESA TALUN<br />\
    <img src="styles/legend/KeteranganMBG_3_341.png" /> SPPG DESA TANGSIMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_342.png" /> SPPG DESA TANJUNGLAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_343.png" /> SPPG DESA TANJUNGSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_344.png" /> SPPG DESA TANJUNGWANGI<br />\
    <img src="styles/legend/KeteranganMBG_3_345.png" /> SPPG DESA TARAJUSARI<br />\
    <img src="styles/legend/KeteranganMBG_3_346.png" /> SPPG DESA TARUMAJAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_347.png" /> SPPG DESA TEGAL SUMEDANG<br />\
    <img src="styles/legend/KeteranganMBG_3_348.png" /> SPPG DESA TEGALLUAR<br />\
    <img src="styles/legend/KeteranganMBG_3_349.png" /> SPPG DESA TEGALLUAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_350.png" /> SPPG DESA TENJOLJAYA<br />\
    <img src="styles/legend/KeteranganMBG_3_351.png" /> SPPG DESA TENJOLJAYA CICALENGKA<br />\
    <img src="styles/legend/KeteranganMBG_3_352.png" /> SPPG DESA TRIBAKTIMULYA<br />\
    <img src="styles/legend/KeteranganMBG_3_353.png" /> SPPG DESA ULUN PADAULUN<br />\
    <img src="styles/legend/KeteranganMBG_3_354.png" /> SPPG DESA WALUYA<br />\
    <img src="styles/legend/KeteranganMBG_3_355.png" /> SPPG DESA WANGISAGARA<br />\
    <img src="styles/legend/KeteranganMBG_3_356.png" /> SPPG DESA WANGISAGARA 2<br />\
    <img src="styles/legend/KeteranganMBG_3_357.png" /> SPPG DESA WARGALUYU<br />\
    <img src="styles/legend/KeteranganMBG_3_358.png" /> SPPG DESA WARGAMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_359.png" /> SPPG DESA WARGAMEKAR 2<br />\
    <img src="styles/legend/KeteranganMBG_3_360.png" /> SPPG DESA WARJABAKTI<br />\
    <img src="styles/legend/KeteranganMBG_3_361.png" /> SPPG DESA WARNASARI<br />\
    <img src="styles/legend/KeteranganMBG_3_362.png" /> SPPG NAGREG<br />\
    <img src="styles/legend/KeteranganMBG_3_363.png" /> SPPG RANCAEKEK<br />\
    <img src="styles/legend/KeteranganMBG_3_364.png" /> SPPG YAYASAN AL KASYAF CIMEKAR<br />\
    <img src="styles/legend/KeteranganMBG_3_365.png" /> SPPG YAYASAN AMANAH PURI ANISA KIANGROKE<br />\
    <img src="styles/legend/KeteranganMBG_3_366.png" /> SPPG YAYASAN BUANA INSAN MADANI<br />\
    <img src="styles/legend/KeteranganMBG_3_367.png" /> SPPG YAYASAN DINUL HADI BOJONGSOANG<br />\
    <img src="styles/legend/KeteranganMBG_3_368.png" /> SPPG YAYASAN KASIH BELA NEGARA PANYOCOKAN<br />\
    <img src="styles/legend/KeteranganMBG_3_369.png" /> SPPG YAYASAN PENDIDIKAN NURUL HIKMAH CIJAUPANG MARGAASIH<br />\
    <img src="styles/legend/KeteranganMBG_3_370.png" /> <br />' });
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
lyr_BufferMBG_2.set('fieldAliases', {'NAMA SPPG': 'NAMA SPPG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kecamatan': 'Kecamatan', });
lyr_KeteranganMBG_3.set('fieldAliases', {'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'BALITA': 'BALITA', 'IBU HAMIL': 'IBU HAMIL', 'IBU MENYUS': 'IBU MENYUS', 'Nama': 'Nama', 'Tingkatan': 'Tingkatan', 'Siswa/i': 'Siswa/i', 'Total': 'Total', 'NAMA SPPG': 'NAMA SPPG', 'distance': 'distance', });
lyr_SPPGMBG_4.set('fieldAliases', {'NAMA SPPG': 'NAMA SPPG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kecamatan': 'Kecamatan', });
lyr_DesaKabBandung_1.set('fieldImages', {'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KAB/KOT': 'TextEdit', 'PROVINSI': 'TextEdit', 'L0': 'TextEdit', });
lyr_BufferMBG_2.set('fieldImages', {'NAMA SPPG': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_KeteranganMBG_3.set('fieldImages', {'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'BALITA': 'TextEdit', 'IBU HAMIL': 'TextEdit', 'IBU MENYUS': 'TextEdit', 'Nama': 'TextEdit', 'Tingkatan': 'TextEdit', 'Siswa/i': 'TextEdit', 'Total': 'TextEdit', 'NAMA SPPG': 'TextEdit', 'distance': 'TextEdit', });
lyr_SPPGMBG_4.set('fieldImages', {'NAMA SPPG': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_DesaKabBandung_1.set('fieldLabels', {'KELURAHAN': 'hidden field', 'KECAMATAN': 'hidden field', 'KAB/KOT': 'hidden field', 'PROVINSI': 'hidden field', 'L0': 'hidden field', });
lyr_BufferMBG_2.set('fieldLabels', {'NAMA SPPG': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kecamatan': 'hidden field', });
lyr_KeteranganMBG_3.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'BALITA': 'inline label - visible with data', 'IBU HAMIL': 'inline label - visible with data', 'IBU MENYUS': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Tingkatan': 'inline label - visible with data', 'Siswa/i': 'inline label - visible with data', 'Total': 'inline label - visible with data', 'NAMA SPPG': 'inline label - visible with data', 'distance': 'inline label - visible with data', });
lyr_SPPGMBG_4.set('fieldLabels', {'NAMA SPPG': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Kecamatan': 'hidden field', });
lyr_SPPGMBG_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});