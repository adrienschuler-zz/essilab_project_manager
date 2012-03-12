//form used to update the developper data


var donnees = isc.DataSource.create({
	ID : "donnee",
	dataFormat : "json",
	dataURL : "data/user_info.js",
	fields:
		[{ name: "prenom"},
		 { name: "nom"},
		 { name: "Email"}
		 ]
});


isc.DynamicForm.create( {
	top : 0,
	width : 400,
	ID : "update_developper_form",
	dataSource : "donnee",
	autoFetchData : true,
	fields : [ {
		name : "nom",
		title : "Nom",
		type : "text",
		required : true,
		width : "*"
	}, {
		name : "prenom",
		title : "Pr&eacute;nom",
		type : "text",
		required : true,
		width : "*"
	}, {
		name : "Email",
		title : "E-Mail",
		type : "text",
		required : true,
		width : "*",
		validators : 
			[{
				type:"regexp",
				expression: "^([a-zA-Z0-9._+-])+@(([a-zA-Z0-9-])+\.)+[a-zA-Z0-9]{2,4}$"
			}
			 ]
	}

	]

});

Button.create( {
	top:100,
	name : "btnCancel",
	title : "Annuler",
	click : function() {

	}
});

Button.create( {
	top:100,

	left: 110,
	name : "btnSave",
	title : "Enregistrer",
	click : function() {
		if (update_developper_form.validate())
			//say(Time.toTime(myForm.getItem("time").getValue()));
			say("valide!");
		else
			say("non valide!");
	}
});


