essilab.project.view.user = essilab.project.view.user || {};

essilab.project.view.user.Login = Class.create(essilab.bpm.View, {
	options: {
		name: "user/login",
		title : "Se connecter"
	},


	buildView : function() {
		var dataSource = isc.DataSource.create({
		  ID: "action",
		  dataFormat: "json",
		  dataURL: "views/user/authenticate.php",
		  dataProtocol : "postParams"
		});

	    		
		this.form = isc.DynamicForm.create({
	    dataSource: "action",
	    fields: [
        { type:"header", defaultValue:"Connection" },
        { type:"text", name:"login", title:"Login"},
        { type:"password", name:"password", title:"Mot de passe"},
    	]
		});
		
		var save = isc.IButton.create({
	    ID: "buttonLoginAuthenticate",
	    title: "Authenticate",
	    click: this.onSubmit.bind(this)
		});

    this.container = isc.VLayout.create({
      members: [ 
      	this.form, 
      	save
      ],
      resizable: true,
      styleName: "loginForm",
      width: "20%",
	  });
	},

	onSubmit: function(e){
		// May valid first.
		this.form.saveData(this.onResponse.bind(this));
	},

	onResponse: function(e) {
		var json = e.data[0];
		var decision = new essilab.bpm.Decision({evaluate : json.result, datas : json});
		import_js("views/user/login/login_bpm.js");
		decision.setTransition(true, new essilab.project.login.AuthenticateSuccess());
		decision.setTransition(false, new essilab.project.login.AuthenticateFailure());
		decision.process();
	},

  reset: function(){
  	
  },


});
// Register view.
new essilab.project.view.user.Login();
