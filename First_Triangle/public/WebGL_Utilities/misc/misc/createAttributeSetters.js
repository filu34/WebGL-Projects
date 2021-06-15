function createAttributeSetters ( gl, program ) {

	const attributeSetters = { };

	function createAttributeSetter ( index ) {

		return function ( b ) {

			if ( b.value ) {

				gl.disableVertexAttribArray ( index );

				switch ( b. value. length ) {

					case 4:
						gl. vertexAttrib4fv ( index, b. value );

					case 3:
						gl. vertexAttrib3fv ( index, b. value );

					case 2:
						gl. vertexAttrib2fv ( index, b. value );

					case 1:
						gl. vertexAttrib1fv ( index, b. value );

					default:
						throw new Error ( "The lenght of a float constant value must be between 1 and 4!" );
				};
			}
			else {
				gl. bindBuffer ( gl. ARRAY_BUFFER, b.buffer );

				gl. enableVertexAttribArray ( index );

				gl. vertexAttribPointer ( 
					index, b. numComponents || b. size, b. type || gl. FLOAT, b. normalize || false, b. stride || 0, b. offset || 0 );
			};
		};
	};

	const numAttribs = gl. getProgramParameter ( program, gl. ACTIVE_ATTRIBUTES );

	for ( let ii = 0; ii < numAttribs; ++ii ) {

		const attribInfo = gl. getActiveAttrib ( program, ii );

		if ( !attribInfo ) {

			break;
		};

		const index = gl. getAttribLocation ( program, attribInfo. name );

		attribSetters [ attribInfo. name ] = createAttribSetter ( index );
	};

	return attribSetters; 
};


export default createAttributeSetters; 
