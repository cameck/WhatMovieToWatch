class MovieController < ApplicationController

  def index
  end

  def show
    @movie_results ||= Movie.new
    @genre = Movie.get_genre(params[:id])
    @movie_results = @movie_results.get_movie_results(params[:id])
    @movie_results = @movie_results["results"]
    if current_user
      @watchlist_items = current_user.watchlist_items
      @seen_movies = current_user.seen_movies
    end
  end

end
