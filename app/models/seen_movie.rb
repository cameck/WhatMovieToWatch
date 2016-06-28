class SeenMovie < ActiveRecord::Base
  validates :movie_title, uniqueness: true
  belongs_to :user
end
