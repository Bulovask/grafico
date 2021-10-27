const canvas = document.getElementById("main-graph");
const scope = document.getElementById("scope");
const input = document.getElementById("input"); 
const ctx = canvas.getContext("2d");

function $id(id) {return document.getElementById(id)}

const setup = {
	axes: "xy",
	colorFunction: "#000",
	modeRender: 0
}

function resizeCanvas() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
}

//POSIÇÃO E ESCALA DO CONTEXTO DE RENDERIZAÇÃO
ctx.cx = 1/2;
ctx.cy = 1/2;
ctx.x = 0;
ctx.y = 0;
ctx.s = 10;

function updateConfig() {
	ctx.cx = Number($id("cx").value);
	ctx.cy = Number($id("cy").value);
	ctx.x = Number($id("x").value);
	ctx.y = Number($id("y").value);
	ctx.s = $id("scale").value;
	setup.axes = $id("axes").value;
	setup.colorFunction = $id("colorFunction").value;
	setup.modeRender = $id("modeRender").value;
}

function canvasTransform(m = "start") {
	const x = ctx.cx * canvas.width + ctx.x;
	const y = ctx.cy * canvas.height + ctx.y;
	if(m == "start") {
		if(ctx.s < 0.1) ctx.s = 0.1;
		ctx.translate(x, y);
		ctx.scale(ctx.s, ctx.s);
	}
	else if(m == "end") {
		ctx.resetTransform();
	}
}