class WatchlistItem < ActiveRecord::Base
  validates_uniqueness_of :movie_title, scope: :user
  belongs_to :user
end
