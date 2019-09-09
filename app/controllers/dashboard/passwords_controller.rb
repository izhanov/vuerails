# frozen_string_literal: true

module Dashboard
  class PasswordsController < Devise::PasswordsController
    layout 'dashboard'
  end
end
