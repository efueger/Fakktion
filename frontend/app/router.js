import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('posts');
    this.route('post', { path: '/posts/:id' });
    this.route('genres');
    this.route('genre', { path: '/genres/:id' });
    this.route('categories');
    this.route('categorie', { path: '/categories/:id' });
    this.route('postingDates');
    this.route('postingDate', { path: '/postingDates/:id' });
    this.route('factTypes');
    this.route('factType', { path: '/factTypes/:id' });

    this.route('about');
    this.route('legal_info');
    this.route('privacy_info');
    this.route('support');
    this.route('about');
});

export default Router;
