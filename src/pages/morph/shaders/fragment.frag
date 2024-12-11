uniform float uProgress;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
varying vec2 vUv;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

void main() {
   float intensity = sin(3.1415926 * uProgress);
   float distortion = noise(vUv * 10.0) * 1. * intensity;

   vec2 distortedPosition = fract(
      vec2(intensity*0.5, 0.) +
      vec2(vUv.x + distortion, vUv.y)
   );
   vec4 color1 = texture2D(uTexture1, distortedPosition);
   vec4 color2 = texture2D(uTexture2, distortedPosition);
  gl_FragColor = mix(color1, color2, uProgress);
}