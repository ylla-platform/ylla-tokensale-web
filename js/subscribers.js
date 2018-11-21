(function($) {
    $('#email-form').on('submit', (e) => {
        e.preventDefault();

        const email = $('#Footer-Subscribe-Name-3').val();

        $.post('/api/1/subscribers', {
            email
        })
            .then(res => {
                $('.w-form-done').show();
                $('.w-form-fail').hide();
                console.log(res);
            })
            .catch(err => {
                $('.w-form-done').hide();
                $('.w-form-fail').show();
                console.error(err);
            });
    });
}(jQuery));
