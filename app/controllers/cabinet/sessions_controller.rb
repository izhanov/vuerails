# frozen_string_literal: true

module Cabinet
  class SessionsController < Devise::SessionsController
    layout 'cabinet'
    private

    def after_sign_in_path(resource)
      cabinet_welcome_path
    end
  end
end
