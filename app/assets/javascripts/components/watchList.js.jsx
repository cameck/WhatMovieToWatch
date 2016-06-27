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
    <li className="collection-item avatar" key={movie.id}>
      <img src={"https://image.tmdb.org/t/p/w154/" + movie.poster.toString()}
           alt={"Movie Poster of " + movie.movie_title.toString()}  className="circle" />
      <span className="title">{movie.movie_title.toString()}</span>
      <p>
      </p>
      <a href="#!" className="secondary-content">x</a>
    </li>
  )
  },

  render: function() {
    return (
      <div className="col m4 s1">
      <h3>WatchList</h3>

        <ul className="collection">
          { this.state.watchListItems.map(this.returnWatchList) }
        </ul>
      </div>
    )
  }
});
