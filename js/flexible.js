!function (t) {
  var e = 750, i = t.document, n = i.documentElement, o = 'orientationchange' in t ? 'orientationchange' : 'resize', a = function t () {
      var i = n.getBoundingClientRect().width
      return n.style.fontSize = 5 * Math.max(Math.min(i / e * 20, 11.2), 8.55) + 'px', t
    }()
  n.setAttribute('data-dpr', t.navigator.appVersion.match(/iphone/gi) ? t.devicePixelRatio : 1), /iP(hone|od|ad)/.test(t.navigator.userAgent) && (i.documentElement.classList.add('ios'), parseInt(t.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8 && i.documentElement.classList.add('hairline')), i.addEventListener && (t.addEventListener(o, a, !1), i.addEventListener('DOMContentLoaded', a, !1))
}(window)
