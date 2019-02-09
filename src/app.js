
class Comment {
    constructor(text) {
	this.a = document.createElement("h1");
	this.a.textContent = text;
        this.a.setAttribute("id","sdfg");
        this.a.setAttribute("class","comment");
    }

    viewFromBody() {
        document.body.appendChild(this.a);
	this.dx = this.a.offsetLeft;
        this.width = this.a.offsetWidth;
    }

    Move() {
	let self = this
	this.moveTime = setInterval( function() {
	    self.a.style.left = `${self.dx}px`;
	    self.dx -= 1;
	    if ((self.width * -1) > self.dx) {
		clearInterval(this.moveTime);
	    }
	}, 10).this.a.parentNode.removeChild(this.a)
    }
}

window.onload = function() {
   
    document.getElementById("button1").onclick = function() {commentMove(commentCreate("comment1"));}
    document.getElementById("button2").onclick = function() {let comment2 = new Comment("comment2"); comment2.viewFromBody(); comment2.Move();}
    document.getElementById("button3").onclick = function() {commentMove(commentCreate("comment3"));}
     
}


