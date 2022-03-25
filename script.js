window.onload = function() {
    window.setTimeout(function () { 
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      document.querySelector('head').appendChild(script);
    }, 2000);
};