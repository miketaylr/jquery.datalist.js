// HTML5 datalist plugin
// Copyright (c) 2010-The End of Time, Mike Taylor, http://miketaylr.com
// MIT Licensed: http://www.opensource.org/licenses/mit-license.php
//
// Enables cross-browser* html5 datalist for inputs, by first testing
// for a native implementation before building one.
//
//
// USAGE: 
//$('input[list]').datalist();

/* 
<input type="search" autofocus list="suggestions">
<datalist id="suggestions">
  <option label="DM" value="Depeche Mode"></option>
  <option label="Moz" value="Morrissey"></option>
  <option label="NO" value="New Order"></option>
  <option label="TC" value="The Cure"></option>
</datalist>
*/

$.fn.datalist = function(options) {
  //global config opts
  var defaults = {
    //magick!
  };
  
  //merge in passed in options, if any
  var opts = $.extend(defaults, options);
  
  //first test for native placeholder support before continuing
  return ((typeof this[0].list === 'object' ) && this[0].list !== undefined) ? this : this.each(function() {
    
    //local vars
    var $this = $(this);
    //width for dynamic ul creation
    var width = $this.width();
    var ul = $("<ul>").css("width", width);
    var datalistRef = $this.attr('list');
    var datalist = $('#'+datalistRef);
    var opts = datalist.find('option');
    var wrapper = $('<div>').css('position', 'relative');
    
    $('#test').css('width', width);
    
    //return if matching datalist isn't found
    if (datalist.length) {
      var lis = opts.each(function(i, opt) {
        $('<li>')
          .append('<span class="value">'+opt.value+'</span>')
          .append('<span class="label">'+opt.label+'</span>')
          .appendTo(ul);
      }); 
    } else {return this;}
    
    //stick the stuff in
    $this.wrap(wrapper);
    ul.css('display', 'none').insertAfter($this);
    
    $this.focus(function(){
      ul.show();
    });
    
    $this.blur(function(){
      ul.hide();
    });
    
    //need to update value
    
    console.log(ul);
    //get reference to matching datalist √
    //die silently if not found √
    //create ul
    //collect all the options, turn 'em into <li>s √
    //jam that in new ul √
    //position that guy under the input √
    //show it on focus, hide on blue √
    //update value on li click
    //make it modular and prettay
    
  });
};