class AddFullNameToClients < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :full_name, :string
  end
end
