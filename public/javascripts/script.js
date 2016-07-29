$(document).on('click', '#todos-cta', function (e) {
  e.preventDefault();
  
  $.ajax({
    url: '/api/v1/todos',
    method: 'GET'
  }).done(function (data) {
    console.log(data);
  })
})
