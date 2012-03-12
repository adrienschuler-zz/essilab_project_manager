essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.Home = Class.create(essilab.bpm.View, {
	options: {
		name: "user/home",
		title : "Utilisateurs"
	},
	buildView : function() {
		var label = isc.Label.create({
			height: 30,
			padding: 10,
			align: "center",
			valign: "center",
			wrap: false,
			// icon: "/assets/img/icons/approved.png",
			showEdges: true,
			contents: "<h1>Compte utilisateur de : " + window.project.user.login + "</h1>"
		})
		// Home page title.
		this.container = isc.VLayout.create({
			members: [ 
				label
			],
			resizable: true,
			styleName: "loginForm",
			width: "20%",
		});
		// Get authorized widget.
	},

	reset: function(){

	},

});
//Register view.
new essilab.project.view.user.Home();
