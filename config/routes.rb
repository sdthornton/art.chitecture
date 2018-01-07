Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  resources :services, only: :index
  get '/process' => 'process#index', as: 'process'
  get '/contact' => 'contact#index', as: 'contact'

end
