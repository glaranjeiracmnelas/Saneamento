ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([9638.387226, 87125.645368, 39012.327374, 102601.823533]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_estacao_elevatoria_1 = new ol.format.GeoJSON();
var features_estacao_elevatoria_1 = format_estacao_elevatoria_1.readFeatures(json_estacao_elevatoria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_estacao_elevatoria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estacao_elevatoria_1.addFeatures(features_estacao_elevatoria_1);
var lyr_estacao_elevatoria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estacao_elevatoria_1, 
                style: style_estacao_elevatoria_1,
                popuplayertitle: 'estacao_elevatoria',
                interactive: true,
                title: '<img src="styles/legend/estacao_elevatoria_1.png" /> estacao_elevatoria'
            });
var format_conduta_elevatoria_2 = new ol.format.GeoJSON();
var features_conduta_elevatoria_2 = format_conduta_elevatoria_2.readFeatures(json_conduta_elevatoria_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_conduta_elevatoria_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conduta_elevatoria_2.addFeatures(features_conduta_elevatoria_2);
var lyr_conduta_elevatoria_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_conduta_elevatoria_2, 
                style: style_conduta_elevatoria_2,
                popuplayertitle: 'conduta_elevatoria',
                interactive: true,
                title: '<img src="styles/legend/conduta_elevatoria_2.png" /> conduta_elevatoria'
            });
var format_FS_ETAR_3 = new ol.format.GeoJSON();
var features_FS_ETAR_3 = format_FS_ETAR_3.readFeatures(json_FS_ETAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_FS_ETAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FS_ETAR_3.addFeatures(features_FS_ETAR_3);
var lyr_FS_ETAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FS_ETAR_3, 
                style: style_FS_ETAR_3,
                popuplayertitle: 'FS_ETAR',
                interactive: true,
                title: '<img src="styles/legend/FS_ETAR_3.png" /> FS_ETAR'
            });
var format_colector_4 = new ol.format.GeoJSON();
var features_colector_4 = format_colector_4.readFeatures(json_colector_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_colector_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colector_4.addFeatures(features_colector_4);
var lyr_colector_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colector_4, 
                style: style_colector_4,
                popuplayertitle: 'colector',
                interactive: true,
                title: '<img src="styles/legend/colector_4.png" /> colector'
            });
var format_ramal_tubagem_5 = new ol.format.GeoJSON();
var features_ramal_tubagem_5 = format_ramal_tubagem_5.readFeatures(json_ramal_tubagem_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ramal_tubagem_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramal_tubagem_5.addFeatures(features_ramal_tubagem_5);
var lyr_ramal_tubagem_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramal_tubagem_5, 
                style: style_ramal_tubagem_5,
                popuplayertitle: 'ramal_tubagem',
                interactive: true,
                title: '<img src="styles/legend/ramal_tubagem_5.png" /> ramal_tubagem'
            });
var format_ramal_camara_6 = new ol.format.GeoJSON();
var features_ramal_camara_6 = format_ramal_camara_6.readFeatures(json_ramal_camara_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ramal_camara_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramal_camara_6.addFeatures(features_ramal_camara_6);
var lyr_ramal_camara_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramal_camara_6, 
                style: style_ramal_camara_6,
                popuplayertitle: 'ramal_camara',
                interactive: true,
                title: '<img src="styles/legend/ramal_camara_6.png" /> ramal_camara'
            });
var format_caixa_visita_7 = new ol.format.GeoJSON();
var features_caixa_visita_7 = format_caixa_visita_7.readFeatures(json_caixa_visita_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_caixa_visita_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caixa_visita_7.addFeatures(features_caixa_visita_7);
var lyr_caixa_visita_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caixa_visita_7, 
                style: style_caixa_visita_7,
                popuplayertitle: 'caixa_visita',
                interactive: true,
                title: '<img src="styles/legend/caixa_visita_7.png" /> caixa_visita'
            });
