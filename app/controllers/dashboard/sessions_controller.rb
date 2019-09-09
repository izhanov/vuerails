# frozen_string_literal: true

module Dashboard
  class SessionsController < Devise::SessionsController
    layout 'dashboard'

    private

    def after_sign_in_path_for(resource)
      dashboard_root_path
    end
  end
end
