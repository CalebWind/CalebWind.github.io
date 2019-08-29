let header = document.getElementById('page4header')
header.textContent = ('DOM MANIPULATION')












const showComment = () => { 
  const commentVal = document.getElementById('comment-input').value //grab comment from comment-input
  document.getElementById(
    'comment-output' //and then output
  ).innerHTML = `<p><b>Comment:</b> ${commentVal}</p>`
}
document.getElementById('comment-data').addEventListener('click', showComment)
document.getElementById('lastModified').innerHTML = ` Last Modified Date: ${document.lastModified}`
document.getElementById('postName').innerHTML = ` What is the post buttons ID: ${showComment.name}`





















var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

