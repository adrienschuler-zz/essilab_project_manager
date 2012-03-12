essilab.project.view.project = essilab.project.view.project || {};

essilab.project.view.project.List = Class.create(essilab.bpm.View, {
	options: {
		name: "project/list",
		title : "Liste des Projets",
	},

	/* account view composent*/
	buildView : function() {
		/*
		* content to incude
		*/

		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Liste des projets</h1>"
		});

		var dataSource = isc.DataSource.create({
			ID:"projects",
			dataFormat:"json",
			dataURL:"./views/project/data/project_list.js", // #TODO bind
			fields:[
				{title:"ID", name:"id"},
				{title:"Nom du projet", name:"name"},
				{title:"Nb Res.", name:"nbRes"},
				{title:"Chef de projet", name:"owner"}
			]
		});

		var listGrid = isc.ListGrid.create({
			ID: "UserlistGrid",
			dataSource: "projects",
			autoFetchData: true,
			rememberHistory: true
		});

		/*
		* Assembling content into local Vlayout
		*/
		this.container = isc.VLayout.create({
			members: [
				title,
				UserlistGrid
			]
		});

	}


});
//Register view.
new essilab.project.view.project.List();
/*end*/
