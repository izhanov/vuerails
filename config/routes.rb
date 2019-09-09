Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs
    root to: "welcome#page"
  end

  namespace :cabinet do
    devise_for :clients
    root to: "welcome#page"
  end
end
