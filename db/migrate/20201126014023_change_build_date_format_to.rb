class ChangeBuildDateFormatTo < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :build_date
    add_column :projects, :build_date, :date
  end
end
