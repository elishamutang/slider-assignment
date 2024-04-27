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
                var s = r.getElementsByTagName('script')
                if (s.length)
                    for (
                        var a = s.length - 1;
                        a > -1 && (!t || !/^http(s?):/.test(t));

                    )
                        t = s[a--].src
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
        s = document.querySelector('.slider-frame'),
        a = () => Array.from(document.getElementsByClassName('slide-btn')),
        c = document.createElement('img')
    ;(c.src = Object.keys(t)
        .map((e, r) => (0 === r && (c.id = e), t[e]))
        .filter((e, t) => {
            if (0 === t) return e
        })),
        s.append(c)
    let i = c.id
    r.addEventListener('click', (e) => {
        if ('BUTTON' === e.target.tagName) {
            let [r] = Object.keys(t)
                .map((e, t) => {
                    if (e === i) return t
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
                    .map((e, s) => {
                        if (s === r) return (i = e), (c.id = e), t[e]
                    })
                    .filter((e) => void 0 !== e)),
                a().forEach((e) => {
                    1 * e.dataset.idx === r
                        ? (e.className += ' selected')
                        : (e.className = 'slide-btn')
                })
        }
    })
    const l = Object.keys(t).length,
        n = document.querySelector('.small-slider-btns')
    for (let e = 0; e < l; e++) {
        const t = document.createElement('button')
        ;(t.dataset.idx = e), (t.className = 'slide-btn'), n.append(t)
    }
    n.addEventListener('click', (e) => {
        'BUTTON' === e.target.tagName &&
            ((c.src = Object.keys(t)
                .map((r, s) => {
                    if (s === 1 * e.target.dataset.idx)
                        return (
                            (i = r),
                            (c.id = r),
                            Array.from(e.target.classList).includes(
                                'selected'
                            ) || (e.target.className += ' selected'),
                            t[r]
                        )
                })
                .filter((e) => void 0 !== e)),
            a().forEach((t) => {
                t !== e.target && (t.className = 'slide-btn')
            }))
    })
})()
