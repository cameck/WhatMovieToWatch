class WatchlistItem < ActiveRecord::Base
  validates_uniquenss_of :movie_title, scope: :user
  belongs_to :user
end
