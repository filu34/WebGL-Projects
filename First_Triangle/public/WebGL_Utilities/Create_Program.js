import Compile_Shader from "./Compile_Shader.js";

// Function that creates program, attach Shaders, and link it together.
// Whole function and naming is self-explanatory. 
 
// First: Load and Compile Shaders.
// Second: Create Program.
// Third: Attach Shaders to Program.
// Fourth: Link Program to Context.

function Create_Program ( Context, VERTEX_SHADER, FRAGMENT_SHADER ) {

	let gl = Context;

	const COMPILED_VERTEX_SHADER = Compile_Shader ( Context, Context. VERTEX_SHADER, VERTEX_SHADER );

	const COMPILED_FRAGMENT_SHADER = Compile_Shader ( Context, Context. FRAGMENT_SHADER, FRAGMENT_SHADER );

	if ( ! COMPILED_VERTEX_SHADER || ! COMPILED_FRAGMENT_SHADER ) {

		console. log ( `Couldn't compile Fragment or Vertex Shader. ${ COMPILED_VERTEX_SHADER, COMPILED_FRAGMENT_SHADER } ` );

		return null;
	};


	const PROGRAM = Context. createProgram();

	if ( ! PROGRAM ) {

		console. log ( `Couldn't create "Program": ${ PROGRAM } ` );

		return null;
	};


	Context. attachShader	( PROGRAM, COMPILED_VERTEX_SHADER );

	Context. attachShader	( PROGRAM, COMPILED_FRAGMENT_SHADER);

	Context. linkProgram		( PROGRAM );

	let Linked = Context. getProgramParameter ( PROGRAM, Context. LINK_STATUS );

	if ( ! Linked ) {

		let Error = Context. getProgramInfoLog ( PROGRAM );

		console. log ( `Failed to link program: ${ Error }.` );

		// Delete Program and Shaders if link couldn't happen.

		Context. deleteProgram	( PROGRAM );
		Context. deleteShader	( COMPILED_FRAGMENT_SHADER );
		Context. deleteShader	( COMPILED_VERTEX_SHADER );

		return null;
	};

	return PROGRAM;
};

export default Create_Program;
