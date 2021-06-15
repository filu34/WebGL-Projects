function setUniforms ( setters, ...values ) {

	setters = setters. uniformSetters || setters;

	for ( const uniforms of values ) {

		Object. keys ( uniforms ). forEach ( function ( name ) {

			const setter = setters [ name ];

			if ( setter ) {

				setter ( uniforms [ name ] );
			};
		};);
	};			
};

export default setUniforms; 
