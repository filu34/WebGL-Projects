console.log("Hello World");

const canvas = document. querySelector ( "#glCanvas" );

const gl = canvas. getContext ( "webgl" );

if ( !gl ) { console. log ( "WebGL not available." ); };

console.log(gl);

function resizeCanvasToDisplaySize ( canvas ) {
	
	const displayWidth  = canvas. clientWidth;

	const displayHeight = canvas. clientHeight;

	const needResize = canvas. width  !== displayWidth ||

			   canvas. height !== displayHeight;

	if ( needResize ) {

		canvas. width  = displayWidth;

		canvas. height = displayHeight;
	}
	
	return needResize;
};

const vertexShaderSource = `
	attribute vec4 a_position;
	
	void main() {
		gl_Position = a_position;
	}
`;

const fragmentShaderSource = `
	precision mediump float;

	uniform vec4 u_color;

	void main() {
		gl_FragColor = u_color;
	}
`;

// Function to CreateShaders.

function createShader ( gl, type, source ) {

	let shader = gl.createShader ( type );

	gl. shaderSource  ( shader, source );

	gl. compileShader ( shader );

	let success = gl. getShaderParameter ( shader, gl. COMPILE_STATUS );

	if ( success ) {
		return shader;
	}

	console. log ( gl. getShaderInfoLog ( shader ) );
	
	gl. deleteShader  ( shader );
}

let vertexShader   = createShader ( gl, gl. VERTEX_SHADER, vertexShaderSource );

let fragmentShader = createShader ( gl, gl. FRAGMENT_SHADER, fragmentShaderSource );


function createProgram ( gl, vertexShader, fragmentShader ) {
	
	let program = gl. createProgram();

	gl. attachShader ( program, vertexShader );

	gl. attachShader ( program, fragmentShader );

	gl. linkProgram  ( program );

	let success = gl. getProgramParameter ( program, gl. LINK_STATUS );

	if ( success ) {
		return program;
	}

	console. log ( gl. getProgramInfoLog ( program ) );

	gl. deleteProgram ( program );
}

let program = createProgram ( gl, vertexShader, fragmentShader );

let positionAttributeLocation = gl. getAttribLocation ( program, "a_position" );

let colorUniformLocation = gl. getUniformLocation ( program, "u_color" );

let positionBuffer = gl. createBuffer ();

gl. bindBuffer ( gl. ARRAY_BUFFER, positionBuffer );

let positions = [
	0,	0,
	0,	0.5,
	0.7,	0,
	0.7,	0.5,
	0.7,	0,
	0,	0.5,
//	0.7,	0,
];

gl. bufferData ( gl. ARRAY_BUFFER, new Float32Array ( positions ), gl. STATIC_DRAW );

function drawScene() {

	resizeCanvasToDisplaySize ( gl. canvas );

	gl. viewport 	( 0, 0, gl. canvas. width, gl. canvas. height );

	gl. clearColor  ( 0, 0, 0, 0 );

	gl. clear	( gl. COLOR_BUFFER_BIT );

	gl. useProgram  ( program );

	gl. enableVertexAttribArray ( positionAttributeLocation );

	gl. bindBuffer  ( gl. ARRAY_BUFFER, positionBuffer );

	let size = 	2;
	let type = 	gl. FLOAT;
	let normalize = false;
	let stride =	0;
	let offset =	0;

	gl. vertexAttribPointer ( positionAttributeLocation, size, type, normalize, stride, offset );

	for ( let ii = 0; ii < 100; ++ii ) {
		
		let random = [];
		// Randomization of +/- Number from -1 to 1;
		for ( let i = 0; i < 4; ++i ) {
			random.push(Math.random() < 0.5 ? -Math.random() : Math.random() );
		}

		console.log ( random );

		setRectangle ( gl, random[0], random[1], random[2], random[3] );

		gl. uniform4f ( colorUniformLocation, Math.random(), Math.random(), Math.random(), Math.random() );

		let primitiveType = gl. TRIANGLES;
		let count  = 6;

		gl. drawArrays ( primitiveType, offset, count );
	};
};

function setRectangle ( gl, x, y, width, height ) {
	
	let x1 = x;
	let x2 = x + width;
	let y1 = y;
	let y2 = y + height;

	gl. bufferData ( gl. ARRAY_BUFFER, new Float32Array ( [

		x1, y1,
		x2, y1,
		x1, y2,
		x1, y2,
		x2, y1,
		x2, y2,

	] ), gl. STATIC_DRAW );
};

drawScene();

