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
