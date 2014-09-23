Template.hasComments.helpers({
    'comments':function(id){
        return Comments.find({doc:id});
    }
});