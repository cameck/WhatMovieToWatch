class MovieController < ApplicationController

  def index
  end

  def show
    @movie_results = Movie.new(params[:id])

  end

end
