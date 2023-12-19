document.addEventListener('DOMContentLoaded', function () {
    const lock = new Auth0Lock('teFgXowSHCRJ3qRwyM8skZiCgF79a7gC', 'dev-l6ts8jrbelnc83hb.us.auth0.com', {
        autoclose: true,
        theme: {
            primaryColor: '#3498db',
            logo: 'https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png',
        },
        languageDictionary: {
            title: 'Регистрация пользователя',
        },
    });

    const openRegistrationButton = document.getElementById('openRegistration');

    openRegistrationButton.addEventListener('click', function () {
        lock.show();
    });
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        lock.hide();
    }
});

lock.on('authenticated', function (authResult) {
    console.log('Authenticated!', authResult);
});

lock.on('authorization_error', function (error) {
    console.error('Authorization Error', error);
});

lock.on('hide', function () {
    console.log('Lock is hidden');
});
