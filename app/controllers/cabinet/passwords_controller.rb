# frozen_string_literal: true

module Cabinet
  class PasswordsController < Devise::PasswordsController
    layout 'cabinet'
  end
end
