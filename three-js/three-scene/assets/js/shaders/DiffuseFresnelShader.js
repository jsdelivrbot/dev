THREE.DiffuseFresnelShader = {

    uniforms: {
        //fresnel
        //-----------------//
        mRefractionRatio : { type: "f", value: 1.02 },
        //angle falloff
        mFresnelBias : { type: "f", value: 0.2 },
        //sharpness of angle
        mFresnelPower : { type: "f", value: 1.5 },
        //brightness
        mFresnelScale : { type: "f", value: 5.0 },

        // mRefractionRatio : { type: "f", value: 1.02 },
        // mFresnelBias : { type: "f", value: 0.1 },
        // mFresnelPower : { type: "f", value: 2.0 },
        // mFresnelScale : { type: "f", value: 1.0 },

        //texture
        texture1: { type: "t", value: null },
    },

    vertexShader: [
                    //fresnel
                    "uniform float mRefractionRatio;",
                    "uniform float mFresnelBias;",
                    "uniform float mFresnelScale;",
                    "uniform float mFresnelPower;",
                    
                    "varying vec3 vRefract[3];",
                    "varying float vReflectionFactor;",
                    //texture
                    "varying vec2 vUv;",
                    //"varying float tex;",

                    
                    "void main() {",
                        //positon
                        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
                        "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",

                        //fresnel
                        "vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );",
                        
                        "vec3 I = worldPosition.xyz - cameraPosition;",
                        "vRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );",
                        "vRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );",
                        "vRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );",
                        "vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );",

                        //texture
                        "vUv = uv;",

                        //output
                        "gl_Position = projectionMatrix * mvPosition;",
                        
                    "}"

    ].join("\n"),

    fragmentShader: [
                    //fresnel
                    //"varying vec3 vRefract[3];",
                    "varying float vReflectionFactor;",
                    //texture
                    "uniform sampler2D texture1;",
                    "varying vec2 vUv;",


                    "void main( void ) {",

                        //fresnel
                        "vec4 refractedColor = vec4( 255, 255, 255, 1.0 );",

                        // "refractedColor.r = 255",

                        //          "refractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;",
                        //          "refractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;",
                        //          "refractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;",

                        //texture
                        "vec4 tex = texture2D( texture1, vUv );",
                        //create dim version
                        "vec4 texDim = tex * 0.1;",
                        
                        //"gl_FragColor = tex;",
                        //"gl_FragColor = mix( refractedColor, tex, clamp( vReflectionFactor, 0.0, 1.0 ) );",
                        //"gl_FragColor = mix( tex, clamp( vReflectionFactor, 0.0, 1.0 ) );",
                        //"gl_FragColor = tex * clamp( vReflectionFactor, 0.0, 1.0 );",
                        "gl_FragColor = tex * clamp(vReflectionFactor, 0.0, 2.0) + texDim;",

                    "}"

    ].join("\n")

};
