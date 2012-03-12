essilab.project.login.Logout = Class.create(essilab.bpm.Action, {
	process : function(data) {
		// Remove menu and login widget.
		window.project.layout.header.setMembers([]);
		window.project.user = null;
		this.forward("user/login");
	}
});