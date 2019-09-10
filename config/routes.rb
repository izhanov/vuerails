# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
  end

  namespace :cabinet do
    devise_for :clients, skip: [:registrations], skip_helpers: true
    root to: 'welcome#page'
  end
end
