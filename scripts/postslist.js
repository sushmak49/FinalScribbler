function onClose(e){
    console.log("no clicked");
    
    document.getElementById('deletePostModal').style.display ='none';
    e.stopPropagation();
}