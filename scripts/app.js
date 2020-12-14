  $('#count').each(function () {
        $(this).prop('Counter',Math.floor(Math.random() * 75) + 40).animate({
            Counter: 0
        }, {
            duration: Number($(this).attr("data-duration")),
            easing: 'easeInOutQuad',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
