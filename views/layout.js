window.essilab.project.view.Layout = Class.create({
	options : {
		name : "views/layout.js"
	},

	initialize: function() {
		this.header = isc.VLayout.create({
			members: [],
			styleName: "header",
			width: "100%",
			height: "60px"
		});
		this.breadcrumb = isc.VLayout.create({
			members: [],
			styleName: "breadcrumb",
			width: "100%",
			padding : "3px",
			height:"28px"
			
		});
		this.contextMenu = isc.HLayout.create({
			members: [],
			resizable: true,
			showResizeBar: true,
			styleName: "contextMenu",
			width: "15%"
		});

		this.contextView = isc.HLayout.create({
			ID: "contextView",
			members: [],
			resizable: true,
			styleName: "contextView",
			padding : "5px",
			width: "85%"
		});

		this.context = isc.HLayout.create({
			members: [
				this.contextMenu, 
				this.contextView 
			],
			styleName: "context",
			width: "100%"
		});

		this.container = isc.VLayout.create({
			members: [ this.header,this.breadcrumb, this.context ],
			styleName: "mainWrapper",
			width: "100%",
			height: "100%"
		});
	}

});

