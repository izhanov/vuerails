# frozen_string_literal: true

module Cabinet
  class WelcomeController < Cabinet::BaseController
    def page; end

    def current_user
      render json: { user: "#{current_client.email}" }
    end
  end
end
