'use strict';

/*app.factory('Post', function ($resource, Post) {
  return $resource('https://fiery-fire-3875.firebaseIO.com/posts/:id.json');
});*/

app.factory('Post',
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'posts');

    var posts = $firebase(ref);

    var Post = {
      all: posts,
      create: function (post) {
          return posts.$add(post);
        },
      find: function (postId) {
          return posts.$child(postId);
        },
      delete: function (postId) {
          return posts.$remove(postId);
        }
    };

    return Post;

  });