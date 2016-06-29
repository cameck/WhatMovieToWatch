var Results = React.createClass({

  getInitialState: function() {
    return {
      movies: this.props.movies,
      i: 0,
      watchListItems: this.props.watchListItems,
      user_id: this.props.user_id,
      genre: this.props.genre,
      fbId: this.props.fbId
    };
  },

  getDefaultProps: function() {
    return {
      movies: [],
      i: 0,
      watchListItems: false,
      user_id: null,
      genre: "Great",
      fbId: null
    };
  },

  nextMovie: function() {
    if ( this.state.i < (this.state.movies.length - 1) ) {
      var i = this.state.i + 1;
      this.setState({ i: i });
    }
  },

  previousMovie: function() {
      var i = this.state.i - 1;
      this.setState({ i: i });
  },

  previousMovieButton: function() {
      return (
        <i className="small material-icons left"
          onClick={this.previousMovie}>fast_rewind</i>
      )
  },

  nextMovieButton: function() {
    return (
      <i className="small material-icons right"
        onClick={this.nextMovie}>fast_forward</i>
    )
  },

  noWatchList: function() {
    return (
      <div className="col m4 s1">
        <h3>WatchList</h3>
        <a href="/auth/facebook">
          <h5>Sign up to Use This Feature</h5>
        </a>
      </div>
    )
  },

  addToWatchList: function() {
    var data = { movie_title: this.state.movies[this.state.i].title.toString(),
                 poster: this.state.movies[this.state.i].backdrop_path.toString(),
                 overview: this.state.movies[this.state.i].overview.toString(),
                 user_id: this.state.user_id
               };
    $.ajax({
      method: 'POST',
      url: '/watchlist_item/create',
      dataType: 'JSON',
      data: { watchlist_item: data },
      error: function() {
        Materialize.toast("Whoops! That's already on the list", 3000, 'rounded');
      },
      success: function(data) {
        var watchlistItem = this.state.watchListItems;
        watchlistItem.push(data);
        this.setState(watchlistItem);
        this.nextMovie();
      }.bind(this)
    });
  },

  deleteWatchItem: function(movie) {
    var index = this.state.watchListItems.indexOf(movie);
    var movies = this.state.watchListItems;
    movies.splice(index, 1);
    this.setState({ watchListItems: movies });
  },

  addToSeenList: function() {
    var data = { movie_title: this.state.movies[this.state.i].title.toString(),
                 poster: this.state.movies[this.state.i].backdrop_path.toString(),
                 overview: this.state.movies[this.state.i].overview.toString(),
                 user_id: this.state.user_id
               };
    $.ajax({
      method: 'POST',
      url: '/seen_movie/create',
      dataType: 'JSON',
      data: { seen_movie: data },
      error: function() {
        Materialize.toast("Whoops! That's already on the list", 3000, 'rounded');
      },
      success: function(data) {
        var index = this.state.i;
        var movies = this.state.movies;

        movies.splice(index, 1);
        this.setState({ movies: movies });
        this.nextMovie();
      }.bind(this)
    });
  },

  notSignedInAlert: function() {
    Materialize.toast("You have to be signed in to do that", 3000, 'rounded');
  },

  render: function() {
    return (
      <div className="row">
        <h1>
          Watch This Movie
          <span className="chip right">
            {this.state.genre + " "}
            <i className="fa fa-film" aria-hidden="true"></i>
          </span>
        </h1>

          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={"https://image.tmdb.org/t/p/w780" + this.state.movies[this.state.i].backdrop_path.toString()} />
                <span className="card-title">{this.state.movies[this.state.i].title.toString()}</span>
              </div>
              <div className="card-content">
                <Stars movies={this.state.movies} i={this.state.i}/>
                <p>
                  {this.state.movies[this.state.i].overview.toString()}
                </p>
              </div>
              <div className="card-action">
                <span className="center-align">
                  {this.state.i > 0 ? this.previousMovieButton() : null}
                  <a onClick={this.state.user_id ? this.addToWatchList : this.notSignedInAlert}>
                    <i className="small material-icons">playlist_add</i>
                    Add to Watchlist
                  </a>
                  <a onClick={this.state.user_id ? this.addToSeenList : this.notSignedInAlert}>
                    <i className="small material-icons">done</i>
                    Seen it
                  </a>
                </span>
                  {this.state.i < (this.state.movies.length - 1) ? this.nextMovieButton() : null}
             </div>
          </div>
        </div>

        {this.state.watchListItems ? <WatchList watchListItems={this.state.watchListItems}
                                                handleDeleteWatchItem={this.deleteWatchItem}
                                                facebookId={this.props.fbId}/>
                                   : this.noWatchList()}
      </div>
    )
  }
})
