class UserController < ApplicationController
  def index
    if !current_user
      redirect_to root_path
    else
      @watchlist_items ||= current_user.watchlist_items
      @seen_movies ||= current_user.seen_movies
    end
  end

  def watch_list
    user = User.find_by(uid: params[:id])
    if user
      @user_name = user.name
      @profile_pic = serve_over_https(user.profile_picture)
      @public_watchlist_items = user.watchlist_items
    else
      redirect_to root_path
    end
  end

  private

  def serve_over_https(pic)
    pic.include?('http:') ? pic.sub('http', 'https') : pic
  end
end
