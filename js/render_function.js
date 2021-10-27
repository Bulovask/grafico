function renderFunction(points = [], modo = 0) {
	//Desenhe
	ctx.strokeStyle = setup.colorFunction;
	ctx.fillStyle = setup.colorFunction;
	ctx.lineWidth = 1 / ctx.s;
	ctx.beginPath();
	if(modo == 0) {
		for(i in points) {
			ctx.lineTo(points[i].x, points[i].y);
		}
	ctx.stroke();
	}
	else if(modo == 1) {
		for(i in points) {
			ctx.fillRect(points[i].x, points[i].y, 1 / ctx.s, 1 / ctx.s);
		}
	}
}

function renderAxes(opt = {}) {
	const left = (-ctx.x - canvas.width * ctx.cx) / ctx.s;
	const right = (-ctx.x + canvas.width * (1-ctx.cx)) / ctx.s;
	const top = (-ctx.y - canvas.height * ctx.cy) / ctx.s;
	const bottom = (-ctx.y + canvas.height * (1-ctx.cy)) / ctx.s
	
	const maxTrace = 15;
	
	ctx.strokeStyle = opt.color || "black";
	ctx.lineWidth = 1 / ctx.s;
	
	//Eixo X
	if(opt.m?.indexOf("x") + 1 || !opt.m) {
		ctx.beginPath();
		ctx.moveTo(left, 0);
		ctx.lineTo(right, 0);
		ctx.stroke();
		
		//traços positivos
		let d = maxTrace > right - left ? 1 : (right - left) / maxTrace;
		for(let x = 0; x < right; x += opt.px || d) {
			ctx.beginPath();
			ctx.moveTo(x, 3/ctx.s);
			ctx.lineTo(x, -3/ctx.s);
			ctx.stroke();
		}
		//tracos negativos
		for(let x = opt.px || -d; x > left; x -= opt.px || d) {
			ctx.beginPath();
			ctx.moveTo(x, 3/ctx.s);
			ctx.lineTo(x, -3/ctx.s);
			ctx.stroke();
		}
		
		setup.passoX = d;
	}
	
	//Eixo Y
	if(opt.m?.indexOf("y") + 1 || !opt.m) {
		ctx.beginPath();
		ctx.moveTo(0, top);
		ctx.lineTo(0, bottom);
		ctx.stroke();
		
		//traços positivos
		let d = maxTrace > bottom - top ? 1 : (bottom - top) / maxTrace;
		
		for(let y = 0; y < bottom; y += opt.py || d) {
			ctx.beginPath();
			ctx.moveTo(3/ctx.s, y);
			ctx.lineTo(-3/ctx.s, y);
			ctx.stroke();
		}
		//tracos negativos
		for(let y = opt.py || -d; y > top; y -= opt.py || d) {
			ctx.beginPath();
			ctx.moveTo(3/ctx.s, y);
			ctx.lineTo(-3/ctx.s, y);
			ctx.stroke();
		}
		
		setup.passoY = d;
	}
}