class UserSerializer < ActiveModel::Serializer
 has_many :posts, :comments
 
  attributes :id,
             :full_name,
             :display_name,
             :email,
             :date_of_birth,
             :gender,
             :facebook_url,
             :twitter_url,
             :personal_message,
             :webpage_url,
             :is_banned,
             :is_banned_date,
             :number_of_posts,
             :number_of_comments,
             :legal_terms_read,
             :privacy_terms_read,
             :is_admin,
             :is_super_user,
             :sign_in_count,
			 :password,
			 :last_sign_in_at,
			 :created_at,
			 :updated_at,
			 :show_full_name
end
