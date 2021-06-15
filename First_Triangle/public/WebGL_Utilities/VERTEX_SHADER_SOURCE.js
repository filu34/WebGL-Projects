const VERTEX_SHADER_SOURCE = `

	attribute vec4 a_Position;

	void main() {

		gl_Position = a_Position;
	}
`;

export default VERTEX_SHADER_SOURCE;
