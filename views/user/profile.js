essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.Profile = Class.create(essilab.bpm.View, {
	options: {
		name: "user/profile",
		title : "Profil",
		parent : "user/home"
	},

	/* account view composent*/
	buildView : function() {

		var title = isc.Label.create({
			height: 30,
			padding: 10,
			contents: "<h1>Profil de : " + window.project.user.login + "</h1>"
		});

		/*
		* content to incude
		*/
		var dataSource = isc.DataSource.create({
			ID:"userCardData",
			dataFormat:"json",
			dataURL:"./views/user/data/user_info.js", //#TODO bind
			fields:[
				{title:"Nom", name:"firstname"},
				{title:"Prénom", name:"lastname"},
				{title:"E-mail", name:"email"},
				{title:"Poste", name:"role"}        
			]
		});


		var userInfoGrid = isc.DetailViewer.create({
			autoDraw: false,
			ID:"printViewer",
			dataSource: dataSource,
			width:"40%",
			margin:25,
			emptyMessage:"Chargement…"
		});

		var userImg = isc.Img.create({
			margin:15,top:20, 
			width:100, height:100,
			imageType: "center",
			src: "/essilab/assets/img/icons/userDefault.png"
		});


		var dataSourceSkill = isc.DataSource.create({
			ID:"skills",
			dataFormat:"json",
			dataURL:"./views/user/data/user_skill.js", // #TODO bind
			fields:[
				{title:"Compétence", name:"title"},
				{
					name:"skillLvl", imageWidth:60, imageHeight:20, 
					title:"Niveau", width:"100", height:"17", type:"image", 
					imageURLPrefix:"/essilab/assets/img/icons/stars/star", imageURLSuffix:"-3.png", canEdit:false
				}
			]
		});


		var listSkill = isc.ListGrid.create({
			ID: "listSkill",
			dataSource: "skills",

			autoFetchData: true,
			rememberHistory: false
		});

		/*
		* Assembling content into local Vlayout
		*/
		this.container = isc.VLayout.create({
			members: [isc.HLayout.create({
				ID: "userCardTop",
				width: "100%",
				
				members: [
					title,
					userInfoGrid,
					userImg
				]
				}),
					listSkill
				],

				resizable: true
			});

		/*
		* Here the value to insert into the grid containing user data (it select the row from the datasource)
		* #TODO bind
	
		*/
		userInfoGrid.setData([{
			firstname:"Singh", 
			lastname: "Vikram",
			role: "Developpeur",
			email:"vikram@singh.er"
			}]);
		},


	});

//Register view.
new essilab.project.view.user.Profile();
/*end*/

//window.project.inject(listGrid);



