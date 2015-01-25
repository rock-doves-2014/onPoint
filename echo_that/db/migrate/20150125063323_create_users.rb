class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :twitter_acct
      t.string :facebook_acct
      t.boolean :twitter_on
      t.boolean :facebook_on
      t.text :drafts
      t.text :history
    end
  end
end
