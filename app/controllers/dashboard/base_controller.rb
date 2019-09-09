# frozen_string_literal: true

module Dashboard
  class BaseController < ApplicationController
    before_action :authenticate_dashboard_staff!
    layout 'dashboard'
    helper CurrentStaffHellper

    def current_staff
      current_dashboard_staff
    end
  end
end
