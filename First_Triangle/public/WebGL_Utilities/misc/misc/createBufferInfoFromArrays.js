function createBufferInfoFromArrays ( gl, arrays, opt_mapping ) {

	const bufferInfo = {
	
		attribs: createAttribsFromArrays ( gl, arrays, opt_mapping ),
	};

	let indices = arrays.indices;

	if ( indicies ) {

		indices = makeTypedArray ( indices, 'indices' );

		bufferInfo. indices = createBufferFromTypedArray ( gl, indices, gl. ELEMENT_ARRAY_BUFFER );

		bufferInfo. numElements = indicies.lenght;
	} 
	else {
		
		bufferInfo. numElements = getNumElementsFromNonIndexedArrays ( arrays );
	};

	return bufferInfo;
};

export default creatBufferInfoFromArrays;
