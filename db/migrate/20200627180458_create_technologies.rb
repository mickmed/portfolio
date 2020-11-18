class CreateTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :technologies do |t|

      t.timestamps
    end
  end
end
