(function(views){

  var TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",

    render: function() {
        //get a better image
        var origImg = this.props.img;
        var newImg = origImg.substring( 0, origImg.indexOf( "_normal" ) ) + ".jpg";
        console.log("user", newImg);
        return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
          React.createElement("img", {className: "avatar", src: newImg, alt: ""}), 
          " ", 
          React.createElement("div", {className: "avatar-name"}, 
          React.createElement("div", {className: "avatar-name"}, this.props.name), 
          " ", 
          React.createElement("a", {className: "log"}, "Logout")
         )
        )
      );
    }
  })

  var TwitterNotLogged = React.createClass({displayName: "TwitterNotLogged",
    render: function() {
        return (
        React.createElement("div", {onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("span", null, "Sign In With"), 
          " ", 
          React.createElement("button", null, "Twitter")
        )
      );
    }
  })

  var TwitterLogin = React.createBackboneClass({
    getChild: function() {
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return React.createElement(TwitterLoggedIn, {name: name, img: img})
      }
      else {
        return React.createElement(TwitterNotLogged, null)
      }
    },

    render: function() {
      return (
        React.createElement("div", {className: "twitter-login"}, 
           this.getChild() 
        )
      );
    }

  });

  var Header = React.createBackboneClass({
    render: function() {
      return (
        React.createElement("div", null, 
         
          React.createElement(TwitterLogin, {model: this.props.model})
        )
      );
    }
  });

  views.TwitterLogin = TwitterLogin;
  views.Header = Header;

})(tiy.views);
