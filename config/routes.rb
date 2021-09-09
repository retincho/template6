Rails.application.routes.draw do
  resources :events
  resources :localities
  resources :departments
  resources :provinces
  resources :nationalities
  resources :countries
  root to: 'welcome#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
