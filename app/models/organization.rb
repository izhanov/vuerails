class Organization < ApplicationRecord
  has_many :equipment
  has_many :clients_in_organizations
  has_many :clients, through: :clients_in_organizations
end
