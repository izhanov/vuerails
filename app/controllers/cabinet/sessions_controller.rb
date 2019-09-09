# frozen_string_literal: true

module Cabinet
  class SessionsController < Devise::SessionsController
    layout 'cabinet'

    private

    def after_sign_in_path_for(resource)
      cabinet_root_path
    end
  end
end
