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
  <select>
    <option label="DM" value="Depeche Mode"></option>
    <option label="Moz" value="Morrissey"></option>
    <option label="NO" value="New Order"></option>
    <option label="TC" value="The Cure"></option>
  </select>
</datalist>
*/

$.fn.datalist = function() {
  
  //first test for native placeholder support before continuing
  return ((typeof this[0].list === 'object' ) && this[0].list !== undefined) ? this : this.each(function() {
    
    //local vars
    var $this = $(this),
        //the main guts of the plugin
        datalist = $('#' + $this.attr('list')),
        opts = datalist.find('option'),
        
        //wrapper stuffs
        width = $this.width(),
        ul = $("<ul>", {"class": "datalist", "width": width, "css": {'position': 'absolute'}}),
        wrapper = $('<div>').css('position', 'relative');
    
    //return this if matching datalist isn't found
    //to be polite if there's any chaining
    if (!datalist.length) {
        return this;
    } else {
      opts.each(function(i, opt) {
        $('<li>')
          .append('<span class="value">'+opt.value+'</span>')
          .append('<span class="label">'+opt.label+'</span>')
          .appendTo(ul);
      });
    };
    
    //stick the stuff in
    $this.wrap(wrapper);
    
    ul.hide().insertAfter($this);
    
    $this.focus(function(){
      ul.show(); 
    });
    
    $this.blur(function(){
      ul.hide();
    });
    
    var lis = $this.next().find('li');
    lis.mousedown(function(){
      var value = $(this).find('span.value').text();
      $this.val(value); 
    });
    
    //make it modular and prettay
    
  });
};