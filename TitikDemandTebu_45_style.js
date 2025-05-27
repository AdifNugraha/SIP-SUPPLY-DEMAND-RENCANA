var size = 0;
var placement = 'point';
function categories_TitikDemandTebu_45(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Gula Jawa dan Gula Merah':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(231,255,171,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.027777777777777776,
                  anchor: [540.0, 540.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Demand Tebu Gula.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sirup':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(231,255,171,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.027777777777777776,
                  anchor: [540.0, 540.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Demand Tebu Sirup.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tebu':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(231,255,171,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.027777777777777776,
                  anchor: [540.0, 540.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Demand Tebu.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TitikDemandTebu_45 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("JENIS");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_TitikDemandTebu_45(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
