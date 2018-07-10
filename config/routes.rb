Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  devise_for :admins, skip: [:registrations]

  resources :projects, only: :index
  get 'projects/contemporary' => 'projects#contemporary', as: 'contemporary_project'
  get 'projects/french_country' => 'projects#french_country', as: 'french_country_project'
  get 'projects/modern_mediterranean' => 'projects#modern_mediterranean', as: 'modern_mediterranean_project'
  get '/projects/nw_traditional' => 'projects#nw_traditional', as: 'nw_traditional_project'
  get '/projects/flat_to_fab' => 'projects#flat_to_fab', as: 'flat_to_fab_project'
  resources :services, only: :index
  get '/process' => 'process#index', as: 'process'
  get '/contact' => 'contact#index', as: 'contact'
  get '/about' => 'about#index', as: 'about'
  resources :reviews, only: :index

end
