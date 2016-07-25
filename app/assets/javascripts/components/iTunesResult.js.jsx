var ITunesResult = React.createClass({
  getInitialState: function() {
    return {
      iTunesMovies: {}
    };
  },

  componentDidMount: function() {
    for (var i=0; i < this.props.movies.length; i++) {
      var movieURLSafe = this.props.movies[i].title.replace(/ /g, "+");
      var movieTitle = this.props.movies[i].title;
      this.findITunesMovies(movieURLSafe, movieTitle);
    }
  },

  findITunesMovies: function(movieURLSafe, movieTitle) {
    $.ajax({
      method: 'GET',
      url: "https://itunes.apple.com/search?term=" + movieURLSafe + "&media=movie&limit=1",
      dataType: 'JSONP',
      global: true,

      error: function() {
        console.log("If you're looking, an API call failed :/");
      },
      success: function(data) {

        if (data["results"][0]) {
          // Store link to iTunes Store and price - If there is no price that means
          // it's only avaliable for preorder
          var moviePrice = data["results"][0].collectionPrice ? data["results"][0].collectionPrice : "Preorder";
          var movieTitleLink = movieTitle + "Link";
          var movieTitlePrice = movieTitle + "Price";
          var moviesFromItunes = this.state.iTunesMovies;
          moviesFromItunes[movieTitlePrice] = moviePrice;
          moviesFromItunes[movieTitleLink] = data["results"][0].trackViewUrl + "&at=1000lomC";
          this.setState(moviesFromItunes);

        }
      }.bind(this)
    });
  },

  getITunesLink: function() {
    var movieLink = this.props.movies[this.props.i].title.toString() + "Link";
    return this.state.iTunesMovies[movieLink];
  },

  isPreorder: function() {
    var moviePrice = this.props.movies[this.props.i].title.toString() + "Price";
    return this.state.iTunesMovies[moviePrice] == "Preorder";
  },
  render: function() {
    var iTunesButton;
    if (this.getITunesLink()) {
      iTunesButton = this.isPreorder() ? <PreorderOnITunesLogo /> : <GetItOnITunesLogo />;
    } else {
      iTunesButton = null;
    }

    var divStyle = {
      paddingTop: "10px",
    };

    return (
    <div style={divStyle}>
      <a href={this.getITunesLink()} target="_blank">
        {iTunesButton}
      </a>
    </div>
  )
  }

});
