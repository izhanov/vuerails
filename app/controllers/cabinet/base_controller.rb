# frozen_string_literal: true

module Cabinet
  class BaseController < ApplicationController
    before_action :authenticate_cabinet_client!
    layout 'cabinet'
    helper CurrentClientHellper

    def current_client
      current_cabinet_client
    end
  end
end
