'use strict';


let co = require('co');


let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/test').then(db => {
  console.log('connection is ok');
  let Model = require('./index');
  let model = new Model(db);

  co(function* () {
  /*  let user = yield model.add('users', {name: 'foo', age: 66});
    console.log(user);

    let user2 = yield model.add('users', {name: 'foo1', age: 166});
    console.log(user);*/

    let updatedUser = yield model.remove('users', {});
    console.log(updatedUser);

  });

  db.close();
  //console.log(user);



}, err => {
  console.log(err);
})
