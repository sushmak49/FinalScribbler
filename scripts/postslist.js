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

function showDeleteDialog(postID) {
    console.log(postID);
    document.getElementById('deletePostModal').style.display='block'; 
    document.getElementById('btn-y').setAttribute('onclick',"deletePost("+postID+")");  
}

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