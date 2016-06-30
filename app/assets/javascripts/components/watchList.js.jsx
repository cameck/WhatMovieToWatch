var WatchList = React.createClass({

  returnWatchList: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w92" + movie.poster}
           alt={"Movie Poster of " + movie.movie_title}  className="circle" />
      <span className="title">{movie.movie_title}</span>
      <p>
      {movie.overview.trunc(50)}
      </p>
      <a onClick={() => this.deleteFromWatchList(movie)}
         className="secondary-content" title="Remove From Watchlist">
         x
      </a>
    </li>
  )
  },

  deleteFromWatchList: function(movie) {

    $.ajax({
      method: 'DELETE',
      url: '/watchlist_item/' + movie.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteWatchItem(movie)
      }.bind(this)
    });
  },

  share:  function() {
    FB.ui({
      method: 'share',
      display: 'popup',
      href: window.location.host + '/watchlist/' + this.props.facebookId,
      }, function(response){});
  },

  render: function() {
    var headingStyle = {
      display: "inline"
    };

    return (
      <div className="col m5 s12">
        <div className="row">
          <div className="col m6 s6">
            <h3 className="results-watch-title" >Watchlist</h3>
          </div>
          <div className="col m6 s6">
            <div id="shareBtn" onClick={this.share} className="right">
              <a className="waves-effect waves-light btn">
                <i className="fa fa-facebook-square right" aria-hidden="true"></i>Share on </a>
            </div>
          </div>
        </div>
        <ul className="collection">
          { this.props.watchListItems.map(this.returnWatchList) }
        </ul>
      </div>
    )
  }
});
