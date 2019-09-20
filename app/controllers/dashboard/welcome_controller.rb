# frozen_string_literal: true

module Dashboard
  class WelcomeController < BaseController
    def page; end

    def current_user
      render json: {user: current_staff.email}
    end
  end
end
