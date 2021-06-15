// Set id name attribute for <canvas> element. 

function Set_WebGL_Attribute ( Canvas, id = "id", ID_Name = "WebGLCanvas" ) {

	Canvas. setAttribute ( id, ID_Name );

	if ( Canvas. getAttribute ( id ) !== ID_Name ) {

		console. log ( `Couldn't retrive <canvas> element named "${ ID_Name }".` );
	};
};

export default Set_WebGL_Attribute;
