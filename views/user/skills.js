essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.Skills = Class.create(essilab.bpm.View, {
	options: {
		name: "user/skills",
		title : "Liste des compétences",
		parent : "user/home"
	},
	buildView : function() {
		
		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Compétences de : " + window.project.user.login + "</h1>"
		});

		var listSkillsData = isc.DataSource.create({
			ID: "skillsData",
			dataFormat: "json",
			// dataURL: "./views/user/data/mappage.php?module=skillsGrid",
			fields: [
				{name: "skillName"},
				{name: "skillLevel"}
			]
		});

		var listSkills = isc.ListGrid.create({
			fields: [
				{name: "skillName", title: "Nom", width: "400px"},
				{name: "skillLevel", title: "Niveau", displayField: false, width: "100px"}
			],
			width: "518px",
			height:"300px",
			normalCellHeight: "20px",
			autoFetchData: true,
			dataSource: "skillsData",
			showRecordComponents: true,
			showRecordComponentsByCell: true,
			createRecordComponent: function(record, colNum){
				var fieldName = this.getFieldName(colNum);
				if(fieldName == "skillLevel"){
					var layoutLevel = isc.HLayout.create({
						height: 22,
						align: "center"
					});

					for(i = 0; i< 3; i++){
						
						var imgType = "on";
						if((i+1) > record.skillLevel){
							imgType = "off";
						}
						
						button = isc.ImgButton.create({
							levelValue: (i+1),
							height: 18,
							width: 18,
							src: "/essilab/assets/img/icons/favorites_"+imgType+".png",
							click : function () {
								record.skillLevel = this.levelValue;
								listSkills.refreshFields();
								var imgType = "on";
								for(y=0; y < 3 ; y++){
									if(y+1 > record.skillLevel){
										imgType = "off";
									}
									layoutLevel.getMember(y).setSrc("/essilab/assets/img/icons/favorites_"+imgType+".png");
								}
							},
						});
						layoutLevel.addMember(button);
					}
					
					return layoutLevel;
				}
			}
		});

		var submitButton = isc.Button.create({
			title: "Valider",
			click: function(){
				submitEditionSkills(listSkills.data);
			}
		});

		var cancelButton  = isc.Button.create({
			title: "Annuler",
			click: function(){
				cancelEditionSkills();
			}
		});

		var layoutListGridSkills = isc.HLayout.create({
			width: "518px",
			height: "200¡px",
			members: [
			isc.VLayout.create({
				width: "100%",
				members: [
					listSkills,
					isc.HLayout.create({
						width: "100%",
						align: "center",
						padding:"10px",
						members:[
							submitButton, cancelButton
						]
					})
				]
			})]
		});

		// Home page title.
		this.container = isc.VLayout.create({
			members: [ 
				title,
				layoutListGridSkills
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
new essilab.project.view.user.Skills();
