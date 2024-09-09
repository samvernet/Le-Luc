var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Locauxvacantsentravaux_1 = new ol.format.GeoJSON();
var features_Locauxvacantsentravaux_1 = format_Locauxvacantsentravaux_1.readFeatures(json_Locauxvacantsentravaux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locauxvacantsentravaux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locauxvacantsentravaux_1.addFeatures(features_Locauxvacantsentravaux_1);
var lyr_Locauxvacantsentravaux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locauxvacantsentravaux_1, 
                style: style_Locauxvacantsentravaux_1,
                popuplayertitle: "Locaux vacants & en travaux",
                interactive: true,
    title: 'Locaux vacants & en travaux<br />\
    <img src="styles/legend/Locauxvacantsentravaux_1_0.png" /> Locaux en travaux<br />\
    <img src="styles/legend/Locauxvacantsentravaux_1_1.png" /> Locaux vacants<br />'
        });
var format_EmplacementN2_2 = new ol.format.GeoJSON();
var features_EmplacementN2_2 = format_EmplacementN2_2.readFeatures(json_EmplacementN2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmplacementN2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementN2_2.addFeatures(features_EmplacementN2_2);
var lyr_EmplacementN2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmplacementN2_2, 
                style: style_EmplacementN2_2,
                popuplayertitle: "Emplacement N°2",
                interactive: true,
                title: 'Emplacement N°2'
            });
var format_EmplacementN1_3 = new ol.format.GeoJSON();
var features_EmplacementN1_3 = format_EmplacementN1_3.readFeatures(json_EmplacementN1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmplacementN1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementN1_3.addFeatures(features_EmplacementN1_3);
var lyr_EmplacementN1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmplacementN1_3, 
                style: style_EmplacementN1_3,
                popuplayertitle: "Emplacement N°1",
                interactive: true,
                title: 'Emplacement N°1'
            });
var format_EnseignesNationales_4 = new ol.format.GeoJSON();
var features_EnseignesNationales_4 = format_EnseignesNationales_4.readFeatures(json_EnseignesNationales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnseignesNationales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnseignesNationales_4.addFeatures(features_EnseignesNationales_4);
var lyr_EnseignesNationales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnseignesNationales_4, 
                style: style_EnseignesNationales_4,
                popuplayertitle: "Enseignes Nationales",
                interactive: true,
    title: 'Enseignes Nationales<br />\
    <img src="styles/legend/EnseignesNationales_4_0.png" /> Locale<br />\
    <img src="styles/legend/EnseignesNationales_4_1.png" /> Nationale<br />'
        });
var format_Notesdevantures2024_5 = new ol.format.GeoJSON();
var features_Notesdevantures2024_5 = format_Notesdevantures2024_5.readFeatures(json_Notesdevantures2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notesdevantures2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Notesdevantures2024_5.addFeatures(features_Notesdevantures2024_5);
var lyr_Notesdevantures2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Notesdevantures2024_5, 
                style: style_Notesdevantures2024_5,
                popuplayertitle: "Notes devantures 2024",
                interactive: true,
    title: 'Notes devantures 2024<br />\
    <img src="styles/legend/Notesdevantures2024_5_0.png" /> 2 - 3<br />\
    <img src="styles/legend/Notesdevantures2024_5_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Notesdevantures2024_5_2.png" /> 8 - 9<br />\
    <img src="styles/legend/Notesdevantures2024_5_3.png" /> 10 - 11<br />\
    <img src="styles/legend/Notesdevantures2024_5_4.png" /> 12 - 13<br />\
    <img src="styles/legend/Notesdevantures2024_5_5.png" /> 15 - 16<br />\
    <img src="styles/legend/Notesdevantures2024_5_6.png" /> 18 - 19<br />'
        });
