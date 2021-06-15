// Function that tries to set one of WebGL Context from list of their names.

function Create_3D_Context( Canvas ) {

	const NAMES = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl", "webgl2" ];

	let Context = null; 

	for ( let ii = 0; ii < NAMES.length; ++ii ) {
		try {
			Context = Canvas. getContext ( NAMES[ii] );
		} catch(e) {}

		if ( Context ) {

			break;
		};	
	};

	if ( !Context ) {

		console. log ( "Your browser doesn't support WebGL. \n Please enable it, change browser, or look for errors." );
	};


	return Context;
};

export default Create_3D_Context;
