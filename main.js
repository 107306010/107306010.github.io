$(document).ready(function () {

    // jQuery methods go here...

    $(".navbar-toggler").click(function () {
        $(".navbar-list").toggleClass("active");
        $(".line").toggleClass("active")
    });
    $("#sk1").hover(function () {
        $(this).toggleClass("active");
        $(this).text("Java");
    }
        , function () {
            $(this).toggleClass("active");
            $(this).text("J");
        }
    );
    $("#sk2").hover(function () {
        $(this).toggleClass("active");
        $(this).text("Python");
    }
        , function () {
            $(this).toggleClass("active");
            $(this).text("P");
        }
    );
    $("#sk3").hover(function () {
        $(this).toggleClass("active");
        $(this).text("Web設計");
    }
        , function () {
            $(this).toggleClass("active");
            $(this).text("W");
        }
    );
    $("#sk4").hover(function () {
        $(this).toggleClass("active");
        $(this).text("React.js");
    }
        , function () {
            $(this).toggleClass("active");
            $(this).text("R");
        }
    );
    $("#sk5").hover(function () {
        $(this).toggleClass("active");
        $(this).text("Node.js");
    }
        , function () {
            $(this).toggleClass("active");
            $(this).text("N");
        }
    );

    $("a").click(function () {

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 20 + "px"
        }, 500);

    });

});

var titleEls = document.querySelectorAll(".slideLetterIn")
titleEls.forEach(el => {
    el.innerHTML = el.innerText
        .split(" ")
        .map(l => `<span class='outer'>
            <span class='inner'>${l}</span>
            </span>`)
        .join(" ")
})
var titleEls = document.querySelectorAll(".slideLetterUp")
titleEls.forEach(el => {
    el.innerHTML = el.innerText
        .split(" ")
        .map(l => `<span class='outer'>
            <span class="inner1"> ${l} </span>
            </span>`)
        .join(" ")
})
$("#textBtn").click(function () {
    $(".inner").toggleClass("active");
})
$("#textBtn1").click(function () {
    $(".inner1").toggleClass("active");
})