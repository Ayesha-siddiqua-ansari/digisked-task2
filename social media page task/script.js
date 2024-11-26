// JavaScript to handle actions like clicking on buttons (for future enhancement)
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("You liked this post!");
    });
  });
  
  document.querySelectorAll('.comment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("You commented on this post!");
    });
  });
  
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("You shared this post!");
    });
  });
  