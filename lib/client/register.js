Template.registerHelper("docComments",function(docId){
    if (typeof window['docComments'] !== 'undefined') {
        return Comments.find({doc:docId});     
    }
});

Template.registerHelper("userComments",function(userId){
    if (typeof window['userComments'] !== 'undefined') {
        return Comments.find({owner:userId});     
    }
});