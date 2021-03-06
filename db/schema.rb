# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160628171206) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "seen_movies", force: :cascade do |t|
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "movie_title"
    t.string   "overview"
    t.string   "poster"
    t.integer  "user_id"
  end

  add_index "seen_movies", ["user_id"], name: "index_seen_movies_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "profile_picture"
  end

  create_table "watchlist_items", force: :cascade do |t|
    t.string   "movie_title"
    t.string   "poster"
    t.string   "overview"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "watchlist_items", ["user_id"], name: "index_watchlist_items_on_user_id", using: :btree

  add_foreign_key "seen_movies", "users"
  add_foreign_key "watchlist_items", "users"
end
