# frozen_string_literal: true

module Dashboard
  class OrganizationsController < BaseController
    layout false
    def index
      @organizations = Organization.all
    end

    def create
      @organization = Organization.new(organization_params)
      if @organization.save
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def destroy
      if Organization.destroy(params[:id])
        render json: {result: "Deleted" }
      else
        render json: {error: "Failure"}
      end
    end

    private

    def organization_params
      params.require(:organization).permit(:title, :kind, :iin, :ogrn)
    end
  end
end
