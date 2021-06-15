function initialize_Vertex_Buffers ( gl, model, dimensions = "3D" ) {

	let vertices = new Float32Array ( model );

	let number_of_vertices = model.length / 2;

	if ( dimensions === "2D" ) {

		dimensions = 2;
	};

	if ( dimensions === "3D" ) {
	
		dimensions = 3;
	};


	let vertex_Buffer = gl. createBuffer();

	if ( !vertex_Buffer ) {

		console. log ( "Failed to create the buffer object." );
		return -1;
	};

	gl. bindBuffer ( gl. ARRAY_BUFFER, vertex_Buffer );

	gl. bufferData ( gl. ARRAY_BUFFER, vertices, gl. STATIC_DRAW );

	let a_Position = gl. getAttribLocation ( gl. program, "a_Position" );

	if ( a_Position < 0 ) {

		console. log ( "Failed to get the storage location of a_Position" );
		return -1;
	};

	gl. vertexAttribPointer ( a_Position, dimensions, gl. FLOAT, false, 0, 0 );

	gl. enableVertexAttribArray ( a_Position );

	return number_of_vertices;
};

export default initialize_Vertex_Buffers;
