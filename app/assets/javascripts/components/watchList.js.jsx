var WatchList = React.createClass({

  getInitialState: function() {
    return {
      watchListItems: this.props.watchListItems
    };
  },

  getDefaultProps: function() {
    return {
      watchListItems: false
    };
  },

  returnWatchList: function(movie) {
    return (
    <li className="collection-item avatar hoverable" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w154/" + movie.poster.toString()}
           alt={"Movie Poster of " + movie.movie_title.toString()}  className="circle" />
      <span className="title">{movie.movie_title.toString()}</span>
      <p>
      </p>
      <a onClick={() => this.deleteFromWatchList(movie.id)}
         className="secondary-content" title="Remove From Watchlist">
         x
      </a>
    </li>
  )
  },

  deleteFromWatchList: (id) => {

    $.ajax({
      method: 'DELETE',
      url: '/watchlist_item/' + id,
      dataType: 'JSON',
      success: function() {


      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="col m5 s12">
      <h3>WatchList</h3>

        <ul className="collection">
          { this.state.watchListItems.map(this.returnWatchList) }
        </ul>
      </div>
    )
  }
});
