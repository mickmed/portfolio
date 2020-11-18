class AddColumnToTechnology < ActiveRecord::Migration[5.2]
  def change
    add_column :technologies, :name, :string
  end
end
