import Component from 'ember-component';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Component.extend({
  classNames: '',
  selectedUser: [],
  model: [],
  actions: {
    // body
    clearUser() {
      this.set('selectedUser', []);
    },
    selectUser(user) {
      this.set('selectedUser', user);
    }
  }
});
