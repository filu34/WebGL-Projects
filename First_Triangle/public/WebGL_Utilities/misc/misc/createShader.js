function createShader ( gl, type, source ) {

	let shader = gl. createShader ( type ); 
	
	gl. shaderSource ( shader, source );

	gl. compileShader ( shader );

	let success = gl. getShaderParameter ( shader, gl. COMPILE_STATUS );

	if ( success ) {
		return shader;
	};

	console. log ( gl. getShaderInfoLog ( shader ) );

	gl. deleteShader ( shader );
};

export default createShader;
