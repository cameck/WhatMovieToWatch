var sharableMovieList = React.createClass({

  getInitialState: function() {
    return {
      watchListItems: this.props.watchListItems,
    };
  },

  getDefaultProps: function() {
    return {
      watchListItems: false,
    };
  },

  returnWatchlist: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w92" + movie.poster}
           alt={"Movie Poster of " + movie.movie_title}  className="circle" />
      <span className="title"><strong>{movie.movie_title}</strong></span>
      <p>
      {movie.overview}<br />
      </p>
    </li>
  )
  },

  share:  function() {
    FB.ui({
      method: 'share',
      display: 'popup',
      href: window.location.href,
      }, function(response){});
  },

  render: function() {
    var headingStyle = {
      display: "inline"
    };

    return (
      <div className="row">
        <div className="col m12 s12">
        <h3 style={headingStyle}>Watchlist</h3>
        <div id="shareBtn" onClick={this.share} className="right">
          <a className="waves-effect waves-light btn">
            <i className="fa fa-facebook-square right" aria-hidden="true"></i>Share on </a>
        </div>
        <ul className="collection">
          { this.state.watchListItems.map(this.returnWatchlist) }
        </ul>
        </div>
      </div>
    )
  }
});
