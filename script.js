function addComment() {
    var commentText = document.getElementById('comment-text').value;
    if (commentText.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    var commentList = document.getElementById('comment-list');
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = '<p>' + commentText + '</p>';
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
        commentElement.remove();
    };
    
    commentElement.appendChild(deleteButton);
    
    commentList.appendChild(commentElement);

    // Clear textarea
    document.getElementById('comment-text').value = '';
}
