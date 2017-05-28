Rails.application.routes.draw do
  post 'seen_movie/create'

  resources :seen_movie, only: [:destroy]

  post 'watchlist_item/create'
  resources :watchlist_item, only: [:destroy]

  get 'profile/', to: 'user#index', as: 'profile'
  get 'watchlist/:id', to: 'user#watch_list'

  get 'auth/facebook/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: %i[create destroy]
  resource :home, only: [:show]

  resources :movie
  root 'movie#index'
  get 'about/', to: 'movie#about', as: 'about'
end
