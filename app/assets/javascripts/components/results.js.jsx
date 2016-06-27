var Results = React.createClass({

  getInitialState: function() {
    return {
      movies: this.props.movies,
      i: 0,
      watchListItems: this.props.watchListItems,
    };
  },

  getDefaultProps: function() {
    return {
      movies: [],
      i: 0,
      watchListItems: false,
    };
  },

  nextMovie: function() {
    if (this.state.i < 10) {
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

  render: function() {

    return (
      <div className="row">
        <h1>Watch This</h1>
          <div className="col s11 m7">
            <div className="card hoverable">
              <div className="card-image">
                <img src={"https://image.tmdb.org/t/p/w780" + this.state.movies[this.state.i].backdrop_path.toString()} />
                <span className="card-title">{this.state.movies[this.state.i].title.toString()}</span>
              </div>
              <div className="card-content">
                <p>
                  {this.state.movies[this.state.i].overview.toString()}
                  <span><i className="small material-icons">thumbs_up_down</i>
                    {this.state.movies[this.state.i].vote_average.toString()}/10 </span>
                </p>
              </div>
              <div className="card-action">

                <span className="center-align">
                  {this.state.i > 0 ? this.previousMovieButton() : null}
                  <a><i className="small material-icons">playlist_add</i>
                     Add to Watchlist</a>
                  <a onClick={this.nextMovie}>Seen it</a>
                </span>
                  {this.state.i <= 10 ? this.nextMovieButton() : null}
             </div>
          </div>
        </div>
        {this.state.watchListItems ? <WatchList watchListItems={this.props.watchListItems}/> : this.noWatchList()}
      </div>
    )
  }
})
