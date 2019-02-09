class CommentManage {
    constructor() {
        this.comments = []
    }

    commentAdd(comment) {
        this.comments.push(comment);
    }

    commentAliveCheck() {
        this.comments.forEach( function( c, i, comments) {
            if (c.is_alive === false) {
		comments.splice(i, 1);
	    }
	});
    }
}

class Comment {
    constructor(text) {
	this.element = document.createElement("h1");
	this.element.textContent = text;
        this.element.setAttribute("id","sdfg");
        this.element.setAttribute("class","comment");
	this.is_alive = true;
    }

    viewFromBody() {
        document.body.appendChild(this.element);
	this.dx = this.element.offsetLeft;
        this.width = this.element.offsetWidth;
    }

    Move() {
	setInterval( () => {
	    this.element.style.left = `${this.dx}px`;
	    this.dx -= 1;
	    if ((this.width * -1) > this.dx) {
		clearInterval(this.moveTime);
		this.element.parentNode.removeChild(this.element);
		this.is_alive = false;
	    }
	}, 10);
    }
}

window.onload = function() {
    let commentManage = new CommentManage();
    
    document.getElementById("button1").onclick = function() {commentMove(commentCreate("comment1"));}
    document.getElementById("button2").onclick = function() {
	let comment2 = new Comment("comment2");
	commentManage.commentAdd(comment2);
	comment2.viewFromBody();
	comment2.Move();
    }
    document.getElementById("button3").onclick = function() {commentManage.commentAliveCheck();}
     
}


