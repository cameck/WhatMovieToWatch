Rails.application.routes.draw do
  post 'seen_movie/create'

  resources :seen_movie, only: [:destroy]

  post 'watchlist_item/create'
  resources :watchlist_item, only: [:destroy]

  get 'profile/', to: 'user#index', as: 'profile'
  get 'watchlist/:id', to: 'user#watch_list'

  match 'auth/:provider/callback', to: 'sessions#create', via: %i[get post]
  match 'auth/failure', to: redirect('/'), via: %i[get post]
  match 'signout', to: 'sessions#destroy', as: 'signout', via: %i[get post]

  resources :sessions, only: %i[create destroy]
  resource :home, only: [:show]

  resources :movie
  root 'movie#index'
  get 'about/', to: 'movie#about', as: 'about'
end
