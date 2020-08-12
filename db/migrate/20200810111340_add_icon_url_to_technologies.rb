class AddIconUrlToTechnologies < ActiveRecord::Migration[5.2]
  def change
    add_column :technologies, :icon_url, :string
  end
end
