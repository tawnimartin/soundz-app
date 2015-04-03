var Track = Backbone.Model.extend({

	initialize: function() {
		this.on("stream:loaded", this.play);
	},

	checkStream: function() {
		if(window.trackPlayingID === undefined) {
			this.play();
		} else {
			// console.log("trackplayingid: ", trackPlayingID + " this.id: ", this.id);
		}
	},

	play: function() {
		if(!this.stream) {
			this.loadStream();
		} else {
			this.stream.play();
			window.trackPlayingID = this.id;
			this.trigger("stream:playing");
		}
	},

	pause: function() {
		this.stream.pause();
		this.trigger("stream:paused");
	},

	loadStream:  function() {
		console.log("trackplayingid: ", window.trackPlayingID + " this.id: ", this.id);
		this.trigger("stream:loading");
		SC.stream("/tracks/" + this.id, function(sound){
			this.stream = sound;
			console.log("loaded");
			this.trigger("stream:loaded");
		}.bind(this));
	}

});

//--

var TrackCollection = Backbone.Collection.extend({
	model: Track,

	loadGenre: function(genre) {

		SC.get('/tracks', { genres: genre }, function(bsname) {
		this.reset(bsname);
		}.bind(this));
	},

	search: function(query) {
		SC.get('/tracks', { q: query }, function(bsname) {
		this.reset(bsname);
		}.bind(this));
	}

});

//--

var Fire = Backbone.Model.extend({});

var FireCollection = Backbone.Firebase.Collection.extend({
	//url: "https://tiy-intro-tawni.firebaseio.com/collections/fire",
	model: Track,

	url: function() {
    if(!tiy.authData.uid) {
        console.log("A user must be logged in.");
    }
      var uid = encodeURIComponent(tiy.authData.uid);
      return tiy.firebaseURL + "/collections/fire/" + uid;
  }

});


