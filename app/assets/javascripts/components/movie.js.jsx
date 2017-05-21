var Movies = React.createClass({

  getInitialState: function() {
    return {
      genres: this.props.genres,
      root: this.props.root
    };
  },

  getDefaultProps: function() {
    return {
      genres: [],
      root: "https://movietowatch.herokuapp.com"
    };
  },

  returnGenres: function(key, index) {

    var imageSrc = this.state.genres[key].replace(/\s+/g, '');
    return (
      <div className="col s12 m3"  key={key}>
        <a href={"/movie/" + key}>
        <div className="card">
          <div className="card-image">
            <img src={"https://s3-us-west-2.amazonaws.com/moviewatchimages/" + imageSrc + '.jpg'} />
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
