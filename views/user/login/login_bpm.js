essilab.project.login = {};

essilab.project.login.AuthenticateSuccess = Class.create(essilab.bpm.Action, {
	parseMenuNode : function(item) {
		var result = {title : item.title, keyTitle : item.keyTitle, click : function(){window.project.execute(item.action)}.bind(this)};
		if (!Object.isUndefined(item.items)) {
			var items = [];
			item.items.each(function (item) {
				items.push(this.parseMenuNode(item));
			}.bind(this));
			result.submenu = items;
		}
		return result;
	},
	createMainMenu : function(data) {
		window.project.user = {};
		window.project.user.login = data.login;
		// Create menu by processing  privileges. 
		// Create Main Menu.
		this.menus = []; 
		data.privileges.menu.each(function(menu) {
			var menuLabel = menu.label;

			var data = [];
			menu.items.each(function(item) {
				data.push(this.parseMenuNode(item));
			}.bind(this));
			
			var menu = isc.Menu.create({
				autoDraw: false,
				showShadow: true,
				shadowDepth: 10,
				data: data
			});
			var button = isc.MenuButton.create({
				title: menuLabel,
				width: 100,
				menu: menu
			});
			this.menus.push(button);
		}.bind(this));
		var menubar = isc.HLayout.create({
			ID: "menubar",
			members: this.menus,
			align:"right",
			styleName: "contextView",
			width: "100%"
		});
		window.project.layout.header.setMembers([menubar]);
	},
	createLogout : function (data) {
		
		// Home
		// Log out.
		var logout = isc.IButton.create({
			ID: "LogoutBtn",
			title:"Déconnexion", 
			icon:"/essilab/assets/img/icons/remove.png",
			mouseUp: function () {
				isc.confirm("Souhaitez vous vraiment vous déconnecter", this.logoutConfirm.bind(this)); 
			}.bind(this)
		});
		var log = isc.HLayout.create({
			members: [logout],
			resizable: true,
			styleName: "contextView",
			width: "85%"
		});
		window.project.layout.header.addMembers([log]);
	},
	logoutConfirm : function(result) {
		if (result) {
			import_js("views/user/logout.js");
			new essilab.project.login.Logout().process({});
		}
	},
	process : function(data) {
		this.createMainMenu(data);
		this.createLogout(data);
		this.forward("user/home");
	}
});

essilab.project.login.AuthenticateFailure = Class.create(essilab.bpm.Action, {
	process : function(data) {
		alert(data.result);
	}
});
