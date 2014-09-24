Add Comments to the Doc
==========================

To get the comments of a document

    {{docComments _id}}
    
    this return the cursor of all the comments of a particular document    
    
To get the all comments of a user

    {{userComments _id}}
    
    this return the cursor of all the comments of a particular user    
    
To add comments form to the page

    {{> commentForm _id:_id}}
    
    This will add the form with a textarea
    
To display comments of a post

    {{> comments _id=_id}}
    
    To display comments of a particular document
    
    
