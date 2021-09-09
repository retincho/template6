class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :start
      t.datetime :end
      t.string :url
      t.string :classNames
      t.string :backgroundColor
      t.string :borderColor
      t.string :textColor

      t.timestamps
    end
  end
end
