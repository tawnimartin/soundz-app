this["JST"] = this["JST"] || {};
this["JST"]["box"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<img src=\""
    + this.escapeExpression(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\">";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"box\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.artwork_url : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      <div class=\"genre\">"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"buttons\">\n        <div class=\"play\">\n          <div class=\"glyph\"><span class=\"glyph-item mega play-show\" aria-hidden=\"true\" data-icon=\"&#xe071;\" data-js-prompt=\"&amp;#xe005;\"></span><span class=\"glyph-item mega pause-show\" aria-hidden=\"true\" data-icon=\"&#xe072;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n        </div>\n        <div class=\"fav\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"glyph\"><span class=\"glyph-item mega plus\" aria-hidden=\"true\" data-icon=\"&#xe095;\" data-js-prompt=\"&amp;#xe005;\"></span><span class=\"glyph-item mega heart\" aria-hidden=\"true\" data-icon=\"&#xe08a;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n        </div>\n      </div>\n    </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    	\n      <div class=\"logo\">SOUNDZ</div>\n     \n      <div class=\"search-container\">\n        \n      \n      </div>\n    </div>\n ";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["header_buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"view-btns\">\n        <div class=\"glyph\"><span class=\"glyph-item mega eye\" aria-hidden=\"true\" data-icon=\"&#xe087;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n        <div class=\"glyph\"><span class=\"glyph-item mega txt\" aria-hidden=\"true\" data-icon=\"&#xe067;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n      </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul id=\"nav\">\n		<li><a href=\"\" title=\"Next Section\"><img src=\"img/dot.png\" alt=\"Link\" /></a></li>\n	    <li><a href=\"\" title=\"Next Section\"><img src=\"img/dot.png\" alt=\"Link\" /></a></li>\n	    <li><a href=\"\" title=\"Next Section\"><img src=\"img/dot.png\" alt=\"Link\" /></a></li>\n	    <li><a href=\"\" title=\"Next Section\"><img src=\"img/dot.png\" alt=\"Link\" /></a></li>\n	</ul>\n	\n	<div id=\"intro\">\n		<div class=\"story\">\n	    	<div class=\"float-left\">\n            <div class=\"home-logo\">SOUNDZ</div>\n	        <h2>Hi.</h2><p>I’m just a little app for playing songs from SoundCloud.  Etiam laoreet augue at finibus interdum. Maecenas ut ipsum tempor, faucibus lacus in, pulvinar diam. Curabitur a mi erat. Pellentesque vel ex justo. Morbi vitae pharetra augue. Nunc sed est libero. In rutrum libero eu nibh.</p><div class=\"button-wrapper\"><div class=\"home-playlist-btn\">My Playlist</div></div>\n	        </div>\n	    </div> <!--.story-->\n	</div> <!--#intro-->\n	\n	<div id=\"second\">\n	<div class=\"story\">\n	    	<div class=\"float-right\">\n	        	<h2>build your playlist</h2>\n	            <p>No need to sign up for SoundCloud.  Just register a SOUNDZ account, search for free songs, and add them to your playlist. Search by genre or keyword, and add songs to your playlist, and create multiple playlists.</p><div class=\"acct-txt\">Don't have an account?</div><div class=\"button-wrapper2\"><div class=\"home-signup-btn\">Sign Up</div></div>\n	        </div>\n	    </div> <!--.story-->\n	    \n	</div> <!--#second-->\n	\n	<div id=\"third\">\n		<div class=\"story\">\n	    	<div class=\"float-left\">\n	        	<h2>music</h2>\n	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec tempus ligula. Curabitur elementum sed lectus ac consectetur. Morbi felis dolor, elementum non consectetur et, fringilla quis nulla. Phasellus ipsum urna, auctor eu pharetra eget, egestas vitae urna</p>\n	        </div>\n	    </div> <!--.story-->\n	</div> <!--#third-->\n	\n	<div id=\"fifth\">\n		<div class=\"story\">\n        	<div class=\"footer-logo-wrapper\">\n		    <div class=\"footer-logo\">SOUNDZ</div>\n            </div>\n	      	<div class=\"footer-links\">\n            <a href=\"#\">Home</a><a href=\"#\">Register</a><a href=\"#\">Create a Playlist</a><a href=\"#\">Search</a><a href=\"#\">Login</a>\n	     	</div>\n	  \n	      \n	    </div> <!--.story-->\n	</div> <!--#fifth-->";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"avatar\">\n          \n          </div>\n        </div>\n          <li><a href=\"/search\" class=\"main-nav\" id=\"search-a\" data-name=\"search\">Search Songs</a></li>\n          <li><a href=\"/playlist\" class=\"main-nav\" data-name=\"playlist\">Playlist</a></li>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["play_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<img class=\"pl-img\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\">";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"pl-song\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.artwork_url : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"pl-song-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"pl-song-genre\">"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"glyph delete\"><span class=\"glyph-item mega\" aria-hidden=\"true\" data-icon=\"&#xe082;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n    </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["play_list_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header header-playlist\">\n		<div class=\"playlist-title\">Joey's Playlist</div>\n        <div class=\"soundbars\"></div>\n        <div class=\"pl-status\">now playing...</div>\n        <div class=\"song-title\"></div>\n        <div class=\"pl-subtitles\">\n            <div class=\"pl-genre-title\">Genre: </div><div class=\"pl-genre\">Electronic</div>\n            <div class=\"glyph twit\"><span class=\"glyph-item mega\" aria-hidden=\"true\" data-icon=\"&#xe009;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n            <div class=\"glyph share\"><span class=\"glyph-item mega\" aria-hidden=\"true\" data-icon=\"&#xe05b;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n        </div>\n        </div>\n        <div class=\"scrollbars\">\n    <!--songs-->\n    </div>\n    <div class=\"player-wrapper\">\n\n            <div class=\"circle\">\n                <img class=\"artwork\" src=\"https://i1.sndcdn.com/artworks-000080179148-hq0jue-large.jpg\">\n            </div>\n\n            <div class=\"track-progress\">\n\n            </div>\n\n        <div class=\"track-controllers\">\n           <a class=\"backward\" href=\"\"></a><a class=\"playpause\"></a><a class=\"forward\" href=\"\"></a>\n        </div>\n    </div>\n  	<div class=\"main-container\">\n\n    </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["playlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"playlist\">My Playlist\n	<div>Title : "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["playlist_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div></div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"reg-wrapper\">\n<div class=\"reg-logo\">SOUNDZ</div>\n</div>\n\n<div class=\"reg-wrapper\">\n	<img src=\"http://www.ideate-interactive.com/IY/images/reg-pic2.jpg\">\n	<div class=\"reg-bg-right\">\n		\n\n</div>\n\n\n\n\n</div>\n    \n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["search_genre"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form>\n          <label>\n           <i class=\"fa fa-search\"></i> <input id=\"search-genre\" type=\"text\" name=\"search-genre\" placeholder=\"search by genre\" />\n          </label>\n        </form>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["search_keyword"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"keyword-search\">\n        <form>\n          <label>\n          <i class=\"fa fa-search\"></i> <input id=\"search-keyword\" type=\"text\" name=\"search-keyword\" placeholder=\"search by keyword\" />\n          </label>\n        </form>\n      </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div></div>";
},"useData":true});