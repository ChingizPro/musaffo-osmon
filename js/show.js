(() => {
    const imgs = $('.show__img');
    const modalDismiss = $('.dismiss');
    const slides = $('.slide-el');

    imgs.on('click', (evt) => {
        $('.show-carousel').css('opacity', '1');
        $('.show-carousel').css('visibility', 'visible');
        let key = $(evt.target).attr('data-index');
    });

    const dismiss = () => {
        $('.show-carousel').css('opacity', '0');
        $('.show-carousel').css('visibility', 'hidden');
    };

    modalDismiss.on('click', dismiss);
})();