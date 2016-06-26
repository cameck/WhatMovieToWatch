class CreateWatchlistItems < ActiveRecord::Migration
  def change
    create_table :watchlist_items do |t|
      t.string :movie_title
      t.string :poster
      t.string :overview
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
