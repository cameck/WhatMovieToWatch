class UserController < ApplicationController
  def index
    @watchlist_items = current_user.watchlist_items
  end
end
