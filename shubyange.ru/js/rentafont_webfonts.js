! function () {
    function t(t) {
        var f = document.createElement("link");
        location.hostname.indexOf(".local.") < 0 ? css_link = "//tilda.rentafont.com/web_fonts/webfontcss/" + e.s + "?fonts=" + e.l + "&formats=" + t + "&by_style=" + e.a + "&by_id=" + e.c : css_link = "//rentafont.local.com:3000/web_fonts/webfontcss/" + e.s + "?fonts=" + e.l + "&formats=" + t + "&by_style=" + e.a + "&by_id=" + e.c, f.setAttribute("href", css_link), f.setAttribute("rel", "stylesheet"), f.setAttribute("type", "text/css"), f.setAttribute("media", "all"), f.addEventListener("load", function (t) {
            o(s), "function" == typeof e.callback && e.callback()
        }), f.addEventListener("error", function (t) {
            o(s)
        });
        var a = s.firstChild;
        s.insertBefore(f, a)
    }
    var e = {
        init: function () {
            this.browser = this.ss(this.db), this.version = this.sv(navigator.userAgent) || this.sv(navigator.appVersion), this.os = this.ss(this.dos), this.s = WebFontConfig.id, this.l = WebFontConfig.fonts, this.callback = WebFontConfig.callback, WebFontConfig.by_style ? this.a = 1 : this.a = 0, WebFontConfig.by_id ? this.c = 1 : this.c = 0,
                function () {
                    var o = e.browser,
                        s = e.version,
                        a = e.os;
                    switch (o) {
                        case "Opera":
                            switch (!0) {
                                case s >= 23:
                                    f = "woff2-woff-ttf-svg";
                                    break;
                                default:
                                    f = "woff-ttf-svg"
                            }
                            break;
                        case "Chrome":
                            switch (!0) {
                                case s >= 36:
                                    f = "woff2-woff-svg-ttf";
                                    break;
                                case s >= 5 && s <= 35:
                                    f = "woff-svg-ttf-woff2";
                                    break;
                                default:
                                    f = "woff-ttf-svg-woff2"
                            }
                            break;
                        case "Safari":
                            switch (!0) {
                                case s >= 10.2 && "iPhone/iPod" == a:
                                    f = "woff2-woff-svg-ttf";
                                    break;
                                case s >= 5.1 && "iPhone/iPod" == a:
                                    f = "woff-svg-ttf-woff2";
                                    break;
                                case s >= 4.3 && "iPhone/iPod" == a:
                                    f = "ttf-svg-woff-woff2";
                                    break;
                                case s >= 12:
                                    f = "woff2-woff-svg-ttf";
                                    break;
                                case s >= 11:
                                case s >= 10:
                                case s >= 5.1 && s < 10:
                                    f = "woff-svg-ttf-woff2";
                                    break;
                                case s >= 3.2 && s < 5.1:
                                    f = "svg-ttf-woff-woff2";
                                    break;
                                default:
                                    f = "woff-ttf-svg-woff2"
                            }
                            break;
                        case "Mozilla":
                            switch (!0) {
                                case s >= 39:
                                    f = "woff2-woff-ttf";
                                    break;
                                case s >= 3.6 && s <= 38:
                                    f = "woff-ttf-woff2";
                                    break;
                                default:
                                    f = "ttf-woff-woff2"
                            }
                            break;
                        case "Explorer":
                            switch (!0) {
                                case s >= 9:
                                    f = "woff-eot-ttf";
                                    break;
                                default:
                                    f = "eot-woff-ttf"
                            }
                            break;
                        case "Firefox":
                        case "iPhone":
                            switch (!0) {
                                case s >= 39:
                                    f = "woff2-woff-ttf";
                                    break;
                                case s >= 3.6 && s <= 38:
                                    f = "woff-ttf-woff2";
                                    break;
                                default:
                                    f = "ttf-woff-woff2"
                            }
                            break;
                        default:
                            f = "woff"
                    }
                    t(f)
                }()
        },
        ss: function (t) {
            for (var e = 0; e < t.length; e++) {
                var f = t[e].s,
                    o = t[e].prop;
                if (this.vss = t[e].ver || t[e].id, f) {
                    if (-1 != f.indexOf(t[e].st)) return t[e].id
                } else if (o) return t[e].id
            }
        },
        sv: function (t) {
            var e = t.indexOf(this.vss);
            if (-1 != e) return parseFloat(t.substring(e + this.vss.length + 1))
        },
        db: [{
            s: navigator.userAgent,
            st: "Chrome",
            id: "Chrome"
        }, {
            s: navigator.userAgent,
            st: "OmniWeb",
            ver: "OmniWeb/",
            id: "OmniWeb"
        }, {
            s: navigator.vendor,
            st: "Apple",
            id: "Safari",
            ver: "Version"
        }, {
            prop: window.opera,
            id: "Opera",
            ver: "Version"
        }, {
            s: navigator.vendor,
            st: "iCab",
            id: "iCab"
        }, {
            s: navigator.vendor,
            st: "KDE",
            id: "Konqueror"
        }, {
            s: navigator.userAgent,
            st: "Firefox",
            id: "Firefox"
        }, {
            s: navigator.vendor,
            st: "Camino",
            id: "Camino"
        }, {
            s: navigator.userAgent,
            st: "Netscape",
            id: "Netscape"
        }, {
            s: navigator.userAgent,
            st: "MSIE",
            id: "Explorer",
            ver: "MSIE"
        }, {
            s: navigator.userAgent,
            st: "Gecko",
            id: "Mozilla",
            ver: "rv"
        }, {
            s: navigator.userAgent,
            st: "Mozilla",
            id: "Netscape",
            ver: "Mozilla"
        }],
        dos: [{
            s: navigator.platform,
            st: "Win",
            id: "Windows"
        }, {
            s: navigator.platform,
            st: "Mac",
            id: "Mac"
        }, {
            s: navigator.userAgent,
            st: "iPhone",
            id: "iPhone/iPod"
        }, {
            s: navigator.userAgent,
            st: "Android",
            id: "Android"
        }, {
            s: navigator.platform,
            st: "Linux",
            id: "Linux"
        }]
    };

    function o(t) {
        var e = document.getElementById("btg-renta-load-font");
        "undefined" != typeof rentafontFontsLoaded ? rentafontFontsLoaded() : e && t.removeChild(e)
    }
    var s = null,
        a = 0;
    ! function t() {
        if (a++, (s = document.head || document.getElementsByTagName("head")[0]) && "undefined" != typeof WebFontConfig) "undefined" == typeof rentafontFontsLoaded && (f = s, (i = document.createElement("style")).type = "text/css", i.id = "btg-renta-load-font", i.innerHTML = "body *{color:transparent!important;}", f.insertBefore(i, f.firstChild)), setTimeout(function () {
            o(s)
        }, 3e3), e.init();
        else {
            if (10 == a) return 0;
            setTimeout(function () {
                t()
            }, 10)
        }
        var f, i
    }()
}();