import Initialization from "./WebGL_Utilities/Initialization.js";

function main () {

	const { Canvas, Context, Program } = Initialization(); 

	let gl = Context;	

	const Position_Attribute_Location = gl. getAttribLocation ( Program, "a_Position" ); 

	const Position_Buffer = gl. createBuffer();

	gl. bindBuffer ( gl. ARRAY_BUFFER , Position_Buffer );

	const positions = [
	    0, 0,
	    0, 0.5,
	    0.7, 0,
	];

	gl. bufferData ( gl. ARRAY_BUFFER, new Float32Array ( positions ), gl. STATIC_DRAW );

	gl. viewport ( 0, 0, gl.canvas.width, gl.canvas.height );

	gl. clearColor ( 0, 0, 0, 0 );
	gl. clear ( gl. COLOR_BUFFER_BIT );

	gl. useProgram ( Program );

	gl.program = Program;

	console.log( gl.program );

	gl. enableVertexAttribArray ( Position_Attribute_Location );

	gl. bindBuffer ( gl. ARRAY_BUFFER, Position_Buffer );

	gl. vertexAttribPointer ( Position_Attribute_Location, 2, gl.FLOAT, false, 0, 0 );

	gl. drawArrays ( gl.TRIANGLES, 0, 3 );
};

main();
