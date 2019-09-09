# frozen_string_literal: true

module Dashboard
  class SessionsController < Devise::SessionsController
    private

    def after_sign_in_path(resource)
      dashboard_welcome_path
    end
  end
end
