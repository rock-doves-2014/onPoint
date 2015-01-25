class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :twitter_acct
      t.string :facebook_acct
      t.boolean :twitter_on
      t.boolean :facebook_on
      t.integer :facebook_char_floor, null: false, default: 0
      t.boolean :always_link, null: false, default: true

      t.timestamps
    end
  end
end
