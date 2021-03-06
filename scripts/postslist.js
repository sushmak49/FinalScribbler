//function called on click of No in delete post modal
function onClose(e){
    document.getElementById('deletePostModal').style.display ='none';
    if (!e)
      e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    //IE8 and Lower
    else {
      e.cancelBubble = true;
    }
}

//Function to display delete modal
function showDeleteDialog(postID) {
    console.log(postID);
    document.getElementById('deletePostModal').style.display='block'; 
    document.getElementById('btn-y').setAttribute('onclick',"deletePost("+postID+")");  
}

//Function to delete a post card
function deletePost(postID) {
        console.log(postID);
        console.log("inside delete");
        var postCard = document.getElementById(postID.id);
        var postCardContainer= document.getElementsByClassName('posts-list-container')[0];
        var postsList = postCardContainer.childNodes;
        console.log(postCardContainer);
        console.log(postsList);
        postsList.forEach(function(value,index) {
            console.log(value.id);
                if (value.id==postID.id) {
                   postCard.parentNode.removeChild(postCard);
                    
                }
            });
        document.getElementById('deletePostModal').style.display='none';
           
}

//Function to construct url to re-direct to post.html page
function showPost(author, heading, content) {
	var url = "../html/post.html?heading=" + encodeURIComponent(heading.innerText) + "&author=" +
	 encodeURIComponent(author.innerText) + "&content=" +encodeURIComponent(content.innerText);
  
  location.href = url; 
}