var PreviousButton = React.createClass({
  render: function() {
    return (
      <div className="col s1 m1">
        <div className="valign-wrapper">
          <span className=" valign">
            <a className="btn-floating btn-large waves-effect waves-light blue"
               onClick={this.props.handlePrevButton}><i className="material-icons">
               fast_rewind</i></a></span>
        </div>
      </div>
    )
  }
})
