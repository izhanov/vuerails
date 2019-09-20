# frozen_string_literal: true

module Dashboard
  # Manage Client entity
  class ClientsController < BaseController
    layout false
    def index
      @clients = Client.all
    end

    def create
      @client = Client.new(client_params.merge(generate_password(9)))
      if @client.save!
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def verify_phone
      if Client.find_by(phone: params[:phone])
        render json: { message: "Already exist!" }
      else
        render json: { message: "Ok" }
      end
    end

    def verify_email
      if Client.find_by(email: params[:email])
        render json: { message: "Already exist!" }
      else
        render json: { message: "Ok" }
      end
    end

    private

    def client_params
      params.require(:client).permit(:full_name, :phone, :email)
    end

    def generate_password(length)
      password = length.times.map { rand(0..9) }.join('')
      { password: password }
    end
  end
end
