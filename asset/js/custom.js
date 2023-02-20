$(function () {

    const link = document.location.href;
    console.log(link);

    $(".menu-item").removeClass("active");
    if (link.includes("cloudflare")) {
        $(".menu-item:nth-child(1)").addClass("active");
    } else if (link.includes("ktline")) {
        $(".menu-item:nth-child(2)").addClass("active");
    } else if (link.includes("colocation")) {
        $(".menu-item:nth-child(3)").addClass("active");
    } else if (link.includes("contact")) {
        $(".menu-item:nth-child(4)").addClass("active");
    }




    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $("#nav-toggle").click(function () {
        $(".menu-wrap.mobile, .menu-toggle").toggleClass("active");
    });


    loadMenu();
    sticky();


    $(".policyCheck1").on("click", function (e) {
        e.preventDefault();
        $(".check").removeClass("active");
        $(this).addClass("active");
        $("#div1").css("display", "block");
        $("#div2").css("display", "none");
    });

    $(".policyCheck2").on("click", function (e) {
        e.preventDefault();
        $(".check").removeClass("active");
        $(this).addClass("active");
        console.log("2");
        $("#div1").css("display", "none");
        $("#div2").css("display", "block");
    });


    setInterval(() => {
        $(".owl-height").css("height", "760px");
    }, 30);
    $(".owl-carousel").on("click", function () {
        $(".owl-height").css("height", "760px");
    });
});


function loadMenu() {
    $(".nav-menu .menu-toggle").on("click", function () { $(this).closest(".menu-wrap").toggleClass("active") })
}

function sticky() {
    $.fn.scrollBottom = function () {
        return $(document).height() - this.scrollTop() - this.height();
    };
    var $el = $('#sidebar');
    if (!$el) return;
    var $window = $(window);
    if (!$el.parent().position()) {
        return;
    }
    if (!$el.parent().position().top) {
        return;
    }

    var top = $el.parent().position().top;

    $window.bind("scroll resize", function () {
        var gap = $window.height() - $el.height() - -35;
        var visibleFoot = 965 - $window.scrollBottom();
        var scrollTop = $window.scrollTop()
        if (scrollTop < top + -35) {
            $el.css({
                top: (top - scrollTop) + "px",
                bottom: "auto"
            });
        } else if (visibleFoot > gap) {
            $el.css({
                top: "auto",
                bottom: visibleFoot + "px"
            });
        } else {
            $el.css({
                top: -35,
                bottom: "auto"
            });
        }
    }).scroll();
}

function goClose() {
    $("#nav-toggle").click();
}