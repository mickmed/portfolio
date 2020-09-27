class AddBuildDateToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :build_date, :string
  end
end
