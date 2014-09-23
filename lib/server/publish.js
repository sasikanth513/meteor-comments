Meteor.publish("userComments",function(_id){
    return Comments.find({owner:_id});
});

Meteor.publish("docComments",function(docId){
    return Comments.find({doc:docId});
});
