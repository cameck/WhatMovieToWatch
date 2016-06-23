class Movie


  def get_movie_results(genre_id)
    movie_results = HTTParty.get("http://api.themoviedb.org/3/discover/movie?with_genres=#{genre_id}&api_key=#{ENV['MOVIE_API_KEY']}&sort_by=popularity.desc")

    JSON.parse(movie_results.body)
  end
end
