var WatchList = React.createClass({

  returnWatchList: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w154/" + movie.poster}
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

  render: function() {
    return (
      <div className="col m5 s12">
      <h3>WatchList</h3>

        <ul className="collection">
          { this.props.watchListItems.map(this.returnWatchList) }
        </ul>
      </div>
    )
  }
});
