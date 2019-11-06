class Organization < ApplicationRecord
  has_many :equipment
  has_many :clients_in_organizations
  has_many :clients, through: :clients_in_organizations

  include PgSearch::Model
  pg_search_scope :search_by, against: %i[title iin ogrn], using: {
                                tsearch: { prefix: true },
                              }
  def self.search(query)
    return [] unless query
    search_by("#{query}")
  end

  after_save :broadcast

  def broadcast
    ActionCable.server.broadcast('organizations', { organization: self })
  end
end
