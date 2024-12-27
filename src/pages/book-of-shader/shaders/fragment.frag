varying vec2 vUv;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
   vec2 st = gl_FragCoord.xy / u_resolution;
   vec2 mouse = u_mouse / u_resolution;
   vec2 color = st / mouse;
  gl_FragColor = vec4(color, 0.0, 1.0);
}