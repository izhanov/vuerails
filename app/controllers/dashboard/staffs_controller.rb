# frozen_string_literal: true

module Dashboard
  # Manage Staff entity
  class StaffsController < BaseController
    layout false
    def index
      @staffs = Staff.all.where.not(id: current_staff.id)
    end

    def edit
      @staff = Staff.find(params[:id])
    end

    def update
      @staff = Staff.find(params[:id])
      if @staff
        @staff.update(staff_params)
      else
        render json: { error: "Error!" }
      end
    end

    def create
      @staff = Staff.new(staff_params.merge(generate_password(9)))
      if @staff.save!
        render json: { result: "Ok" }
      else
        render json: { result: "Error" }
      end
    end

    def destroy
      if Staff.find(params[:id]).destroy
        render json: { result: "Destoyed" }
      else
        render json: { result: "error" }
      end
    end

    def verify_phone
      if Staff.find_by(phone: params[:phone])
        render json: { message: "Already exist!" }
      else
        render json: { message: "Ok" }
      end
    end

    def verify_email
      if Staff.find_by(email: params[:email])
        render json: { message: "Already exist!" }
      else
        render json: { message: "Ok" }
      end
    end

    private

    def staff_params
      params.require(:staff).permit(:full_name, :phone, :email)
    end

    def generate_password(length)
      password = length.times.map { rand(0..9) }.join('')
      { password: password }
    end
  end
end
