  // Turn on Bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  // 15 days from now!
  function get15dayFromNow() {
    return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
  }

  var $clock = $('#clock');

  $clock.countdown(get15dayFromNow(), function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
  });

  $('#btn-reset').click(function() {
    $clock.countdown(get15dayFromNow());
  });

  $('#btn-pause').click(function() {
    $clock.countdown('pause');
  });

  $('#btn-resume').click(function() {
    $clock.countdown('resume');
  });
