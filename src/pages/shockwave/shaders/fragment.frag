precision mediump float;

uniform sampler2D uTexture;  // The image texture
uniform vec2 uPlaneResolution;  // Plane resolution (width, height)
uniform vec2 uImageResolution;  // Image resolution (width, height)
uniform float uTime; // Time value for animation
uniform vec2 uCenter;

const float maxRadius = 0.40;

varying vec2 vUv;

float getOffsetStrength(float newTime, vec2 dir, vec2 aspect) {
    float d = length(dir/aspect) - newTime * maxRadius;
    d *= 1.0 - smoothstep(0.0, 0.05, abs(d));

    d *= smoothstep(0.0, 0.05, newTime);
    d *= 1.0 - smoothstep(0.05, 1.0, newTime);
    return d;
}

void main() {
    // Calculate aspect ratios
    float planeAspect = uPlaneResolution.x / uPlaneResolution.y;
    float imageAspect = uImageResolution.x / uImageResolution.y;

    vec2 uv = vUv;

    // Adjust UV coordinates based on aspect ratio
    if (planeAspect > imageAspect) {
        // Plane is wider than the image
        float scaleFactor = imageAspect / planeAspect;
        uv.y = uv.y * scaleFactor + (1.0 - scaleFactor) / 2.0;
    } else {
        // Plane is taller than the image
        float scaleFactor = planeAspect / imageAspect;
        uv.x = uv.x * scaleFactor + (1.0 - scaleFactor) / 2.0;
    }

    // Aspect for not stretching the shockwave if not square
    vec2 aspect = vec2(1.0, planeAspect);
    vec2 center = vec2(uCenter.x + 0.5, uCenter.y + 0.5);
    vec2 dir = (center - uv);


    float d = getOffsetStrength(uTime, dir, aspect);

    dir = normalize(dir);

  // Sample the texture
    vec4 color = texture2D(uTexture, uv + dir * d);
    gl_FragColor = color;
}