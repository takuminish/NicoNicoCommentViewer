class CommentArray {
    constructor() {
        this.comments = [];
    }

    commentAdd(comment) {
        this.comments.push(comment);
    }

    commentAliveCheck() {
        this.comments.forEach( ( c, i, comments) =>  {
            if (c.is_alive === false) {
		comments.splice(i, 1);
	    }
	});
    }
}

class Comment {
    constructor(id,text) {
	this.element = document.createElement("h1");
	this.element.textContent = text;
        this.element.setAttribute("id",id);
        this.element.setAttribute("class","comment");
	this.is_alive = true;
    }

    viewFromBody() {
        document.body.appendChild(this.element);
	this.dx = this.element.offsetLeft;
        this.width = this.element.offsetWidth;
    }

    Move() {
	this.moveTime = setInterval( () => {
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

window.onload = () => {
    let commentArray = new CommentArray();
    setInterval( () => {
        commentArray.commentAliveCheck();
    },5000);

    document.getElementById("createComment").onclick = () => {
	let comment2 = new Comment("comment2","testだよ");
	commentArray.commentAdd(comment2);
	comment2.viewFromBody();
	comment2.Move();
    }
}


