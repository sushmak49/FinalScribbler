var editableMode = false;
var pathString = new Array();
var counter = 0;

var counterForLikes = 0;
//function to display the number of likes
function displayLikes(){

    counterForLikes = parseInt(counterForLikes) + parseInt(1);

    var showCountDiv = document.getElementById("showCount");
    var likeButton = document.getElementById("likeButton");

    likeButton.innerHTML = "Liked";

    if(counterForLikes == 1) {
        showCountDiv.innerHTML= counterForLikes +" person likes this !";
    }
    else {
        showCountDiv.innerHTML= counterForLikes +" people like this !";
    }

}

function updateContentAndHeader(){
    
    counter = counter + 1;

    //Edit is allowed only once for post
    if(!editableMode){

        document.getElementById("heading").style.borderWidth = "1px";
        document.getElementById("heading").style.borderStyle = "solid";
        document.getElementById("heading").style.borderColor = "red";

        document.getElementById("content").style.borderWidth = "1px";
        document.getElementById("content").style.borderStyle = "solid";
        document.getElementById("content").style.borderColor = "red";

        
        document.getElementById("editButton").innerHTML = 'Save<i class="fa fa-save" style="padding-left: 4px;"></i></button>';
        editableMode = true;
        
    }   else {
    
            if(counter === 2){
                var headingDiv =  document.getElementById("heading");
                document.getElementById("heading").innerHTML = "<span>UPDATED:</span>" + headingDiv.innerHTML;


                var contentDiv =  document.getElementById("content");
                document.getElementById("content").innerHTML = "<div>UPDATED:</div>" + contentDiv.innerHTML;
            
            }

            document.getElementById("content").style.border = "none";
            document.getElementById("heading").style.border = "none";

            document.getElementById("editButton").innerHTML = 'Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
            document.getElementById("editButton").disabled = true;
        
    }

   
}

var comments = [];

function addComment(comment) {

    if(comment.value !== '') {

        document.getElementById('comments').style.visibility = 'visible';

        var comment = comment.value;

        comments.unshift(comment);
        $("#comment").val('');
        this.comments.forEach(displayComments);
        $(document).scrollTop($(document).height()); 
    }
}

function displayComments(item, index) {
    var commentsDiv = document.getElementById("comments").innerHTML;
    document.getElementById("comments").innerHTML = '<div class="comment">'+item+'</div>' + '</br>';
    document.getElementById("comments").innerHTML += commentsDiv + '</br>';
    comments.pop();
}

//On page load, this function gets called
window.onload = function () {
    if (pathString.length == 0) {

        if (window.location.search.split('?').length > 1) {

            var params = window.location.search.split('?')[1].split('&');

            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                pathString[key] = value;
            }

        }
    }

    if (pathString["heading"] != null && pathString["author"] != null) {

        var heading = pathString["heading"] ;
        var author  =  pathString["author"];
        var content = pathString["content"];

        document.getElementsByClassName("heading-content")[0].innerHTML = heading;
        document.getElementsByClassName("author-name")[0].innerHTML = author;
        document.getElementsByClassName("post-content")[0].innerHTML = content;
    }

    document.getElementById('comments').style.visibility = 'hidden';

};