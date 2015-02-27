// var objects = {};
//
// Objects = new Meteor.Collection("Objects", {
//   transform: function (doc) {
//     return _.extend(Object.create(object), doc);
//   }
// });
//
// var ownsDocument = function(userId, doc) {
//   return doc && doc.userId === userId;
// };
//
// Objects.allow({
//   insert: ownsDocument,
//   update: ownsDocument,
//   remove: ownsDocument,
// });
