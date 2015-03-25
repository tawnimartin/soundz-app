var Router = Backbone.Router.extend ({

	routes: {
		""									: "search",
		"genre/:genre"  		: "loadGenre",
		"search/:kw" 				: "search",
		"playlist"	 				: "playList"
	},

	initialize: function() {

		//views
		this.headerView     					= new HeaderView();
		this.searchKeywordView 				= new SearchKeywordView();
		this.searchGenreView 					= new SearchGenreView();
		this.headerButtonsView 				= new HeaderButtonsView();
		this.navView 									= new NavView();
			//tracks and fire
		this.tracks 									= new TrackCollection();
		this.tracksView 							= new TrackCollectionView({
			collection: this.tracks
		});

		//initial structure

		$(".header").html( this.headerView.render().el );
		$("#menu").html( this.navView.render().el );
		$(".search-container").html(this.searchKeywordView.render().el);
		$(".search-container").append(this.searchGenreView.render().el);
		$(".search-container").append(this.headerButtonsView.render().el);
		$(".main-container").html(this.tracksView.render().el);

		//listeners
		this.listenTo(this.tracks, "reset", function() {
		this.tracksView.render();
		});
		//listens for keyword search 
		this.listenTo(this.searchKeywordView, "search:data", function(options) {
			this.search(options.data);
		});
		//listens for genre search 
		this.listenTo(this.searchGenreView, "search:data", function(options) {
			this.loadGenre(options.data);
		});

		this.listenTo(this.navView, "link:click", function(options){
				switch(options.name) {
        case "search":
        	this.search();
        break;
        case "playlist":
          this.playList();
        break;
        default:
          this.search();
          return;
        break;
      }
      
    });

	},

	playList: function() {
		$(".main-container").empty();
		//$(".main-container").html(this.fireView.render().el);
	},

	loadGenre: function(genre) {
		if (genre === null) {
			this.tracks.loadGenre("electronic");
		} else {
		this.tracks.loadGenre(genre);
		this.navigate("genre/" + genre);
		}
	},

	searchPage: function(query) {
		$(".main-container").empty();
		$(".main-container").html(this.tracksView.render().el);
		this.search(router.searchKeywordView.searchkeyword);
	},

	search: function(query) {
		var searchQuery = router.searchKeywordView.searchkeyword;
		var searchQueryBool = !!searchQuery;
		var thisQueryBool = !!query;
		if(searchQueryBool) {
			this.tracks.search(searchQuery);
			this.navigate("search/" + searchQuery);
		} else if (thisQueryBool) {
			this.tracks.search(query);
			this.navigate("search/" + query);
		} else {
			this.tracks.search("electro");
			this.navigate("search");
		}
		
	}
});