(function(views){

//Twitter login for nav
  var TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",

    render: function() {
        //get a better image
        var origImg = this.props.img;
        var newImg = origImg.substring( 0, origImg.indexOf( "_normal" ) ) + ".jpg";
        return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
        React.createElement("div", {className: "inner"}, 
          React.createElement("img", {className: "avatar", src: newImg, alt: ""}), 
         
          React.createElement("div", {className: "avatar-name"}, 
          React.createElement("div", {className: "avatar-name"}, this.props.name), 
       
          React.createElement("a", {className: "log"}, "Logout")
         )
         )
        )
      );
    }
  })

  var TwitterNotLogged = React.createClass({displayName: "TwitterNotLogged",
    render: function() {
        return (
        React.createElement("div", {onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("div", {className: "nav-logo-wrapper"}, "SOUNDZ"), 
          React.createElement("div", {className: "nav-twitter-signin"}, 
            React.createElement("i", {className: "fa fa-twitter"}), 
            React.createElement("div", {className: "signin-txt"}, "SIGN IN")
          )
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

  //for Reg modal
  var RegLoggedIn = React.createClass({displayName: "RegLoggedIn",

    closeRemodal: function() {
      //find the remodal
      var inst = $.remodal.lookup[$('[data-remodal-id=register]').data('remodal')];
      // close the modal
      inst.close();
    },

    render: function() {
        //get a better image
        var origImg = this.props.img;
        var newImg = origImg.substring( 0, origImg.indexOf( "_normal" ) ) + ".jpg";
        
        return (
        React.createElement("div", {className: "logged-in"}, 
        React.createElement("div", {className: "reg-title-welcome"}, 
          React.createElement("hr", null), 
          React.createElement("img", {className: "avatar", src: newImg}), 
          React.createElement("div", {className: "reg-title-text"}, "Hey, ", this.props.name, "... ", React.createElement("a", {href: "/#genre/rock", onClick: this.closeRemodal}, "Rock"), " on!", React.createElement("br", null), 
            React.createElement("div", {className: "reg-title-text-sm"}, "(or explore ", React.createElement("a", {href: "/#search", onClick: this.closeRemodal}, "some other genre"), ")")), 
          React.createElement("hr", null)
        ), 
        React.createElement("div", {className: "reg-btn-wrapper"}, React.createElement("a", {className: "explore-btn", href: "#"}, "explore SOUNDZ")), 
        React.createElement("a", {className: "log", onClick: tiy.logout.bind(tiy)}, "Logout")
        )
      );
    }
  })

  var RegNotLogged = React.createClass({displayName: "RegNotLogged",
    render: function() {
        return (
        React.createElement("div", null, 
        React.createElement("hr", null), 
            React.createElement("div", {className: "reg-title"}, 
            "login or register" + ' ' +
            "to explore Soundz"
            ), 
          React.createElement("hr", null), 
        React.createElement("div", {className: "twitter-btn", onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("div", {className: "left"}, 
            React.createElement("img", {src: "http://www.ideate-interactive.com/IY/images/twitter-icon.png"})
          ), 
          React.createElement("div", {className: "t-text"}, "Sign in"), React.createElement("div", {className: "t-text-sm"}, "via"), React.createElement("div", {className: "t-text"}, "Twitter")
        ), 
        React.createElement("div", {className: "reg-smtext"}, "Well never post without your permission."), 

          " "
        )
      );
    }
  })

  var RegLogin = React.createBackboneClass({
    getChild: function() {
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return React.createElement(RegLoggedIn, {name: name, img: img})
      }
      else {
        return React.createElement(RegNotLogged, null)
      }
    },

    render: function() {
      return (
        React.createElement("div", null, 
           this.getChild() 
        )
      );
    }

  });

  var RegHeader = React.createBackboneClass({
    render: function() {
      return (
        React.createElement("div", {className: "reg"}, 
          React.createElement(RegLogin, {model: this.props.model})
        )
      );
    }
  });

  views.RegLogin = RegLogin;
  views.RegHeader = RegHeader;
  views.TwitterLogin = TwitterLogin;
  views.Header = Header;

})(tiy.views);
