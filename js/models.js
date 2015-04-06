var Track = Backbone.Model.extend({

	play: function() {
		if(tiy.stream && tiy.streamID === this.id) {
			tiy.stream.play();
			this.trigger("stream:playing");
		} else {
			tiy.loadStream(this.id).done(function(stream){
				stream.play();
				this.trigger("stream:playing");
				this.listenToOnce(tiy, "stream:destroyed", function(){
					this.trigger("stream:finished");
				});
			}.bind(this));
		}
	},

	pause: function() {
		tiy.stream.pause();
		this.trigger("stream:paused");
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
    if(tiy.authData === null) {
        url: "https://tiy-intro-tawni.firebaseio.com/collections/fire"
    } else {
      var uid = encodeURIComponent(tiy.authData.uid);
      return tiy.firebaseURL + "/collections/fire/" + uid;
    }
  }

});