var format_Lelucenprovence2024_catgories_dactivits_6 = new ol.format.GeoJSON();
var features_Lelucenprovence2024_catgories_dactivits_6 = format_Lelucenprovence2024_catgories_dactivits_6.readFeatures(json_Lelucenprovence2024_catgories_dactivits_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lelucenprovence2024_catgories_dactivits_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lelucenprovence2024_catgories_dactivits_6.addFeatures(features_Lelucenprovence2024_catgories_dactivits_6);
var lyr_Lelucenprovence2024_catgories_dactivits_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lelucenprovence2024_catgories_dactivits_6, 
                style: style_Lelucenprovence2024_catgories_dactivits_6,
                popuplayertitle: "Le luc en provence 2024_ — catégories_d'activités",
                interactive: true,
    title: 'Le luc en provence 2024_ — catégories_d\'activités<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_5.png" /> Hôtellerie restauration<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_6.png" /> Services entreprises<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_7.png" /> Services non commerciaux<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_8.png" /> Services personnels<br />\
    <img src="styles/legend/Lelucenprovence2024_catgories_dactivits_6_9.png" /> Véhicules<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Locauxvacantsentravaux_1.setVisible(false);lyr_EmplacementN2_2.setVisible(false);lyr_EmplacementN1_3.setVisible(false);lyr_EnseignesNationales_4.setVisible(false);lyr_Notesdevantures2024_5.setVisible(false);lyr_Lelucenprovence2024_catgories_dactivits_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Locauxvacantsentravaux_1,lyr_EmplacementN2_2,lyr_EmplacementN1_3,lyr_EnseignesNationales_4,lyr_Notesdevantures2024_5,lyr_Lelucenprovence2024_catgories_dactivits_6];
lyr_Locauxvacantsentravaux_1.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'Vacance 2024': 'Vacance 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', 'export PDF': 'export PDF', });
lyr_EmplacementN2_2.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'Vacance 2024': 'Vacance 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', });
lyr_EmplacementN1_3.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'Vacance 2024': 'Vacance 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', });
lyr_EnseignesNationales_4.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'Vacance 2024': 'Vacance 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', });
lyr_Notesdevantures2024_5.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'Vacance 2024': 'Vacance 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', });
lyr_Lelucenprovence2024_catgories_dactivits_6.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface utile': 'Surface utile', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'IDENTIFICATION': 'IDENTIFICATION', 'Mod2014': 'Mod2014', 'Code2014': 'Code2014', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Mod2017': 'Mod2017', 'Code2017': 'Code2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'Activité 2024': 'Activité 2024', 'surface qgis': 'surface qgis', 'Empl': 'Empl', 'export PDF': 'export PDF', });
lyr_Locauxvacantsentravaux_1.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'Vacance 2024': 'ValueMap', 'surface qgis': 'Range', 'Empl': 'Range', 'export PDF': 'TextEdit', });
lyr_EmplacementN2_2.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'Vacance 2024': 'ValueMap', 'surface qgis': 'Range', 'Empl': 'Range', });
lyr_EmplacementN1_3.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'Vacance 2024': 'ValueMap', 'surface qgis': 'Range', 'Empl': 'Range', });
lyr_EnseignesNationales_4.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'Vacance 2024': 'ValueMap', 'surface qgis': 'Range', 'Empl': 'Range', });
lyr_Notesdevantures2024_5.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'Vacance 2024': 'ValueMap', 'surface qgis': 'Range', 'Empl': 'Range', });
lyr_Lelucenprovence2024_catgories_dactivits_6.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'Range', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface utile': 'TextEdit', 'Note': 'Range', 'DateTerrai': 'DateTime', 'IDENTIFICATION': 'TextEdit', 'Mod2014': 'TextEdit', 'Code2014': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Mod2017': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'Activité 2024': 'TextEdit', 'surface qgis': 'Range', 'Empl': 'Range', 'export PDF': 'TextEdit', });
lyr_Locauxvacantsentravaux_1.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'no label', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'inline label - always visible', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'hidden field', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'no label', 'Vacance 2024': 'no label', 'surface qgis': 'inline label - always visible', 'Empl': 'inline label - visible with data', 'export PDF': 'inline label - always visible', });
lyr_EmplacementN2_2.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'no label', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'inline label - visible with data', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'no label', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'hidden field', 'Vacance 2024': 'hidden field', 'surface qgis': 'inline label - always visible', 'Empl': 'no label', });
lyr_EmplacementN1_3.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'no label', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'inline label - visible with data', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'no label', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'hidden field', 'Vacance 2024': 'hidden field', 'surface qgis': 'inline label - always visible', 'Empl': 'no label', });
lyr_EnseignesNationales_4.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'no label', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'inline label - visible with data', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'no label', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'hidden field', 'Vacance 2024': 'hidden field', 'surface qgis': 'inline label - always visible', 'Empl': 'no label', });
lyr_Notesdevantures2024_5.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'no label', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'no label', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'no label', 'EN': 'inline label - always visible', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'no label', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'hidden field', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'no label', 'Vacance 2024': 'hidden field', 'surface qgis': 'inline label - always visible', 'Empl': 'no label', });
lyr_Lelucenprovence2024_catgories_dactivits_6.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'inline label - always visible', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'inline label - always visible', 'Surface utile': 'hidden field', 'Note': 'inline label - visible with data', 'DateTerrai': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Mod2014': 'hidden field', 'Code2014': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Mod2017': 'hidden field', 'Code2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Activité 2024': 'inline label - always visible', 'surface qgis': 'inline label - always visible', 'Empl': 'inline label - visible with data', 'export PDF': 'inline label - visible with data', });
lyr_Lelucenprovence2024_catgories_dactivits_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});