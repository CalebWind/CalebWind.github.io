let header = document.getElementById('page4header')
header.textContent = ('DOM MANIPULATION')



const showComment = () => { 
  const commentVal = document.getElementById('comment-input').value //grab comment from comment-input
  document.getElementById('comment-output').innerHTML = `<p><b>Comment:</b> ${commentVal}</p>`
}
document.getElementById('comment-data').addEventListener('click', showComment)
document.getElementById('lastModified').innerHTML = ` Last Modified Date: ${document.lastModified}`
document.getElementById('postName').innerHTML = ` What is the post buttons ID: ${showComment.name}`



