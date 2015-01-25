class User < ActiveRecord::Base
  has_many :echoes

  def drafts
    echoes.select{|e| e.is_draft}
  end

  def twitter_history
    echoes.select{|e| e.sent_to_venue.downcase == "twitter"}
  end

end
