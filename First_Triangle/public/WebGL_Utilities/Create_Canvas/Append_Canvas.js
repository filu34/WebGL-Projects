// Function that appends Canvas to passed Parent Element.

function Append_Canvas( Parent, Canvas ) {

	// Add <canvas> to a Parent ( <body> by default ). 

	Parent. appendChild ( Canvas );

	if ( !Parent ) {
	
		console. log ( "Couldn't retrive Parent Tag Element to append." )
	};

	if ( !Canvas ) {

		console. log ( "Couldn't retrive <canvas> Element to append." );
	};
};

export default Append_Canvas;
