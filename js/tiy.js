window.tiy = {
  // Namespace for views
  views: {},

  // Namespace for models
  models: {},

  // Raw auth data
  authData: null,

  // User Model
  currentUser: null,

  // Firebase *Base* URL
  firebaseURL: "https://tiy-intro-tawni.firebaseio.com",

  // Firebase reference
  fireRef: null,

  // The SoundManager SoundObject
  stream: null,

  // the song of the current stream
  streamID: null,

  // Load a new SoundObject
  loadStream:  function(id) {
    this.destroyStream();

    var promise = $.Deferred();

    SC.stream("/tracks/" + id, function(sound){
      this.streamID = id;
      this.stream = sound;
      this.trigger("stream:loaded");

      promise.resolve(sound);
    }.bind(this));

    return promise;
  },

  playStream: function() {
    this.streamPlaying = true;
    this.stream.play({
      whileplaying: function() {
        tiy.trigger("stream:position");
      },
      onfinish: function() {
        tiy.trigger("stream:finished");
      }
    });
    $(document).trigger("sound:on");
  },

  // Stop and destroy the current stream if there is one.
  destroyStream: function() {
    if(this.stream) {
      this.stream.stop();
      this.stream.destruct();
      this.streamPlaying = false;
      this.trigger("stream:destroyed");
    }
  },

  // Initialize
  init: function() {
    _.extend(this, Backbone.Events);

    this.currentUser = new Backbone.Model();

    this.fireRef = new Firebase(this.firebaseURL);
    this.fireRef.onAuth(this.onAuthCallback);
  },

  // Login in with Twitter
  twitterLogin: function() {
    this.fireRef.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  },

  isLoggedIn: function() {
    return !!this.currentUser.id;
  },

  // Log out
  logout: function() {
    this.fireRef.unauth();
  },

  // Called when a user logs in or out
  onAuthCallback: function(authData) {
    if (authData) {
      tiy.authData = authData;
      tiy.currentUser.set(authData.twitter.cachedUserProfile);
      console.log("A user is logged in:", authData.uid);
      tiy.trigger("sign:in");
    } else {
      tiy.authData = null;
      tiy.currentUser.clear();
      console.log("No one is logged in.");
      tiy.trigger("sign:out");
    }
    tiy.trigger("sign:in:out");
  }
}
