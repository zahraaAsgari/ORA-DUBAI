(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/DubaiScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DubaiScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerformanceMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/MeshReflectorMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scroll-state.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function rand(seed) {
    const x = Math.sin(seed * 9301.17 + 49297.3) * 233280.5;
    return x - Math.floor(x);
}
function makeWindowTexture(seed = 1) {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 256;
    const g = c.getContext("2d");
    g.fillStyle = "#050507";
    g.fillRect(0, 0, 64, 256);
    let s = seed;
    for(let y = 4; y < 256; y += 6){
        for(let x = 3; x < 64; x += 5){
            s++;
            const r = rand(s);
            if (r > 0.55) {
                const warm = rand(s + 0.5) > 0.25;
                g.fillStyle = warm ? `rgba(255,${190 + Math.floor(rand(s + 2) * 50)},120,${0.5 + r * 0.5})` : `rgba(180,210,255,${0.4 + r * 0.4})`;
                g.fillRect(x, y, 3, 3);
            }
        }
    }
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    t.wrapS = t.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    t.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    t.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
    return t;
}
const SUNSET_TOP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1a1030");
const SUNSET_MID = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#c2603a");
const SUNSET_HOR = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffc27a");
const NIGHT_TOP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#02030a");
const NIGHT_MID = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#0b1026");
const NIGHT_HOR = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#3a2a1a");
function nightFactor() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollState"].progress, 0.08, 0.6);
}
function Sky() {
    _s();
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sky.useMemo[mat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                depthWrite: false,
                uniforms: {
                    top: {
                        value: SUNSET_TOP.clone()
                    },
                    mid: {
                        value: SUNSET_MID.clone()
                    },
                    hor: {
                        value: SUNSET_HOR.clone()
                    },
                    sunPos: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.06, -1).normalize()
                    },
                    sunI: {
                        value: 1
                    },
                    time: {
                        value: 0
                    }
                },
                vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
                fragmentShader: `
          uniform vec3 top; uniform vec3 mid; uniform vec3 hor; uniform vec3 sunPos; uniform float sunI; uniform float time;
          varying vec3 vP;
          float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
          void main(){
            float y = vP.y;
            vec3 col = mix(hor, mid, smoothstep(-0.02, 0.12, y));
            col = mix(col, top, smoothstep(0.1, 0.55, y));
            float d = max(dot(vP, sunPos), 0.0);
            col += vec3(1.0,0.65,0.3) * pow(d, 64.0) * 1.6 * sunI;
            col += vec3(1.0,0.5,0.25) * pow(d, 6.0) * 0.35 * sunI;
            // stars at night
            vec2 sp = floor(vP.xz / max(vP.y,0.05) * 220.0);
            float st = step(0.9975, h(sp)) * smoothstep(0.15, 0.5, y) * (1.0 - sunI);
            col += st * (0.6 + 0.4*sin(time*2.0 + h(sp)*30.0));
            if (y < 0.0) col = mix(hor, top*0.4, smoothstep(0.0,-0.2,y));
            gl_FragColor = vec4(col, 1.0);
          }`
            })
    }["Sky.useMemo[mat]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Sky.useFrame": (s)=>{
            const n = nightFactor();
            mat.uniforms.top.value.copy(SUNSET_TOP).lerp(NIGHT_TOP, n);
            mat.uniforms.mid.value.copy(SUNSET_MID).lerp(NIGHT_MID, n);
            mat.uniforms.hor.value.copy(SUNSET_HOR).lerp(NIGHT_HOR, n);
            mat.uniforms.sunI.value = 1 - n;
            mat.uniforms.sunPos.value.set(0, 0.06 - n * 0.12, -1).normalize();
            mat.uniforms.time.value = s.clock.elapsedTime;
        }
    }["Sky.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        material: mat,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
            args: [
                900,
                48,
                24
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/DubaiScene.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Sky, "WeXYOMVN1zeTsjMR/YEejnLwpFA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Sky;
function useTowerMaterial(seed, tint = "#1b1d24") {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTowerMaterial.useMemo": ()=>{
            const tex = makeWindowTexture(seed);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: tint,
                metalness: 0.85,
                roughness: 0.28,
                emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff"),
                emissiveMap: tex,
                emissiveIntensity: 0.3
            });
        }
    }["useTowerMaterial.useMemo"], [
        seed,
        tint
    ]);
}
_s1(useTowerMaterial, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function BurjKhalifa() {
    _s2();
    const mat = useTowerMaterial(7, "#2a2c33");
    const tipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BurjKhalifa.useMemo[tiers]": ()=>{
            const arr = [];
            let y = 0;
            const count = 14;
            for(let i = 0; i < count; i++){
                const h = 9 - i * 0.25;
                const r = 5.2 * (1 - i / (count + 1.5));
                arr.push({
                    y: y + h / 2,
                    h,
                    r,
                    offset: i % 3 * 0.7
                });
                y += h;
            }
            return {
                arr,
                top: y
            };
        }
    }["BurjKhalifa.useMemo[tiers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "BurjKhalifa.useFrame": (s)=>{
            const n = nightFactor();
            mat.emissiveIntensity = 0.25 + n * 1.6;
            if (tipRef.current) {
                const m = tipRef.current.material;
                m.opacity = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(s.clock.elapsedTime * 2.2));
            }
        }
    }["BurjKhalifa.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            0,
            -40
        ],
        children: [
            tiers.arr.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        0,
                        1,
                        2
                    ].map((k)=>{
                        const a = k / 3 * Math.PI * 2 + i * 0.05;
                        const w = t.r * (k === i % 3 ? 0.78 : 1);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            material: mat,
                            position: [
                                Math.cos(a) * w * 0.35,
                                t.y,
                                Math.sin(a) * w * 0.35
                            ],
                            castShadow: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    w * 0.5,
                                    w * 0.55,
                                    t.h,
                                    6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/DubaiScene.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this)
                        }, k, false, {
                            fileName: "[project]/src/components/DubaiScene.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this);
                    })
                }, i, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: mat,
                position: [
                    0,
                    tiers.top + 14,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                    args: [
                        0.15,
                        1.1,
                        28,
                        8
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: tipRef,
                position: [
                    0,
                    tiers.top + 28.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.6,
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/DubaiScene.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ff4a3a",
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/DubaiScene.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0,
                    30,
                    8
                ],
                color: "#f5d77a",
                intensity: 40,
                distance: 80
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s2(BurjKhalifa, "Lx6W0IOqpj4uS33oxyrNK8Vqm6s=", false, function() {
    return [
        useTowerMaterial,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = BurjKhalifa;
function Towers({ count, seed, spread, center, heightScale = 1, tint }) {
    _s3();
    const mat = useTowerMaterial(seed, tint);
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cylRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beacons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Towers.useMemo[beacons]": ()=>[]
    }["Towers.useMemo[beacons]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Towers.useEffect": ()=>{
            const d = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
            let bi = 0, ci = 0;
            beacons.length = 0;
            for(let i = 0; i < count; i++){
                const r1 = rand(seed * 100 + i), r2 = rand(seed * 200 + i), r3 = rand(seed * 300 + i);
                const x = center[0] + (r1 - 0.5) * spread[0];
                const z = center[1] + (r2 - 0.5) * spread[1];
                if (Math.abs(x) < 9 && Math.abs(z + 40) < 9) continue;
                const distFactor = 1 - Math.min(1, Math.hypot(x - center[0], z - center[1]) / (spread[0] * 0.6));
                const h = (8 + Math.pow(r3, 2) * 60 * (0.5 + distFactor)) * heightScale;
                const w = 2.2 + rand(seed + i * 3) * 3.2;
                d.position.set(x, h / 2, z);
                d.rotation.set(0, rand(i + seed) * Math.PI, 0);
                d.scale.set(w, h, w * (0.7 + rand(i * 7) * 0.6));
                d.updateMatrix();
                if (r3 > 0.7 && cylRef.current) cylRef.current.setMatrixAt(ci++, d.matrix);
                else if (boxRef.current) boxRef.current.setMatrixAt(bi++, d.matrix);
                if (h > 40) beacons.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, h + 0.6, z));
            }
            if (boxRef.current) {
                boxRef.current.count = bi;
                boxRef.current.instanceMatrix.needsUpdate = true;
            }
            if (cylRef.current) {
                cylRef.current.count = ci;
                cylRef.current.instanceMatrix.needsUpdate = true;
            }
        }
    }["Towers.useEffect"], [
        count,
        seed,
        spread,
        center,
        heightScale,
        beacons
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Towers.useFrame": (s)=>{
            const n = nightFactor();
            mat.emissiveIntensity = 0.15 + n * 1.4 + Math.sin(s.clock.elapsedTime * 0.7 + seed) * 0.05 * n;
            if (mat.emissiveMap) mat.emissiveMap.offset.y = Math.floor(s.clock.elapsedTime / 6 + seed) * 0.013;
        }
    }["Towers.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: boxRef,
                args: [
                    undefined,
                    undefined,
                    count
                ],
                material: mat,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        1,
                        1,
                        1
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: cylRef,
                args: [
                    undefined,
                    undefined,
                    count
                ],
                material: mat,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                    args: [
                        0.5,
                        0.55,
                        1,
                        10
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Beacons, {
                points: beacons,
                seed: seed
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s3(Towers, "th7DN4aVbdONpjjxYzu4qdQ97h4=", false, function() {
    return [
        useTowerMaterial,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Towers;
function Beacons({ points, seed }) {
    _s4();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [geo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Beacons.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]()
    }["Beacons.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Beacons.useFrame": (s)=>{
            if (ref.current && geo.attributes.position?.count !== points.length && points.length) {
                geo.setFromPoints(points);
            }
            if (ref.current) ref.current.material.opacity = (0.3 + 0.7 * nightFactor()) * (0.5 + 0.5 * Math.sin(s.clock.elapsedTime * 3 + seed));
        }
    }["Beacons.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: ref,
        geometry: geo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            color: "#ff5544",
            size: 1.2,
            transparent: true,
            sizeAttenuation: true,
            depthWrite: false,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        }, void 0, false, {
            fileName: "[project]/src/components/DubaiScene.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s4(Beacons, "LmsERI4oWha+syOOzPq2Ex+gjOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Beacons;
function PalmJumeirah() {
    _s5();
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PalmJumeirah.useMemo[mat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#c9a878",
                roughness: 0.9,
                emissive: "#402a10",
                emissiveIntensity: 0.2
            })
    }["PalmJumeirah.useMemo[mat]"], []);
    const lights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PalmJumeirah.useMemo[lights]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: "#f5d77a",
                transparent: true,
                opacity: 0
            })
    }["PalmJumeirah.useMemo[lights]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "PalmJumeirah.useFrame": ()=>{
            lights.opacity = nightFactor() * 0.9;
        }
    }["PalmJumeirah.useFrame"]);
    const fronds = 16;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            -120,
            0.25,
            40
        ],
        rotation: [
            0,
            0.6,
            0
        ],
        scale: 1.3,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: mat,
                position: [
                    0,
                    0,
                    22
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        5,
                        0.5,
                        34
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            Array.from({
                length: fronds
            }).map((_, i)=>{
                const side = i < fronds / 2 ? -1 : 1;
                const k = i % (fronds / 2);
                const z = 2 - k * 3.4;
                const len = 18 + Math.sin(k / (fronds / 2) * Math.PI) * 12;
                const angle = side * (0.55 + k * 0.05);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        0,
                        z
                    ],
                    rotation: [
                        0,
                        angle + (side > 0 ? 0 : Math.PI),
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            material: mat,
                            position: [
                                len / 2,
                                0,
                                0
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    len,
                                    0.4,
                                    1.4
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/DubaiScene.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DubaiScene.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            material: lights,
                            position: [
                                len / 2,
                                0.3,
                                0
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    len,
                                    0.1,
                                    0.3
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/DubaiScene.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DubaiScene.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: mat,
                position: [
                    0,
                    0,
                    -12
                ],
                rotation: [
                    Math.PI / 2,
                    0,
                    Math.PI
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        34,
                        1.2,
                        6,
                        64,
                        Math.PI * 1.1
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: lights,
                position: [
                    0,
                    0.4,
                    -12
                ],
                rotation: [
                    Math.PI / 2,
                    0,
                    Math.PI
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        34,
                        0.25,
                        4,
                        64,
                        Math.PI * 1.1
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s5(PalmJumeirah, "DTWhsD1y/FASTZrMaG0kgamosRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = PalmJumeirah;
function Water({ quality }) {
    _s6();
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Water.useFrame": ()=>{
            const n = nightFactor();
            if (matRef.current) matRef.current.color.set("#1a2030").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#04060c"), n);
        }
    }["Water.useFrame"]);
    if (quality === "high") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            rotation: [
                -Math.PI / 2,
                0,
                0
            ],
            position: [
                0,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        1400,
                        1400
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshReflectorMaterial"], {
                    blur: [
                        400,
                        120
                    ],
                    resolution: 512,
                    mixBlur: 1,
                    mixStrength: 18,
                    roughness: 0.85,
                    depthScale: 1,
                    minDepthThreshold: 0.4,
                    maxDepthThreshold: 1.4,
                    color: "#0a0d14",
                    metalness: 0.6,
                    mirror: 0.6
                }, void 0, false, {
                    fileName: "[project]/src/components/DubaiScene.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DubaiScene.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    1400,
                    1400
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                ref: matRef,
                color: "#1a2030",
                metalness: 0.95,
                roughness: 0.22
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_s6(Water, "J7Si2RWLSld67a7yoNdbF/Psi2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = Water;
function Ground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            10,
            0.05,
            -60
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                args: [
                    110,
                    48
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#0d0d10",
                roughness: 0.95
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_c6 = Ground;
function Particles({ count }) {
    _s7();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { geo, speeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Particles.useMemo": ()=>{
            const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const p = new Float32Array(count * 3);
            const sp = new Float32Array(count);
            for(let i = 0; i < count; i++){
                p[i * 3] = (rand(i) - 0.5) * 260;
                p[i * 3 + 1] = rand(i + 11) * 90;
                p[i * 3 + 2] = (rand(i + 23) - 0.5) * 260 - 20;
                sp[i] = 0.3 + rand(i + 5) * 0.9;
            }
            g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](p, 3));
            return {
                geo: g,
                speeds: sp
            };
        }
    }["Particles.useMemo"], [
        count
    ]);
    const tex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Particles.useMemo[tex]": ()=>{
            const c = document.createElement("canvas");
            c.width = c.height = 64;
            const g = c.getContext("2d");
            const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
            gr.addColorStop(0, "rgba(255,240,190,1)");
            gr.addColorStop(0.3, "rgba(245,215,122,.6)");
            gr.addColorStop(1, "rgba(212,175,55,0)");
            g.fillStyle = gr;
            g.fillRect(0, 0, 64, 64);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
        }
    }["Particles.useMemo[tex]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Particles.useFrame": (s, dt)=>{
            const pos = geo.attributes.position;
            const arr = pos.array;
            const t = s.clock.elapsedTime;
            for(let i = 0; i < count; i++){
                arr[i * 3 + 1] += speeds[i] * dt * 1.2;
                arr[i * 3] += Math.sin(t * 0.3 + i) * dt * 0.4;
                if (arr[i * 3 + 1] > 95) arr[i * 3 + 1] = 0;
            }
            pos.needsUpdate = true;
            const intro = Math.min(1, t / 3);
            const visible = Math.floor(count * (0.35 + 0.65 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollState"].progress) * intro);
            geo.setDrawRange(0, visible);
            if (ref.current) {
                const m = ref.current.material;
                m.size = 0.9 + nightFactor() * 0.6;
            }
        }
    }["Particles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: ref,
        geometry: geo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            map: tex,
            size: 1,
            transparent: true,
            depthWrite: false,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
            sizeAttenuation: true,
            opacity: 0.9
        }, void 0, false, {
            fileName: "[project]/src/components/DubaiScene.tsx",
            lineNumber: 362,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
_s7(Particles, "Pq9dyfGU6JKDwMFZ7d8MfRKMAhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = Particles;
const CAM_PATH = [
    {
        p: [
            0,
            22,
            150
        ],
        t: [
            0,
            45,
            -40
        ]
    },
    {
        p: [
            30,
            30,
            80
        ],
        t: [
            -5,
            55,
            -40
        ]
    },
    {
        p: [
            -25,
            18,
            30
        ],
        t: [
            0,
            70,
            -40
        ]
    },
    {
        p: [
            -60,
            45,
            60
        ],
        t: [
            -110,
            0,
            40
        ]
    },
    {
        p: [
            40,
            70,
            50
        ],
        t: [
            0,
            40,
            -50
        ]
    },
    {
        p: [
            70,
            35,
            -10
        ],
        t: [
            0,
            60,
            -40
        ]
    },
    {
        p: [
            0,
            90,
            140
        ],
        t: [
            0,
            40,
            -40
        ]
    }
];
function CameraRig() {
    _s8();
    const { camera, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraRig.useMemo[pos]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 10, 220)
    }["CameraRig.useMemo[pos]"], []);
    const tgt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraRig.useMemo[tgt]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 40, -40)
    }["CameraRig.useMemo[tgt]"], []);
    const tmpP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraRig.useMemo[tmpP]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["CameraRig.useMemo[tmpP]"], []);
    const tmpT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraRig.useMemo[tmpT]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["CameraRig.useMemo[tmpT]"], []);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraRig.useEffect": ()=>{
            const onMove = {
                "CameraRig.useEffect.onMove": (e)=>{
                    mouse.current.x = e.clientX / window.innerWidth - 0.5;
                    mouse.current.y = e.clientY / window.innerHeight - 0.5;
                }
            }["CameraRig.useEffect.onMove"];
            window.addEventListener("pointermove", onMove);
            return ({
                "CameraRig.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["CameraRig.useEffect"];
        }
    }["CameraRig.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "CameraRig.useFrame": (s, dt)=>{
            const pr = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollState"].progress * (CAM_PATH.length - 1);
            const i = Math.min(CAM_PATH.length - 2, Math.floor(pr));
            const f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smootherstep(pr - i, 0, 1);
            tmpP.fromArray(CAM_PATH[i].p).lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...CAM_PATH[i + 1].p), f);
            tmpT.fromArray(CAM_PATH[i].t).lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...CAM_PATH[i + 1].t), f);
            // intro push-in
            const intro = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smootherstep(Math.min(1, s.clock.elapsedTime / 4.5), 0, 1);
            tmpP.z += (1 - intro) * 90;
            tmpP.y -= (1 - intro) * 10;
            tmpP.x += mouse.current.x * 6;
            tmpP.y += -mouse.current.y * 3;
            const k = 1 - Math.pow(0.04, dt);
            pos.lerp(tmpP, k);
            tgt.lerp(tmpT, k);
            camera.position.copy(pos);
            camera.lookAt(tgt);
            const n = nightFactor();
            if (scene.fog instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"]) {
                scene.fog.color.set("#8a5a3c").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#07080f"), n);
                scene.fog.density = 0.0045 - n * 0.0015;
            }
        }
    }["CameraRig.useFrame"]);
    return null;
}
_s8(CameraRig, "SeZ3Vb6z695xIIHzqX6ciQvjKzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = CameraRig;
function Lights() {
    _s9();
    const sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hemi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Lights.useFrame": ()=>{
            const n = nightFactor();
            if (sun.current) {
                sun.current.intensity = 2.4 * (1 - n) + 0.15;
                sun.current.color.set("#ffb27a").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#6f7cff"), n);
            }
            if (hemi.current) hemi.current.intensity = 0.6 - n * 0.4;
        }
    }["Lights.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                ref: hemi,
                args: [
                    "#ffcf9a",
                    "#0b0b0d",
                    0.6
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                ref: sun,
                position: [
                    0,
                    20,
                    -300
                ],
                intensity: 2.4,
                color: "#ffb27a"
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    80,
                    60,
                    120
                ],
                intensity: 0.25,
                color: "#9ab0ff"
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s9(Lights, "1c+g/y/yyDGbc8jnHWHZ7UnQC78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = Lights;
function World({ quality }) {
    const mult = quality === "high" ? 1 : quality === "medium" ? 0.6 : 0.35;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fogExp2", {
                attach: "fog",
                args: [
                    "#8a5a3c",
                    0.0045
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sky, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lights, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraRig, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Water, {
                quality: quality
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ground, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BurjKhalifa, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Towers, {
                count: Math.floor(140 * mult),
                seed: 3,
                spread: [
                    150,
                    90
                ],
                center: [
                    10,
                    -60
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Towers, {
                count: Math.floor(70 * mult),
                seed: 9,
                spread: [
                    50,
                    120
                ],
                center: [
                    110,
                    10
                ],
                heightScale: 1.25,
                tint: "#1f2330"
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Towers, {
                count: Math.floor(40 * mult),
                seed: 13,
                spread: [
                    260,
                    30
                ],
                center: [
                    0,
                    -170
                ],
                heightScale: 0.6
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PalmJumeirah, {}, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Particles, {
                count: Math.floor(1400 * mult)
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c10 = World;
function DubaiScene() {
    _s10();
    const [quality, setQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("high");
    const [dpr, setDpr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DubaiScene.useEffect": ()=>{
            const w = window.innerWidth;
            const cores = navigator.hardwareConcurrency || 4;
            if (w < 768 || cores <= 4) {
                setQuality("low");
                setDpr(1);
            } else if (w < 1200) {
                setQuality("medium");
                setDpr(1.25);
            }
        }
    }["DubaiScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                dpr: dpr,
                camera: {
                    fov: 45,
                    near: 0.5,
                    far: 2000,
                    position: [
                        0,
                        10,
                        240
                    ]
                },
                gl: {
                    antialias: quality !== "low",
                    powerPreference: "high-performance",
                    toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceMonitor"], {
                        onDecline: ()=>{
                            setDpr(1);
                            setQuality((q)=>q === "high" ? "medium" : "low");
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DubaiScene.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(World, {
                        quality: quality
                    }, void 0, false, {
                        fileName: "[project]/src/components/DubaiScene.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,7,0.75)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070707]/80 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/DubaiScene.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DubaiScene.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s10(DubaiScene, "wQ0lfeXaAbA6chLloLkXqrXXLh0=");
_c11 = DubaiScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Sky");
__turbopack_context__.k.register(_c1, "BurjKhalifa");
__turbopack_context__.k.register(_c2, "Towers");
__turbopack_context__.k.register(_c3, "Beacons");
__turbopack_context__.k.register(_c4, "PalmJumeirah");
__turbopack_context__.k.register(_c5, "Water");
__turbopack_context__.k.register(_c6, "Ground");
__turbopack_context__.k.register(_c7, "Particles");
__turbopack_context__.k.register(_c8, "CameraRig");
__turbopack_context__.k.register(_c9, "Lights");
__turbopack_context__.k.register(_c10, "World");
__turbopack_context__.k.register(_c11, "DubaiScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DubaiScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/DubaiScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_DubaiScene_tsx_0flnmox._.js.map