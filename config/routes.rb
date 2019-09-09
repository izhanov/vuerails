Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs
    get "welcome", to: "welcome#index"
  end

  namespace :cabinet do
    devise_for :clients
    get "welcome", to: "welcome#index"
  end
end
