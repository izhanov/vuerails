class OrganizationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'organizations'
  end

  def organizations
    stream_from "organizations"
  end
end
