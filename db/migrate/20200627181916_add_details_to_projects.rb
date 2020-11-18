class AddDetailsToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :subtitle, :string
    add_column :projects, :img_url, :string
    add_column :projects, :site_url, :string
  end
end
