class CreateEchos < ActiveRecord::Migration
  def change
    create_table :echos do |t|
      t.references :user
      t.string :echo_type
      t.text :user_text
      t.text :selected_string
      t.string :long_url
      t.string :short_url
    end
  end
end

