(function(views){

  var TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",
    render: function() {
        return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
          React.createElement("img", {className: "profile-image", src: this.props.img, alt: ""}), 
          " ", 
          React.createElement("span", null, this.props.name), 
          " ", 
          React.createElement("button", null, "Sign out")
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
          React.createElement("div", null, "Testing Twitter Login"), 
          React.createElement(TwitterLogin, {model: this.props.model})
        )
      );
    }
  });

  views.TwitterLogin = TwitterLogin;
  views.Header = Header;

})(tiy.views);
