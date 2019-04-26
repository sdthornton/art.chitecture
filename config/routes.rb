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
  get '/projects/project_exteriors' => 'projects#project_exteriors', as: 'project_exteriors'
  get '/projects/project_interiors' => 'projects#project_interiors', as: 'project_interiors'
  get '/projects/remodel_cbrg' => 'projects#remodel_cbrg', as: 'remodel_cbrg'
  get '/projects/remodel_eb' => 'projects#remodel_eb', as: 'remodel_eb'
  get '/projects/remodel_tig' => 'projects#remodel_tig', as: 'remodel_tig'
  get '/projects/renderings' => 'projects#renderings', as: 'renderings'
  get '/projects/details' => 'projects#details', as: 'details'
  resources :concept_designs, only: :index
  get '/concept_designs/ultra_master_bath' => 'concept_designs#ultra_master_bath', as: 'ultra_master_bath'
  get '/concept_designs/ultra_great_room' => 'concept_designs#ultra_great_room', as: 'ultra_great_room'
  get '/concept_designs/ultra_master_suites' => 'concept_designs#ultra_master_suites', as: 'ultra_master_suites'
  get '/concept_designs/ultra_closet' => 'concept_designs#ultra_closet', as: 'ultra_closet'
  get '/concept_designs/ultra_outdoor_living' => 'concept_designs#ultra_outdoor_living', as: 'ultra_outdoor_living'
  get '/concept_designs/before_and_after' => 'concept_designs#before_and_after', as: 'before_and_after'
  get '/concept_designs/exterior' => 'concept_designs#exterior', as: 'concept_exterior'
  get '/concept_designs/interior' => 'concept_designs#interior', as: 'concept_interior'
  get '/concept_designs/floating_ceiling_panels' => 'concept_designs#floating_ceiling_panels', as: 'floating_ceiling_panels'
  resources :services, only: :index
  get '/process' => 'process#index', as: 'process'
  get '/contact' => 'contact#index', as: 'contact'
  get '/about' => 'about#index', as: 'about'
  resources :reviews, only: :index

end
