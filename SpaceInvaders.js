var game_status = "ended";
var alien_killed_audio = new Audio('assets/music/invaderkilled.wav');
var shoot = new Audio('assets/music/shoot.wav');

class alien {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.alive = true;
	}

	moveRight() {
		this.x = this.x + 50;
	}

	moveDown() {
		this.y = this.y + 10;
		if(this.y > 460) {
			game_status = "lost";
		}
	}

	moveLeft() {
		this.x = this.x - 10;
	}

	moveRight() {
		this.x = this.x + 10;
	}


	test() {
		alert("czesc");
	}
	kill() {
		this.alive = false;
		alien_killed_audio.play();
	}
}
class bulet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.visible = false;
		this.active = false;
	}
	mouveUp() {
		this.y = this.y - 12;
		this.visible = true;
		if (this.y <= 0) {
			this.kill();
		}
	}
	start(x, y) {
		this.visible = true;
		this.active = true;
		this.x = x;
		this.y = y;
		shoot.play();
	}
	kill() {
		this.visible = false;
		this.active = false;
	}
}

class tank {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.alive = true;
	}

	moveRight() {
		this.x = this.x + 10;
	}


	moveLeft() {
		this.x = this.x - 10;
	}
	
	kill() {
		this.alive = false;
	}
}
