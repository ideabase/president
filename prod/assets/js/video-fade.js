// Check for when jQuery has loaded //

function defer(method) {
    if (window.jQuery)
        method();
    else
        setTimeout(function() { defer(method) }, 50);
}

// Close button for menu //

defer(function () {
  $("a").click(function(){
      var href= $(this).attr('href');
      $("#bgvid").fadeOut(200, function(){
        window.location=href;
      });
  return false;
  });
});
