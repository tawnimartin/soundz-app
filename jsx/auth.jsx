(function(views){

  var TwitterLoggedIn = React.createClass({

    render: function() {
        //get a better image
        var origImg = this.props.img;
        var newImg = origImg.substring( 0, origImg.indexOf( "_normal" ) ) + ".jpg";
        console.log("user", newImg);
        return (
        <div className="logged-in" onClick={tiy.logout.bind(tiy)}>
          <img className="avatar" src={newImg} alt=""/>
          {" "}
          <div className="avatar-name">
          <div className="avatar-name">{this.props.name}</div>
          {" "}
          <a className="log">Logout</a>
         </div>
        </div>
      );
    }
  })

  var TwitterNotLogged = React.createClass({
    render: function() {
        return (
        <div onClick={tiy.twitterLogin.bind(tiy)}>
          <span>Sign In With</span>
          {" "}
          <button>Twitter</button>
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

  views.TwitterLogin = TwitterLogin;
  views.Header = Header;

})(tiy.views);
