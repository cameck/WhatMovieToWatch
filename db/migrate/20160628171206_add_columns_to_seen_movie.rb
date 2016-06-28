class AddColumnsToSeenMovie < ActiveRecord::Migration
  def change
    add_column :seen_movies, :movie_title, :string
    add_column :seen_movies, :overview, :string
    add_column :seen_movies, :poster, :string
    add_reference :seen_movies, :user, index: true, foreign_key: true
  end
end
