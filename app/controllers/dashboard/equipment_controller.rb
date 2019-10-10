# frozen_string_literal: true

module Dashboard
  class EquipmentController < BaseController
    layout false
    def index
      @equipment = Equipment.all
    end

    def edit
      @equipment = Equipment.find(params[:id])
    end

    def update
      @equipment = Equipment.find(params[:id])
      if @equipment
        @equipment.update(equipment_params)
      else
        render json: { error: "Error!" }
      end
    end

    def create
      @equipment = Equipment.new(equipment_params)
      if @equipment.save!
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def destroy
      if Equipment.find(params[:id]).destroy
        render json: { result: "Destoyed"}
      else
        render json: {result: "error"}
      end
    end

    private

    def equipment_params
      params.require(:equipment).permit(
        :title, :kind, :serial_number,
        :organization_id
      )
    end
  end
end
