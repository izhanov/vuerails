# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
    get 'current_user', to: 'welcome#current_user'

    resources :organizations

    resources :clients, only: [:index, :create]
    post "clients/verify_phone"
    post "clients/verify_email"
  end

  namespace :cabinet do
    devise_for :clients, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
    get 'current_user', to: 'welcome#current_user'
  end
end
