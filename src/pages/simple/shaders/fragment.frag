varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv.y, vUv.x, vUv.y, 1.0);
}