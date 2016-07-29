var lock = new Auth0Lock('hEbMPdgCeruBufyJJiTKCkomgagGSs0g', 'trailerparkmedia.auth0.com', {
    auth: {
        params: { scope: 'openid email' }
    }
  }
);

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
