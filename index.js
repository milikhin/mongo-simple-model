'use strict';

class model {
  constructor(db) {
    this.db = db;
    console.log('model is created');
  }

  get(collection, query) {
    return this.db.collection(collection).find(query).toArray();
  }

  add(collection, query) {
    return this.db.collection(collection).insert(query);
  }

  //update just fields, which are in 'update'
  set(collection, query, update, options) {
    return this.db.collection(collection).update(query, {$set: update}, options);
  }

  //replace whole doc with 'update' document
  update(collection, query, update, options) {
    return this.db.collection(collection).update(query, update, options);
  }

  remove(collection, query, options) {
    return this.db.collection(collection).remove(query, options);
  }

}


module.exports = model;
