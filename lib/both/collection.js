Schemas = {};

Comments = new Mongo.Collection('comments');

Schemas.Comments = new SimpleSchema({
    owner: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    doc: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    date: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
              return new Date();
            }
        }
    },
    content:{
        type: String
    }

});

Comments.attachSchema(Schemas.Comments);    