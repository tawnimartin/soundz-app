var Router = Backbone.Router.extend ({

  routes: {
    ""                  : "search",
    "genre/:genre"      : "loadGenre",
    "search/:kw"        : "search",
    "playlist"          : "playList",
    "register"          : "register",
    "*default"          : 'search'
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
    //this.fire                     = new FireCollection();
    //this.fireView                 = new FireCollectionView({
      //collection: this.fire
    //});


    //initial structure
    $('.menu-link').bigSlide();
    $(".header").html( this.headerView.render().el );
    $("#menu").html( this.navView.render().el );
    $(".search-container").html(this.searchKeywordView.render().el);
    $(".search-container").append(this.searchGenreView.render().el);
    $(".search-container").append(this.headerButtonsView.render().el);
    $(".main-container").html(this.tracksView.render().el);
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

    this.listenTo(tiy, "sign:in", function(){
      router.fire                     = new FireCollection();
      router.fireView                 = new FireCollectionView({
      collection: router.fire
    });
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
      this.navigate(options.href);
    });

  },

  playList: function() {
    //$(".main-container").empty();
    $(".main-container").html(this.fireView.render().el);
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
    $(".main-container").empty();
    $(".main-container").html(this.tracksView.render().el);
    var QueryBool = !!query;
    if(QueryBool) {
      this.tracks.search(query);
    } else {
      this.tracks.search("electro");
    }
    
  }
});