const FRAGMENT_SHADER_SOURCE = `

	precision mediump float;

	uniform vec4 u_color;

	void main() {

		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
	}
`;

export default FRAGMENT_SHADER_SOURCE;
