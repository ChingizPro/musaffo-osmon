(() => {
    const buttons = $('.client__button');
    const modalDismiss = $('.modal-dismiss');

    buttons.on('click', () => {
        $('.video-modal').css('display', 'flex');
    })

    modalDismiss.on('click', () => {
        $('.video-modal').css('display', 'none');
    })
})();