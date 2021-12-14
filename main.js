
require(["esri/Map",
    "esri/views/MapView",
    "esri/WebMap",
    "esri/widgets/Home",
    "esri/widgets/Compass",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/DistanceMeasurement2D",
   

], (
    Map,
    MapView,
    WebMap,
    Home,
    Compass,
    Legend,
    Expand,
    BasemapGallery,
    LayerList,
    DistanceMeasurement2D,
   
) => {
    // const map = new Map({
    //     basemap: "hybrid"
    // });

    const webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
            id: "668025792e8a42dbadb666ac2f3a934d"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webmap,
        zoom: 15,
        center: [42.53969029645249, 17.418488185812773] // longitude, latitude
    });

    // Widgets=================================
    //Home---------------------
    let homeWidget = new Home({
        view: view
    });
    view.ui.add(homeWidget, "top-left");

    //Zoom------------------------

    view.ui.move("zoom", "top-left");

    //Compass----------------------------
    let compass = new Compass({
        view: view
    });
    view.ui.add(compass, "top-left");
    //BasemapGallery--------------------------
    let basemapGallery = new BasemapGallery({
        view: view
    });
    basemapGalleryListExpand = new Expand({
        expandIconClass: "esri-icon-basemap",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
        expandTooltip: "Expand basemapGallery",
        view: view,
        content: basemapGallery
    });
    view.ui.add(basemapGalleryListExpand, "top-left");

    //Legend------------------------------
    let legend = new Legend({
        view: view
    });
    legendListExpand = new Expand({
        expandIconClass: "esri-icon-legend",
        expandTooltip: "Expand legend",
        view: view,
        content: legend
    });
    view.ui.add(legendListExpand, "top-left");

    //LayerList---------------------------
    let layerList = new LayerList({
        view: view
    });
    layerListListExpand = new Expand({
        expandIconClass: "esri-icon-layer-list",
        expandTooltip: "Expand layerList",
        view: view,
        content: layerList
    });
    view.ui.add(layerListListExpand, "top-left");

    //DistanceMeasurement2D---------------------------

    let measurementWidget = new DistanceMeasurement2D({
        view: view
      });
      measurementWidgetListExpand = new Expand({
        expandIconClass: "esri-icon-measure",
        expandTooltip: "Expand measurementWidget",
        view: view,
        content: measurementWidget
    });
    view.ui.add(measurementWidgetListExpand, "top-left");
// info Widget
const info = document.querySelector("#info")
  infoListExpand = new Expand({
    expandIconClass: "esri-icon-dock-right",
    expandTooltip: "Expand infoWidget",
    view: view,
    content: info
});
view.ui.add(infoListExpand, "top-right");





});
