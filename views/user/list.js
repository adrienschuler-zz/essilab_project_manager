essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.List = Class.create(essilab.bpm.View, {
	options: {
		name: "user/list",
		title : "Liste des utilisateurs",
		parent : "user/home"
	},

	/* account view composent*/
	buildView : function() {
		/*
		* content to incude
		*/

		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Liste des utilisateurs</h1>"
		});

		var dataSource = isc.DataSource.create({
			ID:"users",
			dataFormat:"json",
			dataURL:"./views/user/data/user_list.js", // #TODO bind
			fields:[
				{title:"Nom", name:"firstname"},
				{title:"Prénom", name:"lastname"},
				{title:"Poste", name:"role"}
			]
		});

		var listGrid = isc.ListGrid.create({
			ID: "ProjectlistGrid",
			dataSource: "users",
			autoFetchData: true,
			rememberHistory: true
		});
		
		/*
		* Assembling content into local Vlayout
		*/
		this.container = isc.VLayout.create({
			members: [
				title,
				ProjectlistGrid
			]
		});
		
	}

});
//Register view.
new essilab.project.view.user.List();
/*end*/
