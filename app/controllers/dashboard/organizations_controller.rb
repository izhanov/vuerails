# frozen_string_literal: true

module Dashboard
  class OrganizationsController < BaseController
    layout false
    def index
      @organizations = Organization.all
    end

    def create
      @organization = Organization.new(organization_params)
      if @organization.save!
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def update
      @organization = Organization.find(params[:id])
      if @organization
        @organization.update(organization_params)
      else
        render json: { error: "Error!" }
      end
    end

    def edit
      @organization = Organization.find(params[:id])
    end

    def destroy
      if Organization.destroy(params[:id])
        render json: { result: "Deleted" }
      else
        render json: { error: "Failure" }
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

    private

    def organization_params
      params.require(:organization).permit(:title, :kind, :iin, :ogrn)
    end
  end
end
