import Create_Canvas_Imports from "./Create_Canvas/Create_Canvas_Imports.js";

// Unpack Imports.
let { 
	Get_Body_Tag, 
	Create_Canvas_Element, 
	Append_Canvas,
	Set_WebGL_Attribute 
} = Create_Canvas_Imports;


// Function that generates <canvas> html element inside document for you,
// and sets id attribute to "WebGLCanvas" name. 

function Create_Canvas() {

	// Get <body> tag from your basic HTML document.

	const Body_Tag = Get_Body_Tag();
		
	
	// Create <canvas> element in your document.

	const Canvas = Create_Canvas_Element(); 

	console.log(Canvas);
	console.log(Body_Tag);

	// Add <canvas> element to <body> element. 

	Append_Canvas ( Body_Tag, Canvas );


	// Now set id attribute named "WebGLCanvas" in <canvas>

	Set_WebGL_Attribute ( Canvas );

	return Canvas;
};

// Your end result document should now have <canvas id="WebGLCanvas"> inside your <body> tag.
// Export it to your Import Manager. 

export default Create_Canvas;
