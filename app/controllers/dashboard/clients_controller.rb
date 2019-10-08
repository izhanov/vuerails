# frozen_string_literal: true

module Dashboard
  # Manage Client entity
  class ClientsController < BaseController
    layout false
    def index
      @clients = Client.all
    end

    def edit
      @client = Client.find(params[:id])
    end

    def update
      @client = Client.find(params[:id])
      if @client
        @client.update(client_params)
      else
        render json: { error: "Error!" }
      end
    end

    def create
      @client = Client.new(client_params.merge(generate_password(9)))
      if @client.save!
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def assign_to_organizations
      organizations = params[:resources][:organization]
      client_id = params[:resources][:client_id]
      organizations_id = organizations.map {|el| el[:id]}
      organizations_id.each do |id|
        ClientsInOrganization.create(client_id: client_id, organization_id: id)
      end
    end

    def destroy
      if Client.find(params[:id]).destroy
        render json: { result: "Destoyed"}
      else
        render json: {result: "error"}
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

    def reset_password
      if Client.find(params[:id]).update!(password: generate_password(9)[:password])
        render json: { message: "Password reseted" }
      else
        render json: { message: "Error" }
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
