let t = -1;
let frame = -1;

function loop() {
	requestAnimationFrame(loop);
	//Váriaveis
	frame++;
	
	frame % 20 == 0 ? updateConfig() : 0;
	
	if(frame % 2 == 0) {
		t++;
		resizeCanvas();
		canvasTransform("start");
		
		//Eixos
		renderAxes({m: setup.axes});
		
		//Função do textarea
		input.value ? renderFunction(gerarPontos(input.value, scope.value), setup.modeRender) : 0; 
		
		canvasTransform("end");
		
		ctx.fillStyle = "black";
		if(setup.axes.indexOf("x") + 1) ctx.fillText("Passo X: " + setup.passoX, 0, 12);
		if(setup.axes.indexOf("y") + 1) ctx.fillText("Passo Y: " + setup.passoY, 0, 30);
	}
}

loop();