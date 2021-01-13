import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),
  // set on the component
  backendType: null,
  backendPath: null,
  roleName: null,

  model: null,

  fetchCredentials: task(function*() {
    let { roleName, backendType } = this;
    let newModel = yield this.store.queryRecord('database/credential', {
      backend: backendType,
      secret: roleName,
    });
    this.set('model', newModel);
  }).on('didInsertElement'),
});
