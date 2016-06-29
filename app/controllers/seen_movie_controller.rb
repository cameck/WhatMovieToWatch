class SeenMovieController < ApplicationController
  def create
    @seen_movie = SeenMovie.new(seen_movie_params)

    if @seen_movie.save
      render json: @seen_movie
    else
      render json: @seen_movie.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @seen_movie = SeenMovie.find(seen_movie_params)
    @seen_movie.destroy
    head :no_content
  end

  private

    def seen_movie_params
      params.require(:seen_movie).permit(:movie_title, :poster, :overview, :user_id)
    end
end
