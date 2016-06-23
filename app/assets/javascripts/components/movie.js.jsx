var Movies = React.createClass({
  search: function(id) {
    console.log(id);
    var data = { genreID: id };

    $.ajax({
      method: 'GET',
      url: '/movie/',
      data: data,

    });

  },
  render: function() {
    return (
      <div class="row">
        <h1>Movie Genre?</h1>

        <a href="/movie/28/"
           className="waves-effect btn-large light-blue">Action</a>

        <a onClick={() => this.search(12)} href="#!"
           className="waves-effect btn-large">Adventure</a>

        <a onClick={() => this.search(16)} href="#!"
           className="waves-effect btn-large">Animation</a>

        <a onClick={() => this.search(35)} href="#!"
           className="waves-effect btn-large">Comedy</a>

        <a onClick={() => this.search(80)} href="#!"
           className="waves-effect btn-large">Crime</a>

        <a onClick={() => this.search(18)} href="#!"
           className="waves-effect btn-large">Drama</a>

        <a onClick={() => this.search(10751)} href="#!"
           className="waves-effect btn-large">Family</a>

        <a onClick={() => this.search(14)} href="#!"
           className="waves-effect btn-large">Fantasy</a>

        <a onClick={() => this.search(10769)} href="#!"
           className="waves-effect btn-large">Foreign</a>

        <a onClick={() => this.search(36)} href="#!"
           className="waves-effect btn-large">History</a>

        <a onClick={() => this.search(27)} href="#!"
           className="waves-effect btn-large">Horror</a>

        <a onClick={() => this.search(10402)} href="#!"
           className="waves-effect btn-large">Music</a>

        <a onClick={() => this.search(9648)} href="#!"
           className="waves-effect btn-large">Mystery</a>

        <a onClick={() => this.search(10749)} href="#!"
           className="waves-effect btn-large">Romance</a>

        <a onClick={() => this.search(878)} href="#!"
           className="waves-effect btn-large">Science Fiction</a>

        <a onClick={() => this.search(53)} href="#!"
           className="waves-effect btn-large">Thriller</a>

        <a onClick={() => this.search(10752)} href="#!"
           className="waves-effect btn-large">War</a>

        <a onClick={() => this.search(37)} href="#!"
           className="waves-effect btn-large">Western</a>

      </div>
    )
  }
});
