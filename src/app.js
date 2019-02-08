window.onload = function() {

    document.getElementById("button1").onclick = function() {commentMove("comment1");}
    document.getElementById("button2").onclick = function() {commentMove("comment2");}
    document.getElementById("button3").onclick = function() {commentMove("comment3");}
     
}

    function commentMove(Id) {
        let comment = document.getElementById(Id);
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
