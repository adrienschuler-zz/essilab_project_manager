essilab.project.view.project = essilab.project.view.project || {};

essilab.project.view.project.Create = Class.create(essilab.bpm.View, {
	options: {
		name: "project/create",
		title : "Création d'un projet"
	},
	
	buildView : function() {
		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Création d'un nouveau projet</h1>"
		});

		//get managers project to comboBox "project_manager"
		var combobox_data = isc.DataSource.create({
			ID : "combobox_data",
			dataFormat : "json",
			dataURL : "./views/project/data/list_project_manager.js"
		});

		//get project data
		var combobox_data = isc.DataSource.create({
			ID : "project_info",
			dataFormat : "json",
			dataURL : "./views/project/data/project_info.js",
			fields: [
				{name : "name"},
				{name : "project_manager"},
				{name : "start"},
				{name : "end"},
				{name : "state"},
				{name : "resources"},
			]
		});

		isc.Label.create({
			content: "la"
		});

		//Form use to create a project
		this.form = isc.DynamicForm.create({
			ID: "create_project_form",
			width:"400",
			// dataSource : "project_info",
			// autoFetchData : true,
			fields:
			[{
				name : "name",
				title : " Nom du projet",
				type: "text",
				width: "*",
				required: true
			}, {
				name : "project_manager",
				title : "Chef de projet",
				type : "comboBox",
				optionDataSource : "combobox_data",
			}, {
				name : "start",
				title : " Date de d&eacute;but",
				type: "date",
				useTextField:true,
				required: true
			}, {
				name : "end",
				title : "Date de fin prévisionnelle",
				type: "date",
				useTextField:true,
				required: false
			}]
		});

		var cancel = isc.Button.create({
			ID: "ProjectBtnCancel",
			top: 130,
			title: "Annuler",
			click: {

			}
		});

		var submit = isc.Button.create({
			ID: "ProjectBtnSubmit",
			top: 130,
			left: 120,
			title: "Enregistrer",
			click: function(){
				if (create_project_form.validate())
					isc.say("valid");
				else
					isc.say("invalid");
			}
		});

		// Home page title.
		this.container = isc.VLayout.create({
			members: [ 
				title,
				this.form,
				ProjectBtnCancel,
				ProjectBtnSubmit
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
new essilab.project.view.project.Create();
