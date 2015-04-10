var Track = Backbone.Model.extend({

	play: function() {
		console.log("playing song", this.id);
		if(tiy.stream && tiy.streamID === this.id) {
			tiy.playStream();
			this.trigger("stream:playing");
    
		} else {
			tiy.loadStream(this.id).done(function(stream){
				tiy.playStream();
				this.trigger("stream:playing");
				this.listenToOnce(tiy, "stream:destroyed", function(){
					this.trigger("stream:destroyed");
				});
				this.listenToOnce(tiy, "stream:finished", function(){
					this.trigger("stream:finished");
				});
			}.bind(this));
		}
	},

	pause: function() {
		tiy.stream.pause();
		this.trigger("stream:paused");
		$(document).trigger("sound:off");
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
    // if(tiy.authData === null) {
    //     url: "https://tiy-intro-tawni.firebaseio.com/collections/fire"
    // } else {
      var uid = encodeURIComponent(tiy.authData.uid);
      return tiy.firebaseURL + "/collections/fire/" + uid;
    // }
  },

  initialize: function() {
		console.log("initializing tracks");
		this.on("add", function(track){
			console.log("adding listeners");
			this.listenTo(track, "stream:playing", function() {
				this.currentlyPlayingIndex = this.indexOf(track);
			});
			this.listenTo(track, "stream:finished", function() {
				this.skipForward();
			});
		});

		$(document).on("skip:forward", function(){
			this.skipForward();
		}.bind(this));

		$(document).on("skip:backward", function(){
			this.skipBackward();
		}.bind(this));

		$(document).on("play:song", function(){
			this.pauseSong();
		}.bind(this));
	},

	skipForward: function() {
		var nextIndex = this.currentlyPlayingIndex+1;
		if (this.at(nextIndex)) {
			this.at(nextIndex).play();
		}
  },

  skipBackward: function() {

  	if (tiy.stream.position/1000 > 1) {
  		tiy.stream.setPosition(0);
  	}
  	else {
	  	var prevIndex = this.currentlyPlayingIndex-1;
  		if (this.at(prevIndex)) {
				this.at(prevIndex).play();
			}
  	}
  },

  pauseSong: function() {
  	var thisIndex = this.currentlyPlayingIndex;
  	this.at(thisIndex).pause();
  }

});


