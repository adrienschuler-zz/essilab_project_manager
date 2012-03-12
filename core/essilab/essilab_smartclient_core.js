var essilab = window.isc || {};

essilab.sc = essilab.sc || {};
essilab.sc.actions = essilab.sc.actions || {};

essilab.project = essilab.project || {};
essilab.project.view = essilab.project.view || {};

essilab.bpm = {};

/* Action */
essilab.bpm.Action = Class.create({
	/** label, url */
	initialize: function () {},
	process : function(data) {},
	forward : function(action){
		window.project.execute(action);
	}
});

/* Decision */
essilab.bpm.Decision = Class.create({
	/** label, url */
	initialize: function (options) {
		this.transitions = {};
		this.evaluate = options["evaluate"];
		this.datas = options["datas"];
	},
	process : function(){
		this.transitions[this.evaluate].process(this.datas);
	},
	setTransition : function(result, transition){
		this.transitions[result] = transition;
	}
});

/* ViewListener */
essilab.bpm.ViewListener = Class.create({
	preDisplay : function(view){}
});

/* BreadCrumb */
essilab.bpm.ViewListener.BreadCrumb = Class.create(essilab.bpm.ViewListener, {
	initialize: function() {
		// Check if breadcrumb exist in the view. if not, create it.
	},
	preDisplay : function(view) {
		var parents = view.getBreadcrumb();
		var result = "";
		parents.each(function (parent) {
			result = '<a href="#'+parent.getName()+'">'+parent.getTitle()+'</a> » '+result;
		})
		window.project.layout.breadcrumb.setContents(result);
	}
});

essilab.bpm.ViewListener.BreadCrumb.instance = new essilab.bpm.ViewListener.BreadCrumb();

/* View */
essilab.bpm.View = Class.create({
	options : {
		name   : "not-defined",
		parent : null,
		title  : "untitled",
	},
	initialize: function() {
		window.project.registerView(this);
		this.container = null;
		this.preDisplayListeners = [];
		this.init();
		this.buildView();
	},
	init: function(){
		this.preDisplayListeners.push(essilab.bpm.ViewListener.BreadCrumb.instance);
	},
	buildView : function() {},
	getContainer: function(){
		return this.container;
	},
	getName: function(){
		return this.options["name"];
	},
	getTitle: function(){
		return this.options["title"];
	},
	preDisplay : function(){
		this.preDisplayListeners.each(function (e){
			e.preDisplay(this);
		}.bind(this));
	},
	reload : function(container) {
		this.preDisplay();
		container.setMembers([this.container]);
	},
	getBreadcrumb : function () {
		var action = this;
		var result = [this];
		while (null != action.options.parent) 
		   result.push(action = this.application.getView(action.options.parent));
		return result;
	}
});

/* Application */
essilab.project.Application =  Class.create({
	layout: {},
	views: {},
	history : [],
	options: {
		context: "/",
		start_url: "user/login",
		layout_url: "views/layout.js",
		first_load : true
	},
	historyNavigation : function(id, data) {
		if (this.options.first_load) {
			this.options.first_load = false;
		    return ;
		}
		this.execute(id, false);
	},        
	initialize: function(options) {
		this.options.context = options["context"]; 
		isc.History.registerCallback({target: this, method : this.historyNavigation.bind(this) }, false);
	},
	registerView: function(view) {
		this.views[view.getName()] = view;
		view.application = this;
	},

	start: function() {
		import_js(this.options["layout_url"]);
		this.layout = new essilab.project.view.Layout();
		this.execute(this.options["start_url"]);
	},
	execute: function(url, history) {
		if (Object.isUndefined(history))
			history = true;
		var action = this.getView(url);
		if (history) 
			isc.History.addHistoryEntry(action.getName());
		action.reload(this.layout.contextView);
	},
	loadJs : function(url){
		if (Object.isUndefined(this.views[url]))
			import_js(this.options["context"] + "views/" +url+".js");
	},
	getView : function(url) {
		// Check if view is already loaded, if not dynamicaly load it in ajax.
		this.loadJs(url);
		return this.views[url];
	}
});

