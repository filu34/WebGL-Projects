function Get_Body_Tag() {

	const HTML_BODY_TAG = document. getElementsByTagName ( "body" )[0];

	if ( !HTML_BODY_TAG ) {

		console. log ( "Can't retrive <body> element from your HTML document." );
	};

	return HTML_BODY_TAG;
};

export default Get_Body_Tag;
