var ProfileMovieList = React.createClass({

  getInitialState: function() {
    return {
      watchListItems: this.props.watchListItems,
      user_id: this.props.user_id,
      seenMovies: this.props.seenMovies,
      fbId: this.props.fbId
    };
  },

  getDefaultProps: function() {
    return {
      watchListItems: false,
      user_id: null,
      seenMovies: false,
      fbId: null
    };
  },

  returnWatchlist: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w92" + movie.poster}
           alt={"Movie Poster of " + movie.movie_title}  className="circle" />
      <span className="title"><strong>{movie.movie_title}</strong></span>
      <p>
      {movie.overview.trunc(150)}<br />
      <a onClick={() => this.addToSeenList(movie)}>
        <i className="small material-icons">done</i>
        Seen it
      </a>
      </p>
      <a onClick={() => this.deleteFromWatchList(movie)}
         className="secondary-content" title="Remove From Watchlist">
         X
      </a>
    </li>
  )
  },

  returnSeenMovies: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w92" + movie.poster}
           alt={"Movie Poster of " + movie.movie_title}  className="circle" />
      <span className="title"><strong>{movie.movie_title}</strong></span>

      <p>
      {movie.overview.trunc(150)}
      </p>
      <a onClick={() => this.deleteFromSeenList(movie)}
         className="secondary-content" title="Remove From Seen Movies">
         X
      </a>
    </li>
  )
  },

  addToSeenList: function(movie) {
    this.deleteFromWatchList(movie);
    var data = { movie_title: movie.movie_title,
                 poster: movie.poster,
                 overview: movie.overview,
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
        // Add to List
        var seenList = this.state.seenMovies;
        seenList.push(data);
        // Set the State
        this.setState({ seenMovies: seenList });
      }.bind(this)
    });
  },

  deleteFromWatchList: function(movie) {

    $.ajax({
      method: 'DELETE',
      url: '/watchlist_item/' + movie.id,
      dataType: 'JSON',
      success: function() {
        var index = this.state.watchListItems.indexOf(movie);
        var movies = this.state.watchListItems;
        movies.splice(index, 1);
        this.setState({ watchListItems: movies });
      }.bind(this)
    });
  },

  deleteFromSeenList: function(movie) {

    $.ajax({
      method: 'DELETE',
      url: '/seen_movie/' + movie.id,
      dataType: 'JSON',
      success: function() {
        var index = this.state.seenMovies.indexOf(movie);
        var movies = this.state.seenMovies;
        movies.splice(index, 1);
        this.setState({ seenMovies: movies });
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="col m6 s12">
        <h3>Watchlist</h3>
        <h6>
          <a href={window.location.protocol + window.location.host + '/watchlist/' + this.props.fbId}>
            Find Your Sharable Link here <i className="fa fa-share" aria-hidden="true"></i>

          </a>
        </h6>
          <ul className="collection">
            { this.state.watchListItems.map(this.returnWatchlist) }
          </ul>
        </div>
        <div className="col m6 s12">
        <h3>Seen Movies</h3>
        <h6>There's some goodies here 😉</h6>
          <ul className="collection">
            { this.state.seenMovies.map(this.returnSeenMovies) }
          </ul>
        </div>
      </div>
    )
  }
});
