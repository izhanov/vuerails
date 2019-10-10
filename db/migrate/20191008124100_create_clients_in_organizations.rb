class CreateClientsInOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :clients_in_organizations do |t|
      t.integer :client_id
      t.integer :organization_id
      t.timestamps
    end
  end
end
