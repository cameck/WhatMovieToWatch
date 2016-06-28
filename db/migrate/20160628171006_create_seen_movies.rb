class CreateSeenMovies < ActiveRecord::Migration
  def change
    create_table :seen_movies do |t|

      t.timestamps null: false
    end
  end
end
