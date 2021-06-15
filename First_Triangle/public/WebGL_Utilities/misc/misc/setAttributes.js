function setAttributes ( setters, attribs ) {

	setters = setter.attribSetters || setters;

	Object. keys ( attribs ). forEach ( function ( name ) {
		const setter = setters [ name ];
		
		if ( setter ) {
		
			setter ( attribs [ name ] );
		}
	});
};

export default setAttributes;
