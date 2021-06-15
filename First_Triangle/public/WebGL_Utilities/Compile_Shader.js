// Function for Shaders Compilation. 

// First:	Create Shader.
// Second:	Pass Shader Source to Created Shader.
// Third:	Compile Shader.

function Compile_Shader( Context, Shader_Type, Shader_Source ) {

	// Pass which "Shader Type" you want to create in WebGL's Context.

	const Shader = Context. createShader ( Shader_Type );

	if ( Shader == null ) {

		console. log ( `Unable to create shader: ${ Shader }.` );

		return null;
	};

	// Pass "Source" of a shader into WebGl Context to newely created shader of specific type. 

	Context. shaderSource ( Shader, Shader_Source );

	// Compile "Shader Source" together with created shader of specific "Type".

	Context. compileShader ( Shader );

	// Check if succeed.

	const Compilation_Success = Context. getShaderParameter ( Shader, Context. COMPILE_STATUS );

	if ( !Compilation_Success ) {
		
		const Error = Context. getShaderInfoLog ( Shader );

		console. log ( `Failed to compile shader: ${ Error }.` );

		Context.deleteShader ( Shader );

		return null;
	};

	return Shader;
};

export default Compile_Shader;
