function setGeometry ( gl, geometry ) {

	gl. bufferData (

		gl. ARRAY_BUFFER,
		
		new Float32Array ( geometry ),

		gl. STATIC_DRAW
	);
};

export default setGeometry;
