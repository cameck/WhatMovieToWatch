var Results = React.createClass({

  getInitialState: function() {
    return {
      movies: this.props.data,
      i: 0
    };
  },

  getDefaultProps: function() {
    return {
      movies: [],
      i: 0
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

  render: function() {

    return (
      <div className="row">
        <h1 className="center">Watch This</h1>
          {this.state.i > 0 ? <PreviousButton handlePrevButton={this.previousMovie}/> : null}
          <div className="col s11 m8 offset-m1">
            <div className="card hoverable">
              <div className="card-image">
                <img src={"https://image.tmdb.org/t/p/w780" + this.state.movies[this.state.i].backdrop_path.toString()} />
                <span className="card-title">{this.state.movies[this.state.i].original_title.toString()}</span>
              </div>
              <div className="card-content">
                <p>
                  {this.state.movies[this.state.i].overview.toString()}
                  <span><i className="small material-icons">thumbs_up_down</i>
                    {this.state.movies[this.state.i].vote_average.toString()}/10 </span>
                </p>
              </div>
              <div className="card-action">

                <span className="center-align"><a onClick={this.nextMovie}>Meh</a>
                <a onClick={this.nextMovie}>Seen it</a></span>
                <i className="small material-icons right"
                   onClick={this.nextMovie}>fast_forward</i>
             </div>
          </div>
        </div>
      </div>
    )
  }
})
