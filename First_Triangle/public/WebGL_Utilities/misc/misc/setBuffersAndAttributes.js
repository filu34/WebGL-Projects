function setBuffersAndAttributes ( gl, setters, buffers ) {

	setAttributes ( setters, buffers.attribs );

	if ( buffers. indices ) {

		gl. bindBuffer ( gl. ELEMENT_ARRAY_BUFFER, buffers. indicies );
	};
};

export default setBuffersAndAttributes;