var group_Saneamento = new ol.layer.Group({
                                layers: [lyr_estacao_elevatoria_1,lyr_conduta_elevatoria_2,lyr_FS_ETAR_3,lyr_colector_4,lyr_ramal_tubagem_5,lyr_ramal_camara_6,lyr_caixa_visita_7,],
                                fold: 'open',
                                title: 'Saneamento'});

lyr_GoogleSatellite_0.setVisible(true);lyr_estacao_elevatoria_1.setVisible(true);lyr_conduta_elevatoria_2.setVisible(true);lyr_FS_ETAR_3.setVisible(true);lyr_colector_4.setVisible(true);lyr_ramal_tubagem_5.setVisible(true);lyr_ramal_camara_6.setVisible(true);lyr_caixa_visita_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Saneamento];
lyr_estacao_elevatoria_1.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'DATA': 'DATA', 'ANO_FUNC': 'ANO_FUNC', 'OPERADOR': 'OPERADOR', 'CICLOVIDA': 'CICLOVIDA', 'ALTU_MANO': 'ALTU_MANO', 'NUM_GRUPO': 'NUM_GRUPO', 'NUM_ELECT': 'NUM_ELECT', 'POT_BOMBA': 'POT_BOMBA', 'POT_CONTRA': 'POT_CONTRA', 'GERA_EMERG': 'GERA_EMERG', 'INST_ELET': 'INST_ELET', 'FABRICANTE': 'FABRICANTE', 'MODELO': 'MODELO', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'OBSERV': 'OBSERV', 'ORIGEMDADO': 'ORIGEMDADO', 'OBS_INF': 'OBS_INF', 'DISTRITO': 'DISTRITO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'OBS_LOCAL': 'OBS_LOCAL', 'DET_INTRU': 'DET_INTRU', 'DET_INUN': 'DET_INUN', 'DET_INC': 'DET_INC', 'MAT_FEC': 'MAT_FEC', 'PROF_SOL': 'PROF_SOL', 'COTA_FEC': 'COTA_FEC', 'FOTO_INT': 'FOTO_INT', 'FOTO_EXT': 'FOTO_EXT', 'NUM_BOMB': 'NUM_BOMB', 'CONSERVACA': 'CONSERVACA', });
lyr_conduta_elevatoria_2.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'DATA': 'DATA', 'ANO_FUNC': 'ANO_FUNC', 'OPERADOR': 'OPERADOR', 'CICLOVIDA': 'CICLOVIDA', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'MATERIAL': 'MATERIAL', 'DIAMETRO': 'DIAMETRO', 'PROF_MONT': 'PROF_MONT', 'PROF_JUS': 'PROF_JUS', 'COTA_MONT': 'COTA_MONT', 'COTA_JUSAT': 'COTA_JUSAT', 'INCLINA': 'INCLINA', 'OBSERV': 'OBSERV', 'ESTA_OPER': 'ESTA_OPER', 'ORIGEMDADO': 'ORIGEMDADO', 'OBS_INF': 'OBS_INF', 'DISTRITO': 'DISTRITO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'OBS_LOCAL': 'OBS_LOCAL', 'DATA_INT': 'DATA_INT', 'JUSTIF_INT': 'JUSTIF_INT', 'DESC_INT': 'DESC_INT', 'CONSERVACA': 'CONSERVACA', 'TIPO_SEC': 'TIPO_SEC', 'PRESSAO': 'PRESSAO', 'COMP_m': 'COMP_m', });
lyr_FS_ETAR_3.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'TIPO-DES': 'TIPO-DES', 'FOTO_INT': 'FOTO_INT', 'FOTO_EX': 'FOTO_EX', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'COTA_IMP': 'COTA_IMP', 'ORIGEMDADO': 'ORIGEMDADO', 'CONCELHO': 'CONCELHO', 'DISTRITO': 'DISTRITO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'N_POLICIA': 'N_POLICIA', 'CONSERV': 'CONSERV', 'OBSERV': 'OBSERV', });
lyr_colector_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'nr_cam_mon': 'nr_cam_mon', 'nr_cam_jus': 'nr_cam_jus', 'data': 'data', 'ano_func': 'ano_func', 'operador': 'operador', 'ciclovida': 'ciclovida', 'sistema': 'sistema', 'subsistema': 'subsistema', 'tipo_rede': 'tipo_rede', 'material': 'material', 'tipo_sec': 'tipo_sec', 'dim_sec': 'dim_sec', 'prof_mont': 'prof_mont', 'prof_jus': 'prof_jus', 'cota_mont': 'cota_mont', 'cota_jusat': 'cota_jusat', 'inclina': 'inclina', 'reg_escoa': 'reg_escoa', 'tipo_reves': 'tipo_reves', 'origemdado': 'origemdado', 'obs_inf': 'obs_inf', 'observ': 'observ', 'distrito': 'distrito', 'concelho': 'concelho', 'freguesia': 'freguesia', 'arruamento': 'arruamento', 'obs_local': 'obs_local', 'data_int': 'data_int', 'justif_int': 'justif_int', 'desc_int': 'desc_int', 'classe_m': 'classe_m', 'conservaca': 'conservaca', 'cota_t_mon': 'cota_t_mon', 'cota_t_jus': 'cota_t_jus', 'comp_m': 'comp_m', });
lyr_ramal_tubagem_5.set('fieldAliases', {'id': 'id', 'DATA': 'DATA', 'ANO_FUNC': 'ANO_FUNC', 'OPERADOR': 'OPERADOR', 'CICLOVIDA': 'CICLOVIDA', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'TIPO_REDE': 'TIPO_REDE', 'MATERIAL': 'MATERIAL', 'DIAMETRO': 'DIAMETRO', 'PROF_MONT': 'PROF_MONT', 'PROF_JUSA': 'PROF_JUSA', 'OBSERV': 'OBSERV', 'ORIGEMDADO': 'ORIGEMDADO', 'OBS_INF': 'OBS_INF', 'DISTRITO': 'DISTRITO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'NPOLICIA': 'NPOLICIA', 'OBS_LOCAL': 'OBS_LOCAL', 'CONSERVACA': 'CONSERVACA', 'DATA_EST': 'DATA_EST', 'DATA_INT': 'DATA_INT', 'JUSTIF_INT': 'JUSTIF_INT', 'DESC_INT': 'DESC_INT', 'CLASSE_M': 'CLASSE_M', 'COMP_m': 'COMP_m', });
lyr_ramal_camara_6.set('fieldAliases', {'id': 'id', 'NR_CAMARA': 'NR_CAMARA', 'DATA': 'DATA', 'ANO_FUNC': 'ANO_FUNC', 'OPERADOR': 'OPERADOR', 'CICLOVIDA': 'CICLOVIDA', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'TIPO_REDE': 'TIPO_REDE', 'COORD_M': 'COORD_M', 'COORD_P': 'COORD_P', 'COTA_TAMPA': 'COTA_TAMPA', 'COTA_TER': 'COTA_TER', 'PROF_SOL': 'PROF_SOL', 'COTA_SOL': 'COTA_SOL', 'FORMA_FECH': 'FORMA_FECH', 'DIM_FECHO': 'DIM_FECHO', 'FECHO_DIM1': 'FECHO_DIM1', 'FECHO_DIM2': 'FECHO_DIM2', 'TIPO_CORPO': 'TIPO_CORPO', 'DIM_CAM': 'DIM_CAM', 'MATERIAL': 'MATERIAL', 'LIGACAO': 'LIGACAO', 'N_LIGACOES': 'N_LIGACOES', 'OBSERV': 'OBSERV', 'ORIGEMDADO': 'ORIGEMDADO', 'OBS_INF': 'OBS_INF', 'DISTRITO': 'DISTRITO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'N_POLICIA': 'N_POLICIA', 'CONSERVACA': 'CONSERVACA', 'DATA_EST': 'DATA_EST', 'DATA_INT': 'DATA_INT', 'JUSTIF_INT': 'JUSTIF_INT', 'DESC_INT': 'DESC_INT', 'FOTO_MON': 'FOTO_MON', 'FOTO_JUS': 'FOTO_JUS', 'FOTO_FEC': 'FOTO_FEC', 'MATER_FEC': 'MATER_FEC', 'PROF_MON': 'PROF_MON', 'PROF_JUS': 'PROF_JUS', 'ABERTURA': 'ABERTURA', });
lyr_caixa_visita_7.set('fieldAliases', {'id': 'id', 'NR_CAMARA': 'NR_CAMARA', 'DATA': 'DATA', 'ANO_FUNC': 'ANO_FUNC', 'OPERADOR': 'OPERADOR', 'CICLOVIDA': 'CICLOVIDA', 'SISTEMA': 'SISTEMA', 'SUBSISTEMA': 'SUBSISTEMA', 'TIPO_REDE': 'TIPO_REDE', 'COORD_M': 'COORD_M', 'COORD_P': 'COORD_P', 'COTA_TAMPA': 'COTA_TAMPA', 'COTA_TER': 'COTA_TER', 'PROF_SOL': 'PROF_SOL', 'COTA_SOL': 'COTA_SOL', 'INS_COL': 'INS_COL', 'TIPO_QUEDA': 'TIPO_QUEDA', 'FORMA_FECH': 'FORMA_FECH', 'CLASS_FECH': 'CLASS_FECH', 'FABRI_FECH': 'FABRI_FECH', 'MATER_FEC': 'MATER_FEC', 'OBSERV': 'OBSERV', 'DIM_FECHO': 'DIM_FECHO', 'FECHO_DIM1': 'FECHO_DIM1', 'FECHO_DIM2': 'FECHO_DIM2', 'TIPO_CORPO': 'TIPO_CORPO', 'DIM_CAM': 'DIM_CAM', 'MAT_CORPO': 'MAT_CORPO', 'TIPO_COBER': 'TIPO_COBER', 'TIPO_ACESS': 'TIPO_ACESS', 'LIG_EMISS': 'LIG_EMISS', 'LIG_RAM_IN': 'LIG_RAM_IN', 'ORIGEMDADO': 'ORIGEMDADO', 'OBS_INF': 'OBS_INF', 'DISTRITO': 'DISTRITO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'ARRUAMENTO': 'ARRUAMENTO', 'N_POLICIA': 'N_POLICIA', 'OBS_LOCAL': 'OBS_LOCAL', 'CONSERVACA': 'CONSERVACA', 'DATA_EST': 'DATA_EST', 'DATA_INT': 'DATA_INT', 'JUSTIF_INT': 'JUSTIF_INT', 'DESC_INT': 'DESC_INT', 'FOTO_MON': 'FOTO_MON', 'FOTO_JUS': 'FOTO_JUS', 'FOTO_FEC': 'FOTO_FEC', 'ABERTURA': 'ABERTURA', });
lyr_estacao_elevatoria_1.set('fieldImages', {'id': '', 'DESIGNACAO': '', 'DATA': '', 'ANO_FUNC': '', 'OPERADOR': '', 'CICLOVIDA': '', 'ALTU_MANO': '', 'NUM_GRUPO': '', 'NUM_ELECT': '', 'POT_BOMBA': '', 'POT_CONTRA': '', 'GERA_EMERG': '', 'INST_ELET': '', 'FABRICANTE': '', 'MODELO': '', 'SISTEMA': '', 'SUBSISTEMA': '', 'OBSERV': '', 'ORIGEMDADO': '', 'OBS_INF': '', 'DISTRITO': '', 'CONCELHO': '', 'FREGUESIA': '', 'ARRUAMENTO': '', 'OBS_LOCAL': '', 'DET_INTRU': '', 'DET_INUN': '', 'DET_INC': '', 'MAT_FEC': '', 'PROF_SOL': '', 'COTA_FEC': '', 'FOTO_INT': '', 'FOTO_EXT': '', 'NUM_BOMB': '', 'CONSERVACA': '', });
lyr_conduta_elevatoria_2.set('fieldImages', {'id': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'DATA': 'TextEdit', 'ANO_FUNC': 'TextEdit', 'OPERADOR': 'TextEdit', 'CICLOVIDA': 'TextEdit', 'SISTEMA': 'TextEdit', 'SUBSISTEMA': 'TextEdit', 'MATERIAL': 'TextEdit', 'DIAMETRO': 'TextEdit', 'PROF_MONT': 'TextEdit', 'PROF_JUS': 'TextEdit', 'COTA_MONT': 'TextEdit', 'COTA_JUSAT': 'TextEdit', 'INCLINA': 'TextEdit', 'OBSERV': 'TextEdit', 'ESTA_OPER': 'TextEdit', 'ORIGEMDADO': 'TextEdit', 'OBS_INF': 'TextEdit', 'DISTRITO': 'TextEdit', 'CONCELHO': 'TextEdit', 'FREGUESIA': 'TextEdit', 'ARRUAMENTO': 'TextEdit', 'OBS_LOCAL': 'TextEdit', 'DATA_INT': 'TextEdit', 'JUSTIF_INT': 'TextEdit', 'DESC_INT': 'TextEdit', 'CONSERVACA': 'TextEdit', 'TIPO_SEC': 'TextEdit', 'PRESSAO': 'TextEdit', 'COMP_m': 'TextEdit', });
lyr_FS_ETAR_3.set('fieldImages', {'id': '', 'NOME': '', 'TIPO-DES': '', 'FOTO_INT': '', 'FOTO_EX': '', 'SISTEMA': '', 'SUBSISTEMA': '', 'COTA_IMP': '', 'ORIGEMDADO': '', 'CONCELHO': '', 'DISTRITO': '', 'FREGUESIA': '', 'ARRUAMENTO': '', 'N_POLICIA': '', 'CONSERV': '', 'OBSERV': '', });
lyr_colector_4.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'nr_cam_mon': 'TextEdit', 'nr_cam_jus': 'TextEdit', 'data': 'TextEdit', 'ano_func': 'TextEdit', 'operador': 'TextEdit', 'ciclovida': 'TextEdit', 'sistema': 'TextEdit', 'subsistema': 'TextEdit', 'tipo_rede': 'TextEdit', 'material': 'TextEdit', 'tipo_sec': 'TextEdit', 'dim_sec': 'TextEdit', 'prof_mont': 'TextEdit', 'prof_jus': 'TextEdit', 'cota_mont': 'TextEdit', 'cota_jusat': 'TextEdit', 'inclina': 'TextEdit', 'reg_escoa': 'TextEdit', 'tipo_reves': 'TextEdit', 'origemdado': 'TextEdit', 'obs_inf': 'TextEdit', 'observ': 'TextEdit', 'distrito': 'TextEdit', 'concelho': 'TextEdit', 'freguesia': 'TextEdit', 'arruamento': 'TextEdit', 'obs_local': 'TextEdit', 'data_int': 'TextEdit', 'justif_int': 'TextEdit', 'desc_int': 'TextEdit', 'classe_m': 'TextEdit', 'conservaca': 'TextEdit', 'cota_t_mon': 'TextEdit', 'cota_t_jus': 'TextEdit', 'comp_m': 'TextEdit', });
lyr_ramal_tubagem_5.set('fieldImages', {'id': 'TextEdit', 'DATA': 'TextEdit', 'ANO_FUNC': 'TextEdit', 'OPERADOR': 'TextEdit', 'CICLOVIDA': 'TextEdit', 'SISTEMA': 'TextEdit', 'SUBSISTEMA': 'TextEdit', 'TIPO_REDE': 'TextEdit', 'MATERIAL': 'TextEdit', 'DIAMETRO': 'TextEdit', 'PROF_MONT': 'TextEdit', 'PROF_JUSA': 'TextEdit', 'OBSERV': 'TextEdit', 'ORIGEMDADO': 'TextEdit', 'OBS_INF': 'TextEdit', 'DISTRITO': 'TextEdit', 'CONCELHO': 'TextEdit', 'FREGUESIA': 'TextEdit', 'ARRUAMENTO': 'TextEdit', 'NPOLICIA': 'TextEdit', 'OBS_LOCAL': 'TextEdit', 'CONSERVACA': 'TextEdit', 'DATA_EST': 'TextEdit', 'DATA_INT': 'TextEdit', 'JUSTIF_INT': 'TextEdit', 'DESC_INT': 'TextEdit', 'CLASSE_M': 'TextEdit', 'COMP_m': 'TextEdit', });
lyr_ramal_camara_6.set('fieldImages', {'id': 'TextEdit', 'NR_CAMARA': '', 'DATA': '', 'ANO_FUNC': '', 'OPERADOR': '', 'CICLOVIDA': '', 'SISTEMA': '', 'SUBSISTEMA': '', 'TIPO_REDE': '', 'COORD_M': '', 'COORD_P': '', 'COTA_TAMPA': '', 'COTA_TER': '', 'PROF_SOL': '', 'COTA_SOL': '', 'FORMA_FECH': '', 'DIM_FECHO': '', 'FECHO_DIM1': '', 'FECHO_DIM2': '', 'TIPO_CORPO': '', 'DIM_CAM': '', 'MATERIAL': '', 'LIGACAO': '', 'N_LIGACOES': '', 'OBSERV': '', 'ORIGEMDADO': '', 'OBS_INF': '', 'DISTRITO': '', 'CONCELHO': '', 'FREGUESIA': '', 'ARRUAMENTO': '', 'N_POLICIA': '', 'CONSERVACA': '', 'DATA_EST': '', 'DATA_INT': '', 'JUSTIF_INT': '', 'DESC_INT': '', 'FOTO_MON': '', 'FOTO_JUS': '', 'FOTO_FEC': '', 'MATER_FEC': '', 'PROF_MON': '', 'PROF_JUS': '', 'ABERTURA': '', });
lyr_caixa_visita_7.set('fieldImages', {'id': 'TextEdit', 'NR_CAMARA': '', 'DATA': '', 'ANO_FUNC': '', 'OPERADOR': '', 'CICLOVIDA': '', 'SISTEMA': '', 'SUBSISTEMA': '', 'TIPO_REDE': '', 'COORD_M': '', 'COORD_P': '', 'COTA_TAMPA': '', 'COTA_TER': '', 'PROF_SOL': '', 'COTA_SOL': '', 'INS_COL': '', 'TIPO_QUEDA': '', 'FORMA_FECH': '', 'CLASS_FECH': '', 'FABRI_FECH': '', 'MATER_FEC': '', 'OBSERV': '', 'DIM_FECHO': '', 'FECHO_DIM1': '', 'FECHO_DIM2': '', 'TIPO_CORPO': '', 'DIM_CAM': '', 'MAT_CORPO': '', 'TIPO_COBER': '', 'TIPO_ACESS': '', 'LIG_EMISS': '', 'LIG_RAM_IN': '', 'ORIGEMDADO': '', 'OBS_INF': '', 'DISTRITO': '', 'CONCELHO': '', 'FREGUESIA': '', 'ARRUAMENTO': '', 'N_POLICIA': '', 'OBS_LOCAL': '', 'CONSERVACA': '', 'DATA_EST': '', 'DATA_INT': '', 'JUSTIF_INT': '', 'DESC_INT': '', 'FOTO_MON': '', 'FOTO_JUS': '', 'FOTO_FEC': '', 'ABERTURA': '', });
lyr_estacao_elevatoria_1.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'DATA': 'no label', 'ANO_FUNC': 'no label', 'OPERADOR': 'no label', 'CICLOVIDA': 'no label', 'ALTU_MANO': 'no label', 'NUM_GRUPO': 'no label', 'NUM_ELECT': 'no label', 'POT_BOMBA': 'no label', 'POT_CONTRA': 'no label', 'GERA_EMERG': 'no label', 'INST_ELET': 'no label', 'FABRICANTE': 'no label', 'MODELO': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'OBSERV': 'no label', 'ORIGEMDADO': 'no label', 'OBS_INF': 'no label', 'DISTRITO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'OBS_LOCAL': 'no label', 'DET_INTRU': 'no label', 'DET_INUN': 'no label', 'DET_INC': 'no label', 'MAT_FEC': 'no label', 'PROF_SOL': 'no label', 'COTA_FEC': 'no label', 'FOTO_INT': 'no label', 'FOTO_EXT': 'no label', 'NUM_BOMB': 'no label', 'CONSERVACA': 'no label', });
lyr_conduta_elevatoria_2.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'DATA': 'no label', 'ANO_FUNC': 'no label', 'OPERADOR': 'no label', 'CICLOVIDA': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'MATERIAL': 'no label', 'DIAMETRO': 'no label', 'PROF_MONT': 'no label', 'PROF_JUS': 'no label', 'COTA_MONT': 'no label', 'COTA_JUSAT': 'no label', 'INCLINA': 'no label', 'OBSERV': 'no label', 'ESTA_OPER': 'no label', 'ORIGEMDADO': 'no label', 'OBS_INF': 'no label', 'DISTRITO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'OBS_LOCAL': 'no label', 'DATA_INT': 'no label', 'JUSTIF_INT': 'no label', 'DESC_INT': 'no label', 'CONSERVACA': 'no label', 'TIPO_SEC': 'no label', 'PRESSAO': 'no label', 'COMP_m': 'no label', });
lyr_FS_ETAR_3.set('fieldLabels', {'id': 'no label', 'NOME': 'no label', 'TIPO-DES': 'no label', 'FOTO_INT': 'no label', 'FOTO_EX': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'COTA_IMP': 'no label', 'ORIGEMDADO': 'no label', 'CONCELHO': 'no label', 'DISTRITO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'N_POLICIA': 'no label', 'CONSERV': 'no label', 'OBSERV': 'no label', });
lyr_colector_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'nr_cam_mon': 'no label', 'nr_cam_jus': 'no label', 'data': 'no label', 'ano_func': 'no label', 'operador': 'no label', 'ciclovida': 'no label', 'sistema': 'no label', 'subsistema': 'no label', 'tipo_rede': 'no label', 'material': 'no label', 'tipo_sec': 'no label', 'dim_sec': 'no label', 'prof_mont': 'no label', 'prof_jus': 'no label', 'cota_mont': 'no label', 'cota_jusat': 'no label', 'inclina': 'no label', 'reg_escoa': 'no label', 'tipo_reves': 'no label', 'origemdado': 'no label', 'obs_inf': 'no label', 'observ': 'no label', 'distrito': 'no label', 'concelho': 'no label', 'freguesia': 'no label', 'arruamento': 'no label', 'obs_local': 'no label', 'data_int': 'no label', 'justif_int': 'no label', 'desc_int': 'no label', 'classe_m': 'no label', 'conservaca': 'no label', 'cota_t_mon': 'no label', 'cota_t_jus': 'no label', 'comp_m': 'no label', });
lyr_ramal_tubagem_5.set('fieldLabels', {'id': 'no label', 'DATA': 'no label', 'ANO_FUNC': 'no label', 'OPERADOR': 'no label', 'CICLOVIDA': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'TIPO_REDE': 'no label', 'MATERIAL': 'no label', 'DIAMETRO': 'no label', 'PROF_MONT': 'no label', 'PROF_JUSA': 'no label', 'OBSERV': 'no label', 'ORIGEMDADO': 'no label', 'OBS_INF': 'no label', 'DISTRITO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'NPOLICIA': 'no label', 'OBS_LOCAL': 'no label', 'CONSERVACA': 'no label', 'DATA_EST': 'no label', 'DATA_INT': 'no label', 'JUSTIF_INT': 'no label', 'DESC_INT': 'no label', 'CLASSE_M': 'no label', 'COMP_m': 'no label', });
lyr_ramal_camara_6.set('fieldLabels', {'id': 'no label', 'NR_CAMARA': 'no label', 'DATA': 'no label', 'ANO_FUNC': 'no label', 'OPERADOR': 'no label', 'CICLOVIDA': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'TIPO_REDE': 'no label', 'COORD_M': 'no label', 'COORD_P': 'no label', 'COTA_TAMPA': 'no label', 'COTA_TER': 'no label', 'PROF_SOL': 'no label', 'COTA_SOL': 'no label', 'FORMA_FECH': 'no label', 'DIM_FECHO': 'no label', 'FECHO_DIM1': 'no label', 'FECHO_DIM2': 'no label', 'TIPO_CORPO': 'no label', 'DIM_CAM': 'no label', 'MATERIAL': 'no label', 'LIGACAO': 'no label', 'N_LIGACOES': 'no label', 'OBSERV': 'no label', 'ORIGEMDADO': 'no label', 'OBS_INF': 'no label', 'DISTRITO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'N_POLICIA': 'no label', 'CONSERVACA': 'no label', 'DATA_EST': 'no label', 'DATA_INT': 'no label', 'JUSTIF_INT': 'no label', 'DESC_INT': 'no label', 'FOTO_MON': 'no label', 'FOTO_JUS': 'no label', 'FOTO_FEC': 'no label', 'MATER_FEC': 'no label', 'PROF_MON': 'no label', 'PROF_JUS': 'no label', 'ABERTURA': 'no label', });
lyr_caixa_visita_7.set('fieldLabels', {'id': 'no label', 'NR_CAMARA': 'no label', 'DATA': 'no label', 'ANO_FUNC': 'no label', 'OPERADOR': 'no label', 'CICLOVIDA': 'no label', 'SISTEMA': 'no label', 'SUBSISTEMA': 'no label', 'TIPO_REDE': 'no label', 'COORD_M': 'no label', 'COORD_P': 'no label', 'COTA_TAMPA': 'no label', 'COTA_TER': 'no label', 'PROF_SOL': 'no label', 'COTA_SOL': 'no label', 'INS_COL': 'no label', 'TIPO_QUEDA': 'no label', 'FORMA_FECH': 'no label', 'CLASS_FECH': 'no label', 'FABRI_FECH': 'no label', 'MATER_FEC': 'no label', 'OBSERV': 'no label', 'DIM_FECHO': 'no label', 'FECHO_DIM1': 'no label', 'FECHO_DIM2': 'no label', 'TIPO_CORPO': 'no label', 'DIM_CAM': 'no label', 'MAT_CORPO': 'no label', 'TIPO_COBER': 'no label', 'TIPO_ACESS': 'no label', 'LIG_EMISS': 'no label', 'LIG_RAM_IN': 'no label', 'ORIGEMDADO': 'no label', 'OBS_INF': 'no label', 'DISTRITO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'ARRUAMENTO': 'no label', 'N_POLICIA': 'no label', 'OBS_LOCAL': 'no label', 'CONSERVACA': 'no label', 'DATA_EST': 'no label', 'DATA_INT': 'no label', 'JUSTIF_INT': 'no label', 'DESC_INT': 'no label', 'FOTO_MON': 'no label', 'FOTO_JUS': 'no label', 'FOTO_FEC': 'no label', 'ABERTURA': 'no label', });
lyr_caixa_visita_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});