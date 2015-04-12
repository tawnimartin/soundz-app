(function(views){

//Twitter login for nav
  var TwitterLoggedIn = React.createClass({

    render: function() {
        //get a better image
        var origImg = this.props.img;
        var newImg = origImg.substring( 0, origImg.indexOf( "_normal" ) ) + ".jpg";
        return (
        <div className="logged-in" onClick={tiy.logout.bind(tiy)}>
        <div className="inner">
          <img className="avatar" src={newImg} alt=""/>
         
          <div className="avatar-name">
          <div className="avatar-name">{this.props.name}</div>
       
          <a className="log">Logout</a>
         </div>
         </div>
        </div>
      );
    }
  })

  var TwitterNotLogged = React.createClass({
    render: function() {
        return (
        <div onClick={tiy.twitterLogin.bind(tiy)}>
          <div className="nav-logo-wrapper">SOUNDZ</div>
          <div className="nav-twitter-signin">
            <i className="fa fa-twitter"></i>
            <div className="signin-txt">SIGN IN</div>
          </div>
        </div>
      );
    }
  })

  var TwitterLogin = React.createBackboneClass({
    getChild: function() {
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return <TwitterLoggedIn name={name} img={img}/>
      }
      else {
        return <TwitterNotLogged/>
      }
    },

    render: function() {
      return (
        <div className="twitter-login">
          { this.getChild() }
        </div>
      );
    }

  });

  var Header = React.createBackboneClass({
    render: function() {
      return (
        <div>
         
          <TwitterLogin model={this.props.model}/>
        </div>
      );
    }
  });

  //for Reg modal
  var RegLoggedIn = React.createClass({

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
        <div className="logged-in">
        <div className="reg-title-welcome">
          <hr />
          <img className="avatar" src={newImg} />
          <div className="reg-title-text">Hey, {this.props.name}... <a href="/#genre/rock" onClick={this.closeRemodal}>Rock</a> on!<br />
            <div className="reg-title-text-sm">(or explore <a href="/#search" onClick={this.closeRemodal}>some other genre</a>)</div></div>
          <hr />
        </div>
        <div className="reg-btn-wrapper"><a className="explore-btn" href="/#search" onClick={this.closeRemodal}>explore SOUNDZ</a></div>
        <a className="log" onClick={tiy.logout.bind(tiy)}>Logout</a>
        </div>
      );
    }
  })

  var RegNotLogged = React.createClass({
    render: function() {
        return (
        <div> 
        <hr />
            <div className="reg-title">
            login or register
            to explore Soundz
            </div>
          <hr />
        <div className="twitter-btn" onClick={tiy.twitterLogin.bind(tiy)}>
          <div className="left">
            <img src="http://www.ideate-interactive.com/IY/images/twitter-icon.png" />
          </div>
          <div className="t-text">Sign in</div><div className="t-text-sm">via</div><div className="t-text">Twitter</div>
        </div>
        <div className="reg-smtext">Well never post without your permission.</div>

          {" "}
        </div>
      );
    }
  })

  var RegLogin = React.createBackboneClass({
    getChild: function() {
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return <RegLoggedIn name={name} img={img}/>
      }
      else {
        return <RegNotLogged/>
      }
    },

    render: function() {
      return (
        <div>
          { this.getChild() }
        </div>
      );
    }

  });

  var RegHeader = React.createBackboneClass({
    render: function() {
      return (
        <div className="reg">
          <RegLogin model={this.props.model}/>
        </div>
      );
    }
  });

  views.RegLogin = RegLogin;
  views.RegHeader = RegHeader;
  views.TwitterLogin = TwitterLogin;
  views.Header = Header;

})(tiy.views);
