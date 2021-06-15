import Imports from "../Imports.js";

// Unpack necessary objects from Imports.

let { Create_Canvas, Create_3D_Context } = Imports; 


// Initialization function that suppose to generate and create <canvas>
// tag element in HTML <body>. Also create, compile and load provided
// Shaders to WebGL Program.

function Initialization() {

	const Canvas = Create_Canvas();

	const Context = Create_3D_Context();

};
