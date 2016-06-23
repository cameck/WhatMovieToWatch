class MovieController < ApplicationController

  def index
  end

  def show
    @movie_results = Movie.new
    @genre = params[:id]
    @movie_results = @movie_results.get_movie_results(params[:id])
    @movie_results = @movie_results["results"]
  end

end
