THREE.DiffuseFresnelShader = {

    uniforms: {
        //texture
        texture1: { type: "t", value: null },
    },

    vertexShader: [
                    //texture
                    "varying vec2 vUv;",
                    "varying float tex;",

                    
                    "void main() {",
                        //positon
                        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
                        "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",

                        //texture
                        "vUv = uv;",

                        //output
                        "gl_Position = projectionMatrix * mvPosition;",
                        
                    "}"

    ].join("\n"),

    fragmentShader: [

                    "varying vec2 vUv;",
                    "uniform sampler2D texture1;",

                    "void main( void ) {",

                        "vec4 tex = texture2D( texture1, vUv );",
                        
                        "gl_FragColor = tex;",

                    "}"

    ].join("\n")

};



