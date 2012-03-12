// form used to create a developper

essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.Create = Class.create(essilab.bpm.View, {
	options: {
		name: "user/create",
		title : "Créer un utilisateur",
		parent : "user/home"
	},
	
	buildView : function() {
		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Création d'un utilisateur</h1>"
		});

		this.form = isc.DynamicForm.create({
			top:0,
			width:400,
			ID: "create_developper_form",
			fields: [{
				name : "lastName", 
				title : "Nom", 
				type : "text",
				required : true,
				width : "*"
			}, {
				name : "firstName", 
				title : "Prénom", 
				type : "text",
				required : true,
				width : "*"
			}, {
				name : "email",
				title : "E-Mail",
				type : "text",
				required : true,
				width :"*",
				validators : 
					[{
						type:"regexp",
						expression: "^([a-zA-Z0-9._+-])+@(([a-zA-Z0-9-])+\.)+[a-zA-Z0-9]{2,4}$"
					}]
			}, {
				name : "password",
				title : "Mot de passe",
				type : "password",
				required : true,
				width :"*"
			}, {
				name : "confirm_password",
				title : "Confirmation du mot de passe",
				type : "password",
				width :"*",
				validators: [{
					//we check that password it the same
					type: "matchesField",
					otherField: "password",
					errorMessage: "Passwords do not match"
				}]
			}]
		});

		var cancel = isc.Button.create({
			top : 150,
			name:"btnCancel",
			title: "Annuler",
			click: function() {

			}
		});

		var submit = isc.Button.create({
			top : 150,
			left: 110,
			name:"btnSubmit",
			title: "Valider",
			click: function() {
				if (create_developper_form.validate())
				//say(Time.toTime(myForm.getItem("time").getValue()));
				isc.say("valide!");
				else
				isc.say("non valide!");
			}
		});

		// Home page title.
		this.container = isc.VLayout.create({
			members: [ 
				title,
				this.form,
				cancel,
				submit
			],
			resizable: true,
			styleName: "loginForm",
			width: "20%",
		});
		// Get authorized widget.
	},

	reset: function(){

	}

});
//Register view.
new essilab.project.view.user.Create();