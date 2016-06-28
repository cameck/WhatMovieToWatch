class Movie

  def get_movie_results(genre_id)
    movie_results = HTTParty.get("http://api.themoviedb.org/3/discover/movie?with_genres=#{genre_id}&api_key=#{ENV['MOVIE_API_KEY']}&sort_by=popularity.desc")
    JSON.parse(movie_results.body)
  end

  def self.get_genre(id)
    genres = {
      28 => "Action",
      12 => "Adventure",
      16 => "Animation",
      35 => "Comedy",
      80 => "Crime",
      99 => "Documentary",
      18 => "Drama",
      10751 => "Family",
      14 => "Fantasy",
      10769 => "Foreign",
      36 => "History",
      27 => "Horror",
      10402 => "Music",
      9648 => "Mystery",
      10749 => "Romance",
      878 => "Science Fiction",
      10770 => "TV Movie",
      53 => "Thriller",
      10752 => "War",
      37 => "Western",
    }

    genres[id.to_i]
  end
end
