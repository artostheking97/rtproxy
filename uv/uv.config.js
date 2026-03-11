/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/active/uv/service/",
    bare: [
        "https://bare.titaniumnetwork.org/bare/",
        "https://uv.holyubofficial.net/bare/",
        "https://bare.px10.workers.dev/bare/"
    ],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/active/uv/uv.handler.js",
    client: "/active/uv/uv.client.js",
    bundle: "/active/uv/uv.bundle.js",
    config: "/active/uv/uv.config.js",
    sw: "/active/uv/uv.sw.js",
};
