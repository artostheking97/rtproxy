/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',

    // Array of Bare servers for fallback
    bare: [
        'https://bare.titaniumnetwork.org/bare/',
        'https://bare.px10.workers.dev/bare/',
        'https://bare.chromehack.com/bare/'
    ],

    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,

    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};
