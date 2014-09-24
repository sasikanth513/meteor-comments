Template.hasComments.helpers({
    'comments':function(id){
        return Comments.find({doc:id});
    }
});

Template.commentForm.events({
    'submit #insertComment':function(e,t){
        e.preventDefault();
        var cont=t.find('#content').value;
        comments.insert({owner:Meteor.userId(),doc:this._id,date:Date.now(),content:cont});
    }
});