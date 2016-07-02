class SeenMovie < ActiveRecord::Base
  validates_uniqueness_of :movie_title, scope: :user_id
  belongs_to :user
end
