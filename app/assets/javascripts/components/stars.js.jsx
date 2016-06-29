var Stars = React.createClass({

  render: function() {

    var starStyles = {
      position: "relative",
      display: "inline-block",
      color: "transparent"
    };
    var afterStyles = {
      width: (this.props.movies[this.props.i].vote_average * 10) + '%'
    }

    return (
      <div className="row">
        <div className="col offset-m9 m3 offset-s8 s4">
          <span id="votes">
            <span className='stars-container' style={starStyles}>
              ★★★★★
            </span>
            <sup>
              ({this.props.movies[this.props.i].vote_count})
            </sup>
            <style dangerouslySetInnerHTML={{
              __html: [
                '.stars-container:after {',
                '  width:' + afterStyles["width"] + ';',
                '}'
              ].join('\n')
            }}>
            </style>
          </span>
        </div>
      </div>
    )
  }
})
