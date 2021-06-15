// Function responsible for creating <canvas> tag element. 

function Create_Canvas_Element() {

	// Create Canvas.
	//
	const Canvas = document. createElement ( "canvas");


	// Check if Canvas was created. 
	//
	if ( !Canvas ) {

		console. log ( "Couldn't create <canvas> element." );
	};

	return Canvas;
};

export default Create_Canvas_Element;
