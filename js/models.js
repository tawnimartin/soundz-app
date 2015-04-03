var Track = Backbone.Model.extend({

	play: function() {
		console.log("data", this.id, this.toJSON());
		if (tiy.currentTrack.id !== this.id) {
			tiy.currentTrack.stop();
			tiy.currentTrack.clear();
			tiy.currentTrack.set( this.toJSON() );
		}

		tiy.currentTrack.play();
	},

	pause: function() {
		tiy.currentTrack.pause();
	}

});

var PlayableTrack = Backbone.Model.extend({

	initialize: function() {
		this.on("stream:loaded", this.play);
	},

	play: function() {
		if(!this.stream) {
			this.loadStream();
		} else {
			this.stream.play();
			this.trigger("stream:playing");
		}
	},

	stop: function() {
		if (this.stream) {
			console.log("destroying song", this.get("title"));
			this.stream.stop();
			this.stream.destruct();
			this.stream = null;
			this.trigger("stream:stopped");
		}
	},

	pause: function() {
		this.stream.pause();
		this.trigger("stream:paused");
	},

	loadStream:  function() {
		this.trigger("stream:loading");
		SC.stream("/tracks/" + this.id, function(sound){
			this.stream = sound;
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


