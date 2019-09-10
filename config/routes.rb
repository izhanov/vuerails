# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'

  namespace :dashboard do
    devise_for :staffs, skip: [:registrations]
    root to: 'welcome#page'
  end

  namespace :cabinet do
    devise_for :clients, skip: [:registrations]
    root to: 'welcome#page'
  end
end
