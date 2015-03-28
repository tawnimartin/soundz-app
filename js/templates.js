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
    return "    	<hr class=\"logo-hr\"><div class=\"logo-cov\">\n\n      <div class=\"logo\">SOUNDZ</div>\n      </div>\n      <div class=\"search-container\">\n        \n      \n      </div>\n    </div>\n ";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["header_buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"view-btns\">\n        <div class=\"glyph\"><span class=\"glyph-item mega eye\" aria-hidden=\"true\" data-icon=\"&#xe087;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n        <div class=\"glyph\"><span class=\"glyph-item mega txt\" aria-hidden=\"true\" data-icon=\"&#xe067;\" data-js-prompt=\"&amp;#xe005;\"></span></div>\n      </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"avatar\">\n          <img class=\"avatar\" src=\"img/avatar.png\">\n          <div class=\"avatar-name\">Joey\n            <a class=\"log\" src=\"#\">Logout</a>\n          </div>\n        </div>\n          <li><a href=\"/search\" class=\"main-nav\" id=\"search-a\" data-name=\"search\">Search Songs</a></li>\n          <li><a href=\"/playlist\" class=\"main-nav\" data-name=\"playlist\">Playlist</a></li>\n          <li><a href=\"/register\" class=\"main-nav\" data-name=\"register\" data-remodal-target=\"register\">Register</a></li>";
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
    return "\n   <div class=\"reg-wrapper\">\n<div class=\"reg-logo\">SOUNDZ</div>\n</div>\n<div class=\"reg-wrapper\">\n<img src=\"http://www.ideate-interactive.com/IY/images/reg-pic2.jpg\">\n<div class=\"reg-bg-right\">\n<div class=\"reg-title\">\n<hr>\nlogin or register\nto explore Soundz\n<hr>\n</div>\n<div class=\"twitter-btn\"><div class=\"left\"><img src=\"http://www.ideate-interactive.com/IY/images/twitter-icon.png\"></div><div class=\"t-text\">Sign up <span>via</span>Twitter</div></div>\n<div class=\"reg-smtext\">We'll never post without your permission.</div>\n\n</div>\n</div>\n    \n";
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