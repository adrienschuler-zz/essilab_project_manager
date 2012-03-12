{
	result : true,
	login : "michael",
	privileges : {
		menu : 
		[
			{
		    label : "Home",
		    items : [
			    {title: "Accueil", keyTitle: "Ctrl+M", icon: "", action : "user/home"}
			  ]
		  },
		  {
		    label : "Utilisateurs",
		    items : [
			    {title: "Liste", keyTitle: "Ctrl+L", icon: "", action : "user/list"},
			    {title: "Profil", keyTitle: "Ctrl+P", icon: "", action : "user/profile"},
			    {title: "Création", keyTitle: "Ctrl+N", icon: "", action : "user/create"},
			    // {title: "Modification", keyTitle: "Ctrl+M", icon: "", action : "user/update"},
			    {title: "Compétences", keyTitle: "Ctrl+C", icon: "", action : "user/skills"},
			  ]
		  },
		  {
		    label : "Projet",
		    items : [
			    {title: "Liste", keyTitle: "Ctrl+L", icon: "", action : "project/list"},
			    {title: "Création", keyTitle: "Ctrl+N", icon: "", action : "project/create"},
			    // {title: "Modification", keyTitle: "Ctrl+M", icon: "", action : "project/update"},
			  ]
		  },
		  {
		    label : "Tâches",
		    items : [
		    	{title: "Liste", keyTitle: "Ctrl+N", icon: "", action : "project/list"},
			  ]
		  }
		]
	}
}
