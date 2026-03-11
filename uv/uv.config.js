/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    // List of Bare servers to try
    bareServers: [
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
    sw: '/uv/uv.sw.js',
};

// Override the bare property dynamically to try servers in order
(function() {
    let index = 0;
    const originalFetch = fetch;
    fetch = function(resource, init) {
        if (resource.startsWith(self.__uv$config.prefix)) {
            const tryServer = () => {
                if (index >= self.__uv$config.bareServers.length) return Promise.reject('All Bare servers failed');
                const url = resource.replace(self.__uv$config.prefix, self.__uv$config.bareServers[index]);
                return originalFetch(url, init).catch(() => {
                    index++;
                    return tryServer();
                });
            };
            return tryServer();
        } else {
            return originalFetch(resource, init);
        }
    };
})();
