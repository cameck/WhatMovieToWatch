class WatchlistItemController < ApplicationController
  def create
    @watchlist_item = WatchlistItem.new(watch_item_params)

    if @watchlist_item.save
      render json: @watchlist_item
    else
      render json: @watchlist_item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find(params[:id])
    @watchlist_item.destroy
    head :no_content
  end

  private

    def watch_item_params
      params.require(:watchlist_item).permit(:movie_title, :poster, :overview, :user_id)
    end
end
