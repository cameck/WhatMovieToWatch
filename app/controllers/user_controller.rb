class UserController < ApplicationController
  def index
    if !current_user
      redirect_to root_path
    else
      @watchlist_items ||= current_user.watchlist_items
      @seen_movies ||= current_user.seen_movies
    end
  end
end
