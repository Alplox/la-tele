if (!self.define) {
    let e, s = {};
    const i = (i, a) => (i = new URL(i + ".js", a).href, s[i] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = i, e.onload = s, document.head.appendChild(e)
        } else e = i, importScripts(i), s()
    })).then((() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e
    })));
    self.define = (a, c) => {
        const f = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[f]) return;
        let n = {};
        const o = e => i(e, f),
            r = {
                module: {
                    uri: f
                },
                exports: n,
                require: o
            };
        s[f] = Promise.all(a.map((e => r[e] || o(e)))).then((e => (c(...e), n)))
    }
}




define(["./workbox-056b4b84"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.NetworkOnly([{
        url: "assets/css/modern-normalize.css",
        revision: "e377293cafcbdd25c874629e1501afa9"
    }, {
        url: "assets/css/style.css",
        revision: "85f945b74113c891f5ad05acd66fac26"
    }, {
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
        url: "assets/js/canales.js",
        revision: "dc6ce2e7f62c3797f6396b734f54a98f"
    }, {
        url: "assets/js/main.js",
        revision: "95330724ce9558e28985676ff54dc159"
    }, {
        url: "assets/videojs-7.11.4/lang/es.js",
        revision: "991fd791eda2f12bbbd43b5bb1d0a160"
    }, {
        url: "assets/videojs-7.11.4/video-js.css",
        revision: "8d3f37a93db2b4aabf2d7722aef1e626"
    }, {
        url: "assets/videojs-7.11.4/video.min.js",
        revision: "5bcd00da9afc15b1d133471b9d5a2e14"
    }, {
        url: "index.html",
        revision: "0a565f96db8b643c18295bc9f84b2ab9"
    }, {
        url: "site.webmanifest",
        revision: "f364c92856c0dbf24383f8d975104f4c"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map