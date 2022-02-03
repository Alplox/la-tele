if (!self.define) {
    let e, s = {};
    const a = (a, i) => (a = new URL(a + ".js", i).href, s[a] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = s, document.head.appendChild(e)
        } else e = a, importScripts(a), s()
    })).then((() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (i, c) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[n]) return;
        let o = {};
        const r = e => a(e, n),
            d = {
                module: {
                    uri: n
                },
                exports: o,
                require: r
            };
        s[n] = Promise.all(i.map((e => d[e] || r(e)))).then((e => (c(...e), o)))
    }
}
define(["./workbox-056b4b84"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "assets/favicon/android-chrome-192x192.png",
        revision: "7382d4a30c2e168eff4c4ffb0fd51d3f"
    }, {
        url: "assets/favicon/android-chrome-512x512.png",
        revision: "a973a4385344ea5dfde5ef3415f184e9"
    }, {
        url: "assets/favicon/apple-touch-icon.png",
        revision: "d0b62c407096e966a53a20efa58846f1"
    }, {
        url: "assets/favicon/favicon-16x16.png",
        revision: "3a8f3ef3e9d1d6a1baa6f30e0e69bb93"
    }, {
        url: "assets/favicon/favicon-32x32.png",
        revision: "49629c7b2cb1ce3bcefe393916984929"
    }, {
        url: "assets/favicon/favicon.ico",
        revision: "0038c9acba11b6f3ce31e4d5d0dc4a08"
    }, {
        url: "assets/img/v0.5.png",
        revision: "7815d6c189b6c38059638ab2a7f6bf7f"
    }, {
        url: "site.webmanifest",
        revision: "f364c92856c0dbf24383f8d975104f4c"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map