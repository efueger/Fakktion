import DS from "ember-data";

export default DS.Model.extend({
  full_name: DS.attr ('string'),
  display_name: DS.attr ('string'),
  password: DS.attr ('string'),
  email: DS.attr ('string'),
  date_of_birth: DS.attr ('date'),
  gender: DS.attr ('string'),
  facebook_url: DS.attr ('string'),
  twitter_url: DS.attr ('string'),
  personal_message: DS.attr ('string'),
  webpage_url: DS.attr ('string'),
  is_banned: DS.attr ('boolean'),
  is_banned_date: DS.attr ('date'),
  number_of_posts: DS.attr ('number'),
  number_of_comments: DS.attr ('number'),
  legal_terms_read: DS.attr ('boolean'),
  privacy_terms_read: DS.attr ('boolean'),
  is_admin: DS.attr ('boolean'),
  is_super_user: DS.attr ('boolean'),
  sign_in_count: DS.attr ('number'),
});
