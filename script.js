$(document).ready(function () {

    var gif1 = new SuperGif({
        gif: document.getElementById('example1'),
        max_width: $(window).height(),
        progressbar_height: 0
    });

    gif1.load(function () {
        init();
    });

    function init() {
        var h = $("#main").height() - $(window).height();
        var p = h / gif1.get_length();

        function checkScroll(that) {

            var scroll_top = $(that).scrollTop();

            var i = Math.floor(scroll_top / p);
            gif1.move_to(i);
        }

        $(window).scroll(function () {
            checkScroll(this);
        });
        checkScroll(window);
    }
});