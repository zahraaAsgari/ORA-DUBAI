// Shared mutable scroll state read inside the WebGL render loop (avoids React re-renders).
export const scrollState = { progress: 0, velocity: 0 };
