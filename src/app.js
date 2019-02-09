window.onload = function() {

    document.getElementById("button1").onclick = function() {commentMove(commentCreate("comment1"));}
    document.getElementById("button2").onclick = function() {commentMove(commentCreate("comment2"));}
    document.getElementById("button3").onclick = function() {commentMove(commentCreate("comment3"));}
     
}

function commentMove(comment) {
    let dx = comment.offsetLeft;
    let x = comment.offsetWidth;

    let time = setInterval( function() {
	comment.style.left = dx + "px";
	dx -= 1;
	if ((x * -1) > dx) {
	    clearInterval(time);
	    comment.parentNode.removeChild(comment)
	}
    }, 10);
}

function commentCreate(text) {
    let comment = document.createElement("h1");
    comment.textContent = text;
    comment.setAttribute("id",text);
    comment.setAttribute("class","comment");

    document.body.appendChild(comment);
    return comment;
}


