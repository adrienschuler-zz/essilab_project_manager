isc.ListGrid.create({
    ID: "countryList",
    width:500, height:350, 
    alternateRecordStyles:true,
    data: countryData,
    fields: [
        {name: "countryName", title: "Country"},
        {name: "capital", title: "Capital"},
        {name: "continent", title: "Continent"}
    ],
    canExpandRecords: true,
    expansionMode: "detailField",
    detailField: "background"
});

isc.Button.create({ 
    ID : "buttonPdf",
    width: 150,
    title:"Export",  
    click:function () {
           var settings = {
	    skinName: "skin_styles",// default skin, without .css 
	    pdfName: "export"// without .pdf
  	    };
           isc.RPCManager.exportContent(mainLayout, settings);
        }
});
isc.Button.create({ 
    ID : "buttonPreview",
    width: 150,
    title:"Show Print Preview",  
    click:function () {
	    mainLayout.showPrintPreview();
        }
});
isc.VLayout.create({
	ID: "mainLayout",
	width: 500,
    height: 350,
    members: [
        countryList,
		buttonPdf,
		buttonPreview
    ]
});
