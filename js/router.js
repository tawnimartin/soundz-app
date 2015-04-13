var Router = Backbone.Router.extend ({

  routes: {
    ""                  : "home",
    "search"            : "search",
    "genre/:genre"      : "loadGenre",
    "search/:kw"        : "search",
    "register"          : "register",
    "playlist"          : "playList",
    "*default"          : "playList"
  },

  initialize: function() {

    //views
    this.headerView               = new HeaderView();
    this.searchKeywordView        = new SearchKeywordView();
    this.searchGenreView          = new SearchGenreView();
    this.headerButtonsView        = new HeaderButtonsView();
    this.navView                  = new NavView();
    this.registerView             = new RegisterView();

      //tracks and fire
    this.tracks                   = new TrackCollection();
    this.tracksView               = new TrackCollectionView({
      collection: this.tracks
    });
    this.fire                     = new FireCollection();
    this.playlistCollection  = new PlaylistCollectionView({
      collection: this.fire
    });
    this.homeView               = new HomeView();


    //initial structure
    $('.menu-link').bigSlide();
    $(".header").empty();
    $(".header").html( this.headerView.render().el );
    $("#menu").html( this.navView.render().el );
    $(".search-container").html(this.searchKeywordView.render().el);
    $(".search-container").append(this.searchGenreView.render().el);
    $(".search-container").append(this.headerButtonsView.render().el);
    $(".main-container").html(this.tracksView.render().el);
    $(".scrollbars").ClassyScroll();
    $(".remodal").html(this.registerView.render().el);


    //React view in nav
    this.header = React.render(
      React.createElement(
        tiy.views.Header,
        {model: tiy.currentUser}
      ),
      $(".avatar").get(0)
    );

    //listeners
    this.listenTo(this.tracks, "reset", function() {
    this.tracksView.render();
    });
    //listens for keyword search on form
    this.listenTo(this.searchKeywordView, "search:data", function(options) {
      this.search(options.data);
      this.navigate("search/" + options.data);
    });
    //listens for genre search on form
    this.listenTo(this.searchGenreView, "search:data", function(options) {
      this.loadGenre(options.data);
      this.navigate("genre/" + options.data);
    });

    this.listenTo(this.navView, "link:click", function(options){
        switch(options.name) {
        case "search":
          this.search();
        break;
        case "playlist":
          this.playList();
        break;
        case "modal":
          this.register();
        break;
        default:
          this.search();
          return;
        break;
      }
      this.navigate(options.href), {trigger: true};
    });

  },

  playList: function() {
    $( ".content" ).show();
    $( ".home" ).hide();
    $(".header").html(this.playlistCollection.el);
    this.playlistCollection.render()
    $(".header").addClass( "header-playlist" );
    $(".main-container").empty();
    $("html").css({
      "background"      : "url(http://www.ideate-interactive.com/IY/images/soundz-bg2.jpg) no-repeat center center fixed",
      "background-size" : "100%",
      "background-size" : "cover",
      "min-height"      : "100%"
    });
    this.tracksView.delegateEvents();
    this.playlistCollection.delegateEvents();
    this.listenTo(this.tracks, "stream:playing", function(options) {
    });
  },

  loadGenre: function(genre) {
    if (genre === null) {
      this.tracks.loadGenre("electronic");
    } else {
    this.tracks.loadGenre(genre);
    }
  },

  register: function() {
    //
    this.regheader = React.render(
    React.createElement(
      tiy.views.RegHeader,
        {model: tiy.currentUser}
      ),
      $(".reg-bg-right").get(0)
    );
    //console.log("current user is", tiy.authData.uid);
  },

  search: function(query) {
    $( ".home" ).hide();
    $( ".content" ).show();
    $("html").css({
      "background"      : "url(http://www.ideate-interactive.com/IY/images/soundz-search-bg.jpg) no-repeat center center fixed",
      "background-size" : "100%",
      "background-size" : "cover",
      "min-height"      : "100%"
    });
    $(".header").html( this.headerView.render().el );
    $(".search-container").html(this.searchKeywordView.render().el);
    $(".search-container").append(this.searchGenreView.render().el);
    $(".search-container").append(this.headerButtonsView.render().el);
    $(".main-container").html(this.tracksView.render().el);

    this.headerView.delegateEvents();
    this.searchKeywordView.delegateEvents();
    this.searchGenreView.delegateEvents();
    this.headerButtonsView.delegateEvents();
    this.tracksView.delegateEvents();
    this.tracksView.delegateEvents();

    var QueryBool = !!query;
    if(QueryBool) {
      this.tracks.search(query);
    } else {
      this.tracks.search("electro");
    }
    
  },
  home: function() {
    //
  $(".home").html( this.homeView.render().el );
  $( ".content" ).hide();
  $('#intro').parallax("50%", 0.1);
  $('#second').parallax("50%", 0.1);
  $('.bg').parallax("50%", 0.4);
  $('#third').parallax("50%", 0.3);
  $(".home-playlist-btn").click(function(){
    router.playList();
    router.navigate("playlist"), {trigger: true};
  });
    $(".home-signup-btn").click(function(){
    router.register();
    router.navigate("register"), {trigger: true};
  });
    $(".home-search-btn").click(function(){
    router.search();
    router.navigate("search"), {trigger: true};
  });
  
  }
});