$(function() {
	tiy.init();
	window.router = new Router();
	Backbone.history.start();
});

var tempEmailToImage = function(email) {
	var hash = md5(email.trim().toLowerCase());
	return "http://www.gravatar.com/avatar/" + hash;
}