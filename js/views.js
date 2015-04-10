var HeaderView = Backbone.View.extend({

  template: JST["header"],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

var SearchKeywordView = Backbone.View.extend({
  template: JST["search_keyword"],
  events: { 
    "submit" : "update"
  },

    render: function(query) {
    this.$el.html(this.template());
    return this;
  },

    update: function(e) {
    e.preventDefault();
    var data = this.$("form :input").val();
    //console.log(data);
    this.searchkeyword = data;

    this.trigger("search:data", {
      data: data
      });
    }
});

//--

var SearchGenreView = Backbone.View.extend({
  template: JST["search_genre"],
  events: {
    "submit" : "update"
  },

    render: function(query) {
    this.$el.html(this.template());
    return this;
  },

  update: function(e) {
    e.preventDefault();
    var data = this.$("form :input").val();
    this.searchgenre = data;

    this.trigger("search:data", {
      data: data
      });
    }
});

//--

var HeaderButtonsView = Backbone.View.extend({
    events : {
      
      "click .eye": "eyeClick",
      "click .txt": "txtClick"
  },

  template: JST["header_buttons"],

    render: function(query) {
    this.$el.html(this.template());
    return this;
  },

  eyeClick: function() {
    $el = $(".box").children('img')
    $el.show("slow");
  },
  txtClick: function() {
    $el = $(".box").children('img')
    $el.hide("slow");
  }
});

var NavView = Backbone.View.extend({
  tagName     : "ul", 
  className   : "menu-nav",
  events      : {
    "click a" : "onClick"
  },
  template: JST["nav"],
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
    onClick: function(e) {
    e.preventDefault();
    var name = this.$(e.currentTarget).data("name");
    var href = this.$(e.currentTarget).attr("href");

    this.trigger("link:click", {
      name: name, 
      href: href
      });
    }

});


//--TRACK VIEW ---//
var TrackView = Backbone.View.extend({
  template:   JST["box"],
  events : {
      
      "click .play" : "buttonClick",
      "click .fav"  : "addtoPlaylist"
  },

  initialize: function() {
    
    this.listenTo(this.model, "stream:playing",  this.playing);
    this.listenTo(this.model, "stream:paused",  this.paused);
    this.listenTo(this.model, "stream:finished",  this.paused);

  },

  render: function() {

    var data = this.model.toJSON();
    data.duration = this.formatDuration(data.duration);
    data.title = this.shortenTitle(data.title);
    this.$el.html (
      this.template( data )
    );
    return this;
  },

  formatDuration: function(duration) {
    //convert the milliseconds to minutes
    duration = duration / 1000 / 60; // seconds // minutes
    //get mins and sec
    var minutes = Math.floor(duration);
    var seconds = Math.round((duration - minutes) * 60);
    //add a 0 if seconds is less than 10
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    //combine the values
    duration = minutes.toString() + ":" + seconds.toString();
    return duration;
  },

  shortenTitle: function(title) {
    
    if (title.length > 29) {
      return title.substring(0,29)+'...';
      } else {
      return title
    };
    return title;
    console.log(title);
  },

  paused: function() {

    var parent = this.$(".play").children();
    parent.children( ".play-show" ).css( "display", "block" );
    parent.children( ".pause-show" ).css( "display", "none" );
  },

  playing: function() {

    var parent = this.$(".play").children();
    parent.children( ".play-show" ).css( "display", "none" );
    parent.children( ".pause-show" ).css( "display", "block" );
  },

  addtoPlaylist: function() {

    fireCollection  = new FireCollection();
    fireCollection.push(this.model);
  },

  buttonClick: function(e) {
    e.preventDefault();

    $btn = $(e.currentTarget);

    if( $btn.children().children( ".play-show" ).css( "display") == "block" ) {
      $btn.css("background-color", "#855d54");
      this.model.play();
    }
    else if ( $btn.children().children( ".pause-show" ).css( "display") == "block" ) {
      $btn.css("background-color", "#b39c85");
      this.model.pause();
    }

  }

});


//--TRACK COLLECTION VIEW--//
var TrackCollectionView = Backbone.View.extend ({

  template: JST["track_collection"],

  render: function() {
    this.$el.html( this.template() );
    //rows
    var $tbody = this.$("div");
    this.collection.each(function(model){

      var view = new TrackView({model: model});
      $tbody.append(view.render().el);
    });
    return this;
  }
});

//--

var FireView = Backbone.View.extend({
  template:   JST["playlist"],

  render: function() {
    var data = this.model.toJSON();
    this.$el.html (
      this.template( data )
    );
    return this;
  }

});

//-- 

var FireCollectionView = Backbone.View.extend({

  template: JST["playlist_collection"],

  render: function() {
    this.$el.html( this.template() );
    var $tbody = this.$("div");

    this.collection.each(function(model){
      var view = new TrackView({model: model});
      $tbody.append(view.render().el);
    });
    return this;
  }


});

//--PLAYLIST TRACK VIEW ---//
var PlaylistTrackView = Backbone.View.extend({
  template:   JST["play_list"],
  events : {
      
      "click .pl-song" : "buttonClick"
  },

  initialize: function() {

    this.listenTo(this.model, "stream:playing",  this.playing);

  },

  render: function() {

    var data = this.model.toJSON();
    data.duration = this.formatDuration(data.duration);
    this.$el.html (
      this.template( data )
    );

    if (tiy.streamID === this.model.id) {
      this.playing();
    }

    return this;
  },

  formatDuration: function(duration) {
    //convert the milliseconds to minutes
    duration = duration / 1000 / 60; // seconds // minutes
    //get mins and sec
    var minutes = Math.floor(duration);
    var seconds = Math.round((duration - minutes) * 60);
    //add a 0 if seconds is less than 10
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    //combine the values
    duration = minutes.toString() + ":" + seconds.toString();
    return duration;
  },

  paused: function() {

    var parent = this.$(".play").children();
    parent.children( ".play-show" ).css( "display", "block" );
    parent.children( ".pause-show" ).css( "display", "none" );
  },

  playing: function() {
    var obj = this.model.toJSON();
    var pTitle = obj.title;
    var pGenre = obj.genre;
    var pID = obj.id;
    var playlistArtwork = obj.artwork_url;

    $(".song-title").html(pTitle);
    $(".pl-genre").html(pGenre);
    $(".pl-song-playing").addClass("pl-song").removeClass("pl-song-playing");
    $("[data-id='" + pID + "']").addClass("pl-song-playing").removeClass("pl-song");
    $(".artwork").attr("src", playlistArtwork);

  },

  removeFromPlaylist: function() {


  },

  buttonClick: function(e) {
    e.preventDefault();
    $btn = $(e.currentTarget);
    this.model.play();

  }

});

//--PLAYLIST TRACK COLLECTION VIEW--//
var PlaylistCollectionView = Backbone.View.extend ({
    events : {
      
      "click .playpause" : "playAndPause",
      "click .forward"   : "skipForward",
      "click .backward"  : "skipBackward"
  },

  template: JST["play_list_collection"],

  initialize: function() {
    this.listenTo(this.collection, "sync reset", this.render);
  },

  render: function() {
    this.$el.html( this.template() );
    //rows

    var $tbody = this.$(".scrollbars");
    console.log(this.collection);
    this.collection.each(function(model){
      var view = new PlaylistTrackView({model: model});
      $tbody.append(view.el);
      view.render();
    });

    $(".scrollbars").ClassyScroll();
    this.eq  = new EQView();
    $(".soundbars").html(this.eq.el);
    this.eq.render();

    return this;
  },

  skipForward: function(e) {
    e.preventDefault();
    $(document).trigger("skip:forward");
  },

  skipBackward: function(e) {
    e.preventDefault();
    $(document).trigger("skip:backward");
  },

  playAndPause: function(e) {
    e.preventDefault();
    $(document).trigger("play:song");
  }
});

//--
var RegisterView = Backbone.View.extend({

  template: JST["register"],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});



