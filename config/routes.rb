# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
    get 'current_user', to: 'welcome#current_user'

    resources :organizations

    resources :staffs
    post "staffs/verify_phone"
    post "staffs/verify_email"
    post "staffs/reset_password"


    resources :clients, only: [:index, :create, :edit, :update, :destroy]
    post "clients/verify_phone"
    post "clients/verify_email"
    post "clients/reset_password"
    post "clients/assign_to_organizations"

    get "/manage/*slug", to: "welcome#page"
  end

  namespace :cabinet do
    devise_for :clients, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
    get 'current_user', to: 'welcome#current_user'
  end
end
