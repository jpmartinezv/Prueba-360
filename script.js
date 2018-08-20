$(document).ready(function () {

    var gif1 = new SuperGif({
        gif: document.getElementById('example1'),
        max_width: 600,
        progressbar_height: 0
    });

    gif1.load(function () {
        init();
    });

    function init() {
        var h = $("#main").height() - $(window).height();
        var p = h / gif1.get_length();

        $(window).scroll(function () {
            var scroll_top = $(this).scrollTop();

            var i = Math.floor(scroll_top / p);

            console.log(i, gif1.get_length());
            gif1.move_to(i);
        });
    }
});