function gerarPontos(func, escopo, detalhe = 2) {
	const left = (-ctx.x - canvas.width * ctx.cx) / ctx.s;
	const right = (-ctx.x + canvas.width * (1-ctx.cx) + 1) / ctx.s;
	
	const pontos = [];
	
	const parser = math.parser();
	
	//percorra a tela no eixo x
	for(let x = left; x <= right; x += detalhe/ctx.s) {
		parser.evaluate("x = " + x);
		parser.evaluate("t = " + t);
		parser.evaluate(escopo);
		parser.evaluate("y = " + func);
		pontos.push({
			x: x,
			y: -parser.get("y")
		});
	}
	
	return pontos;
}