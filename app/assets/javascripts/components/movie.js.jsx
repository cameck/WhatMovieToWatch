var Movies = React.createClass({

  getInitialState: function() {
    return {
      genres: this.props.genres,
    };
  },

  getDefaultProps: function() {
    return {
      genres: []
    };
  },

  returnGenres: function(key) {

    var imageSrc = this.state.genres[key].replace(/\s+/g, '');
    return (
      <div className="col s12 m3 l2">
        <a href={"/movie/" + key} key={key}>
        <div className="card">
          <div className="card-image">
            <img src={"http://localhost:3000/assets/" + imageSrc + '.jpg'} />
            <span className="card-title">{this.state.genres[key]}</span>
          </div>
        </div>
        </a>
      </div>
    )
  },

  render: function() {
    return (
      <div className="row">
        <h1>Pick a Genre</h1>
        {Object.keys(this.state.genres).map(this.returnGenres)}
      </div>
    )
  }
});
