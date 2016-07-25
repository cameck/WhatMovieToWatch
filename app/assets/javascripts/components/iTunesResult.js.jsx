var ITunesResult = React.createClass({
  getInitialState: function() {
    return {
      iTunesMovies: {}
    };
  },

  findITunesMovies: function(movieURLSafe, movieTitle, iTunesMovies) {
    $.ajax({
      method: 'GET',
      url: "https://itunes.apple.com/search?term=" + movieURLSafe + "&media=movie&limit=1",
      dataType: 'JSONP',
      global: true,

      error: function() {
        Materialize.toast("Sorry! We weren't able to get all the latest for you!", 3000, 'rounded');
      },
      success: function(data) {

        if (data["results"][0]) {
          console.log(data["results"][0]);
          var moviePrice = data["results"][0].collectionPrice ? movieTitle + "Price" : "Preorder";
          var movieTitleLink = movieTitle + "Link";
          var movieTitlePrice = movieTitle + "Price";

          iTunesMovies[movieTitlePrice] = moviePrice;
          iTunesMovies[movieTitleLink] = data["results"][0].trackViewUrl + "&at=1000lomC";
        }
      }.bind(this)
    });
  },

  componentDidMount: function() {
    var iTunesMovies = {};
    var iTunesAjaxCalls = [];
    for (var i=0; i < this.props.movies.length; i++) {
      var movieURLSafe = this.props.movies[i].title.replace(/ /g, "+");
      var movieTitle = this.props.movies[i].title;
      // eval('var fetch' + i + " = [this.findITunesMovies(" +
      //    movieURLSafe + "," + movieTitle + "," + iTunesMovies + ")]")

      // iTunesAjaxCalls.push(() => this.findITunesMovies(movieURLSafe, movieTitle, iTunesMovies))
      iTunesAjaxCalls.push($.ajax({
            method: 'GET',
            url: "https://itunes.apple.com/search?term=" + movieURLSafe + "&media=movie&limit=1",
            dataType: 'JSONP',
            global: true,

            error: function() {
              Materialize.toast("Sorry! We weren't able to get all the latest for you!", 3000, 'rounded');
            },
            success: function(data) {

              if (data["results"][0]) {
                console.log(data["results"][0]);
                var moviePrice = data["results"][0].collectionPrice ? movieTitle + "Price" : "Preorder";
                var movieTitleLink = movieTitle + "Link";
                var movieTitlePrice = movieTitle + "Price";

                iTunesMovies[movieTitlePrice] = moviePrice;
                iTunesMovies[movieTitleLink] = data["results"][0].trackViewUrl + "&at=1000lomC";
              }
            }
          }));
    }

    $.when.apply(undefined, iTunesAjaxCalls).done(
      function(){
        console.log("DONE! " + iTunesMovies)
      }
    )
    // (function(){
    //   var counter = 0;
    //   $.each( iTunesAjaxCalls, function( i, ajaxCall ) {
    //       console.log("YO in the closure" +i + ajaxCall);
    //        $.when($, ajaxCall()).done( function(){
    //          counter++;
    //          if (counter >= iTunesAjaxCalls.length){
    //           console.log(counter + " " + iTunesAjaxCalls.length)
    //          }
    //
    //        });
    //
    //     });
    //
    // })();


  },
  render: function() {
    return (
    <div><p>YOLO</p></div>
  )
  }

});
