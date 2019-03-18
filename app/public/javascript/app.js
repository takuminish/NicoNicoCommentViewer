require("dotenv").config();
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
    constructor(id,text, top, fontSize, fontColor) {
	this.element = document.createElement("span");
	this.element.textContent = text;
        this.element.setAttribute("id",id);
        this.element.setAttribute("class","comment");
	this.element.style.top = `${top}px`;
	this.element.style.fontSize = `${fontSize}px`;
	this.element.style.color = fontColor;
	this.is_alive = true;
    }

    viewFromBody() {
        document.body.appendChild(this.element);
	this.left = window.innerWidth;
        this.width = this.element.offsetWidth;
    }

    Move() {
	this.moveTime = setInterval( () => {
	    this.element.style.left = `${this.left}px`;
	    this.left -= 1;
	    if ((this.width * -1) > this.dx) {
		clearInterval(this.moveTime);
		this.element.parentNode.removeChild(this.element);
		this.is_alive = false;
	    }
	}, 5);
    }
}

window.onload = () => {
    let commentArray = new CommentArray();
    let commentId = 1;
    setInterval( () => {
	let comment2;
	let request = require("request");
        let options = {
	    url : process.env.URL,
	    method: "GET",
	    qs: {
		token: process.env.TOKEN
	    },
	    json: true	   
	}
	request(options, (error, response, body) => {
	    body.forEach( ( b, i, body) =>  {
                let top = Math.floor( Math.random() * (window.innerHeight + 1 - 60) ) + 0 ;
	        comment2 = new Comment(`comment${b["id"]}`,b["text"],top, 50, "white");
	        commentArray.commentAdd(comment2);
                comment2.viewFromBody();
	        comment2.Move();
		commentId = b["id"];
	    });
	});
        commentArray.commentAliveCheck();
    },1000);	
}



