var lock = new Auth0Lock('hEbMPdgCeruBufyJJiTKCkomgagGSs0g', 'trailerparkmedia.auth0.com', {
    auth: {
        params: { scope: 'openid email' }
    }
  }
);

lock.on("authenticated", function(authResult) {
  localStorage.setItem('id_token', authResult.idToken);
});

$.ajaxSetup({
  'beforeSend': function(xhr) {
    if (localStorage.getItem('id_token')) {
      xhr.setRequestHeader('Authorization',
            'Bearer ' + localStorage.getItem('id_token'));
    }
  }
});

$(document).on('click', '#login-cta', function (e) {
  e.preventDefault();

  lock.show();
})

$(document).on('click', '#todos-cta', function (e) {
  e.preventDefault();

  $.ajax({
    url: '/api/v1/todos',
    method: 'GET'
  }).done(function (data) {
    console.log(data);
  })
})
