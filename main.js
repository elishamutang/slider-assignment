;(() => {
    'use strict'
    var e = {}
    ;(e.g = (function () {
        if ('object' == typeof globalThis) return globalThis
        try {
            return this || new Function('return this')()
        } catch (e) {
            if ('object' == typeof window) return window
        }
    })()),
        (() => {
            var t
            e.g.importScripts && (t = e.g.location + '')
            var r = e.g.document
            if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) {
                var i = r.getElementsByTagName('script')
                if (i.length)
                    for (
                        var c = i.length - 1;
                        c > -1 && (!t || !/^http(s?):/.test(t));

                    )
                        t = i[c--].src
            }
            if (!t)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                )
            ;(t = t
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (e.p = t)
        })()
    const t = {
            plantPicture: e.p + 'pexels-622162183-21371176.jpg',
            foxPicture: e.p + 'pexels-adamlowly-2570718.jpg',
            hikersPic: e.p + 'pexels-bylukemiller-20178475.jpg',
            mountainPic: e.p + 'pexels-therato-19434018.jpg',
        },
        r = document.querySelector('.slider-container'),
        i = document.querySelector('.slider-frame'),
        c = document.createElement('img')
    ;(c.src = Object.keys(t)
        .map((e, r) => (0 === r && (c.id = e), t[e]))
        .filter((e, t) => {
            if (0 === t) return e
        })),
        i.append(c)
    let n = c.id
    r.addEventListener('click', (e) => {
        if ('BUTTON' === e.target.tagName) {
            let [r] = Object.keys(t)
                .map((e, t) => {
                    if (e === n) return t
                })
                .filter((e) => void 0 !== e)
            'Right' === e.target.textContent
                ? r === Object.keys(t).length - 1
                    ? (r = 0)
                    : r++
                : 0 === r
                  ? (r--, (r = Object.keys(t).length - 1))
                  : r--,
                (c.src = Object.keys(t)
                    .map((e, i) => {
                        if (i === r) return (n = e), (c.id = e), t[e]
                    })
                    .filter((e) => void 0 !== e))
        }
    })
    const a = Object.keys(t).length,
        s = document.querySelector('.small-slider-btns')
    for (let e = 0; e < a; e++) {
        const t = document.createElement('button')
        ;(t.dataset.idx = e), (t.className = 'slide-btn'), s.append(t)
    }
    s.addEventListener('click', (e) => {
        'BUTTON' === e.target.tagName &&
            (c.src = Object.keys(t)
                .map((r, i) => {
                    if (i === 1 * e.target.dataset.idx)
                        return (n = r), (c.id = r), t[r]
                })
                .filter((e) => void 0 !== e))
    })
})()
