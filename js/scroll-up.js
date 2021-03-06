/* scroll-up-bar v0.3.0 (https://github.com/eduardomb/scroll-up-bar) */
!function(a) {
    "use strict";
    var b;
    a.scrollupbar = function(c, d) {
        function e() {
            return h.scrollTop() <= c.offset().top
        }
        function f() {
            return h.scrollTop() < c.offset().top + c.outerHeight()
        }
        d = a.extend({
            enterViewport: a.noop,
            fullyEnterViewport: a.noop,
            exitViewport: a.noop,
            partiallyExitViewport: a.noop
        }, d);
        var g, h = a(window), i = a(document), j = "fixed" == c.css("position") ? 0: c.offset().top, k = h.scrollTop(), l = c.position().top, m = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        return a.scrollupbar.isInViewport = f(), a.scrollupbar.isFullyInViewport = e(), m ? (h.on("touchstart.scrollupbar", function() {
            k = h.scrollTop()
        }), h.on("touchend.scrollupbar", function() {
            var b = h.scrollTop();
            k > b || b - c.outerHeight() < j ? j >= b ? (c.css({
                position: "absolute",
                top: l
            }), c.show(function() {
                a.scrollupbar.isInViewport=!0, a.scrollupbar.isFullyInViewport=!0, d.enterViewport(), d.fullyEnterViewport()
            })) : (c.css({
                position: "fixed",
                top: 0
            }), a.scrollupbar.isInViewport=!0, d.enterViewport(), c.slideDown(function() {
                a.scrollupbar.isFullyInViewport=!0, d.fullyEnterViewport()
            })) : b > k && (a.scrollupbar.isFullyInViewport=!1, d.partiallyExitViewport(), c.slideUp(function() {
                a.scrollupbar.isInViewport=!1, d.exitViewport()
            })), k = b
        })) : h.on("scroll.scrollupbar", function() {
            var b = h.scrollTop(), m = c.outerHeight();
            0 > b || b > i.height() - h.height() || (g && clearTimeout(g), k > b ? (!a.scrollupbar.isInViewport && k - m >= j && (c.css("top", k - m), a.scrollupbar.isInViewport=!0, d.enterViewport()), e() && (c.css(b >= j ? {
                position: "fixed",
                top: 0
            } : {
                position: "absolute",
                top: l
            }), a.scrollupbar.isFullyInViewport || (a.scrollupbar.isFullyInViewport=!0, d.fullyEnterViewport())), g = setTimeout(function() {
                e() || (c.css({
                    position: "fixed",
                    top: c.offset().top - b
                }), c.animate({
                    top: 0
                }, 100, function() {
                    a.scrollupbar.isFullyInViewport=!0, d.fullyEnterViewport()
                }))
            }, 400)) : b > k && (a.scrollupbar.isFullyInViewport && (c.css({
                position: "absolute",
                top: k > j ? k: l
            }), e() || (a.scrollupbar.isFullyInViewport=!1, d.partiallyExitViewport())), a.scrollupbar.isInViewport&&!f() && (a.scrollupbar.isInViewport=!1, d.exitViewport()), g = setTimeout(function() {
                f() && b - m >= j && c.animate({
                    top: b - m
                }, 100, function() {
                    a.scrollupbar.isInViewport=!1, d.exitViewport()
                })
            }, 400)), k = b)
        }), b = function() {
            h.off(".scrollupbar"), c.css({
                position: "absolute",
                top: l
            })
        }, c
    }, a.scrollupbar.destroy = function() {
        return b ? b() : void 0
    }, a.fn.scrollupbar = function(b) {
        return a.scrollupbar(this, b)
    }
}(jQuery);

