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
        console.log("If you're looking, not all the latest iTunes data came through :/");
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
  showITunesLink: function() {
    var moviePrice = this.props.movies[this.props.i].title.toString() + "Price";
    return this.state.iTunesMovies[moviePrice];

  },
  render: function() {
    return (
    <div><p>{this.state.iTunesMovies[this.props.movies[this.props.i].title.toString() + "Price"]}</p></div>
  )
  }

});
